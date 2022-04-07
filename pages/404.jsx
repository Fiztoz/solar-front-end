import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Button, Center, Container, Flex, Square, Text, Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import Layout from "../components/layouts/article";
import route from "../components/route";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();
  const routePath = route();
  return (
    <Layout>
      <Box minH="calc(100vh - 66px)" width="100%">
        <Container maxW="container.lg" minH="calc(100vh - 66px)">
          <Center minH="calc(100vh - 66px)" w="100%" position="relative">
            <Flex w="100%" direction="column" justify="center">
              <Flex display={{ base: "flex", md: "none" }} justify="center">
                <Image src="/images/not-found.png" layout="intrinsic" width={300} height={300} quality="75"></Image>
              </Flex>
              <Text fontWeight="600" color="primary.01">
                404 Error, Page not found
              </Text>
              <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="600" color="dark" mt={3}>
                ไม่พบหน้าที่คุณกำลังค้นหาอยู่
              </Text>
              <Text color="gray.01" fontSize="xl" mt={6}>
                กรุณาตรวจสอบลิงก์อีกครั้ง <br />
                หรือคลิกด้านล่างเพื่อเข้าสู่เว็บไซต์ PEA Solar Hero
              </Text>
              <Flex mt={12} direction={{ base: "column", md: "row" }} pb={3}>
                <Link href={routePath.landing} passHref scroll={false}>
                  <Button variant="primary" mb={3} display={{ base: "block", md: "none" }}>
                    เข้าสู่เว็บไซต์ PEA Solar Hero
                  </Button>
                </Link>
                <Button
                  variant="light-on-light"
                  leftIcon={<Icon as={MdArrowBack} />}
                  mr={{ base: 0, md: 2 }}
                  mb={{ base: 3, md: 0 }}
                  onClick={() => router.back()}
                >
                  ย้อนกลับ
                </Button>
                <Link href={routePath.landing} passHref scroll={false}>
                  <Button variant="primary" ml={2} display={{ base: "none", md: "block" }}>
                    เข้าสู่เว็บไซต์ PEA Solar Hero
                  </Button>
                </Link>
              </Flex>
            </Flex>
            <Box
              width={{ md: "430px", lg: "500px" }}
              right={0}
              position="absolute"
              display={{ base: "none", md: "block" }}
            >
              <Square size={{ md: "430px", lg: "500px" }}>
                <Image src="/images/not-found.png" layout="fill" quality="75"></Image>
              </Square>
            </Box>
          </Center>
        </Container>
      </Box>
    </Layout>
  );
}
