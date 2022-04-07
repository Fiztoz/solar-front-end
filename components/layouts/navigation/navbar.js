import { useRouter } from "next/router";
import { useRef } from "react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Container,
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Icon,
  VStack,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

import Logo from "./logo";
import NavMenu from "./nav-menu";
import NavAccordion from "./nav-accordion";

import useWindowDimensions from "../../../library/window-dimensions";
import usePageOffset from "../../../library/page-offset";
import route from "../../route";

const Navbar = (props, ref) => {
  const boxRef = useRef(null);
  const { path } = props;
  const routePath = route();

  const menuItem = [
    { name: "คำนวณขนาดติดตั้ง", type: "button", href: routePath.calculation },
    // {
    //   name: "เครื่องมือและตัวช่วยสำหรับมือใหม่",
    //   type: "menu",
    //   children: [
    //     { name: "แบบประเมินความเหมาะสมในการติดตั้ง", href: routePath.suitability },
    //     { name: "คำนวณขนาดติดตั้ง", href: routePath.calculation },
    //   ],
    // },
    {
      name: "คลังความรู้",
      type: "menu",
      children: [
        { name: "ความรู้เรื่อง Solar Rooftop", href: routePath.knowledge.solarRooftop },
        { name: "หน่วยงานที่เกี่ยวข้อง", href: routePath.knowledge.agency },
      ],
    },
    { name: "ติดต่อเรา", type: "button", href: routePath.contact },
  ];

  const logoColor = {};
  logoColor[routePath.contact] = "light";

  const navSize = {};
  navSize[routePath.contact] = "100%";

  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const { x, y } = usePageOffset();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  useEffect(() => {
    if (width > Number(theme.__breakpoints.asObject.lg.split("em")[0]) * 16) {
      onClose();
    }
  }, [width]);

  return (
    <Box
      ref={ref}
      position="fixed"
      display="flex"
      flexDirection="column"
      as="nav"
      w="100%"
      bg={y > 0 ? "lightTransparent" : "transparent"}
      backdropFilter={y > 0 ? "blur(10px)" : "blur(0px)"}
      zIndex={2000}
      {...props}
    >
      <Container maxW={navSize[path] ? navSize[path] : "container.lg"}>
        <Box ref={boxRef} w="100%"></Box>
      </Container>
      {boxRef?.current?.clientWidth && (
        <motion.div
          initial={false}
          animate={{ width: boxRef?.current?.clientWidth ? boxRef?.current?.clientWidth : "100%" }}
          transition={{ ease: "easeInOut", duration: 1 }}
          style={{ display: "flex", padding: "8px", alignSelf: "center" }}
        >
          <Box>
            <Logo color={logoColor[path] ? logoColor[path] : "dark"} />
          </Box>
          <Spacer />
          <Box display={{ base: "none", lg: "flex" }} alignItems="center">
            {menuItem.map((item, index) => {
              if (item.type == "menu") {
                return <NavMenu key={index} menuItem={item} />;
              } else if (item.type == "button") {
                return (
                  <Link key={index} href={item.href} passHref scroll={false}>
                    <Button
                      fontSize={14}
                      variant="nav-button"
                      _focus={{ boxShadow: "none" }}
                      color={path == item.href ? "primary.01" : "gray.01"}
                      fontWeight={path == item.href ? "600" : "400"}
                    >
                      {item.name}
                    </Button>
                  </Link>
                );
              }
            })}
          </Box>
          <Box display={{ lg: "none", base: "flex" }} alignItems="center">
            {!isOpen && <Icon fontSize="24px" as={MdMenu} onClick={onOpen} />}
            {isOpen && <Icon fontSize="24px" as={MdClose} onClick={onClose} />}
            <Drawer placement="top" autoFocus={false} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody pt="66px">
                  <VStack align="stretch">
                    {menuItem.map((item, index) => {
                      if (item.type == "menu") {
                        return <NavAccordion key={index} onNavigationEnd={() => onClose()} menuItem={item} />;
                      } else if (item.type == "button") {
                        return (
                          <Link key={index} href={item.href} passHref scroll={false}>
                            <Flex align="center" cursor="pointer" h="40px" onClick={() => onClose()}>
                              <Text color="gray.01" fontWeight="500">
                                {item.name}
                              </Text>
                            </Flex>
                          </Link>
                        );
                      }
                    })}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default React.forwardRef(Navbar);
