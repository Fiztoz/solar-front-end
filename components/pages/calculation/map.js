import { useRef, useState, useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  IconButton,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { MdSearch, MdOutlineGpsFixed, MdOutlineBackHand, MdModeEditOutline } from "react-icons/md";

const Map = ({ initCenter, initPolygon, minH, mapRef, onDrawEnd, onDrawReset, onCenterChange }) => {
  const options = {
    center: {
      lat: 13.8518255,
      lng: 100.5584178,
    },
    zoom: 16,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  };
  const mapCenterListener = null;
  const drawingManagerListener = null;
  const autocompleteListener = null;

  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [map, setMap] = useState(null);
  const [drawingManager, setDrawingManager] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [mode, setMode] = useState("drag");
  const [polygon, setPolygon] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        });
      }
    };
    const getLocationInterval = setInterval(() => {
      getLocation();
    }, 10000);
    return () => {
      clearInterval(getLocationInterval);
    };
  }, []);

  const onGoogleApiLoaded = (e) => {
    setMap(e.map);
  };

  useEffect(() => {
    if (map) {
      map.setOptions(options);
      map.setMapTypeId(google.maps.MapTypeId.HYBRID);
      if (initPolygon) {
        setPolygon(initPolygon);
        initPolygon.setMap(map);
      }
      if (initCenter) {
        map.setCenter({ lat: initCenter.lat(), lng: initCenter.lng() });
      }
      mapCenterListener = google.maps.event.addListener(map, "dragend", () => onDragEndHandler());
      setDrawingManager(
        new google.maps.drawing.DrawingManager({
          drawingMode: null,
          drawingControl: false,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYGON],
          },
          polygonOptions: {
            fillColor: "#FFC54C",
            fillOpacity: 0.5,
            strokeColor: "#FFC54C",
            strokeWeight: 4,
            editable: false,
            draggable: true,
            clickable: false,
          },
        })
      );
      setAutocomplete(new google.maps.places.Autocomplete(inputRef.current));
    }
    return () => google.maps.event.removeListener(mapCenterListener);
  }, [map]);

  useEffect(() => {
    if (drawingManager) {
      drawingManager.setMap(map);
      drawingManagerListener = google.maps.event.addListener(drawingManager, "polygoncomplete", (e) =>
        onPolygonComplete(e)
      );
    }
    return () => google.maps.event.removeListener(drawingManagerListener);
  }, [drawingManager]);

  useEffect(() => {
    if (drawingManager) {
      autocomplete.bindTo("bounds", map);
      autocompleteListener = google.maps.event.addListener(autocomplete, "place_changed", () => onAutocomplete());
    }
    return () => google.maps.event.removeListener(autocompleteListener);
  }, [autocomplete]);

  const onAutocomplete = () => {
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
      onCenterChange(map.getCenter());
    }
  };

  const onDragEndHandler = (e) => {
    onCenterChange(map.getCenter());
  };

  const onCurrentLocation = () => {
    map.setCenter(userLocation);
    map.setZoom(17);
    onCenterChange(map.getCenter());
  };

  const onChangeMode = (mode) => {
    if (mode == "drag") {
      drawingManager.setDrawingMode(null);
    } else if (mode == "draw") {
      drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    }
    setMode(mode);
  };

  const onPolygonComplete = (e) => {
    setPolygon((current) => {
      if (current) {
        current.setMap(null);
      }
      return e;
    });
    onDrawEnd({ area: getArea(e), polygon: e });
  };

  const onReset = () => {
    if (polygon) {
      polygon.setMap(null);
      onDrawReset();
    }
  };

  const getArea = (polygon) => {
    return Math.round(google.maps.geometry.spherical.computeArea(polygon.getPath()) * 100) / 100;
  };

  return (
    <Box ref={mapRef} position="relative" w="100%" h="450px" minH={minH}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
          libraries: ["places", "drawing", "geometry"],
        }}
        onGoogleApiLoaded={(e) => onGoogleApiLoaded(e)}
        defaultCenter={options.center}
        defaultZoom={options.zoom}
      ></GoogleMapReact>
      <Flex position="absolute" top="0" mt={3} w="100%" justifyContent="center">
        <InputGroup position="absolute" w={{ base: "260px", lg: "360px" }}>
          <InputLeftElement pointerEvents="none">
            <Icon as={MdSearch} />
          </InputLeftElement>
          <Input ref={inputRef} variant="outline-valid" type="text" bgColor="light" placeholder="ค้นหาสถานที่" />
        </InputGroup>
      </Flex>
      <IconButton
        disabled={!userLocation.lat || !userLocation.lng}
        position="absolute"
        top={0}
        mt={3}
        right={0}
        mr={3}
        display={{ base: "block", sm: "block" }}
        variant="light"
        icon={<Icon as={MdOutlineGpsFixed} w={6} h={6} mt={1} />}
        onClick={() => onCurrentLocation()}
      />
      <Flex position="absolute" bottom="0" mb={3} w="100%" justifyContent="center">
        <ButtonGroup isAttached>
          <IconButton
            bgColor={mode == "drag" ? "secondary.03" : "light"}
            _hover={mode == "drag" ? { bgColor: "secondary.03" } : { bgColor: "light" }}
            icon={<Icon as={MdOutlineBackHand} />}
            onClick={() => onChangeMode("drag")}
          />
          <IconButton
            bgColor={mode == "draw" ? "secondary.03" : "light"}
            _hover={mode == "draw" ? { bgColor: "secondary.03" } : { bgColor: "light" }}
            icon={<Icon as={MdModeEditOutline} />}
            onClick={() => onChangeMode("draw")}
          />
          <Button variant="light" color="dark" onClick={() => onReset()}>
            เริ่มใหม่
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Map;
