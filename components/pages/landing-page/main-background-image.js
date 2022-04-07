import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";

const MainBgImg = ({ children }) => {
  return (
    <Box position="relative" height="calc(100vh - 66px)" width="100%">
      <Center position="absolute" top={0} botton={0} w="100%" overflow="hidden" zIndex={1}>
        <Box position="relative" w="100%" h="calc(100vh - 66px)" minW={1440}>
          <Image src="/images/landing-main.png" layout="fill" objectFit="cover" quality="75" priority></Image>
        </Box>
      </Center>
      <Box
        position="absolute"
        top={0}
        botton={0}
        w="100%"
        h="100%"
        bgGradient="linear(to-br, #FFD96733, #8A458433, #7D358733)"
        zIndex={3}
      ></Box>
      <Box
        position="absolute"
        top={0}
        botton={0}
        w="100%"
        h="100%"
        bgGradient="linear(to-br, #FFFFFFB2, #FFFFFF00)"
        zIndex={2}
      ></Box>
      <Box position="absolute" top={0} botton={0} w="100%" h="100%" zIndex={4}>
        {children}
      </Box>
    </Box>
  );
};

export default MainBgImg;
