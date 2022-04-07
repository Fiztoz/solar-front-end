import { useRef, useState, useEffect } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Map from "./map";
import CalculationForm from "../../forms/calculation-form";
import usePageOffset from "../../../library/page-offset";
import useWindowDimensions from "../../../library/window-dimensions";

const CalculationMap = ({ initCenter, data, polygon, onCenterChange, onDrawEnd, onFromSubmit }) => {
  const [area, setArea] = useState(data.rooftopArea);

  const { x, y } = usePageOffset();
  const { width, height } = useWindowDimensions();
  const mapRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handlerOnDrawEnd = (e) => {
    setArea(e.area);
    onDrawEnd(e.polygon);
    window.scrollTo({
      top: formRef.current.getBoundingClientRect().top - 66,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlerOnDrawReset = () => {
    setArea(0);
  };

  const handlerOnFormSubmit = (e) => {
    onFromSubmit(e);
  };

  const handlerOnCenterChange = (e) => {
    onCenterChange(e);
  };

  return (
    <>
      <Flex minH="calc(100vh - 66px)" direction="column" pt={{ base: 4, lg: 10 }}>
        <Container maxW="container.lg">
          <Flex direction="column" align="center">
            <Text fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={600} color="dark" textAlign="center">
              คำนวณขนาด Solar Rooftop ที่เหมาะสม
            </Text>
            <Text fontSize="xl" fontWeight={400} color="gray.01" textAlign="center" mt={3}>
              ค้นหาตำแหน่งติดตั้งของคุณ จากนั้นกำหนดจุดแล้วลากเส้นรอบบริเวณที่ต้องการบนหลังคา
              เพื่อกำหนดพื้นที่สำหรับติดตั้ง Solar Rooftop
            </Text>
          </Flex>
        </Container>
        <Box pt={3}>
          <Map
            initCenter={initCenter}
            initPolygon={polygon}
            mapRef={mapRef}
            minH={height - mapRef?.current?.offsetTop - 66}
            onDrawEnd={(e) => handlerOnDrawEnd(e)}
            onDrawReset={() => handlerOnDrawReset()}
            onCenterChange={(e) => handlerOnCenterChange(e)}
          />
        </Box>
      </Flex>
      <Box ref={formRef} bgColor="gray.09" w="100%" py={16}>
        <Container maxW="container.sm" w="100%">
          <CalculationForm data={data} area={area} onFormSubmitted={(e) => handlerOnFormSubmit(e)} />
        </Container>
      </Box>
    </>
  );
};

export default CalculationMap;
