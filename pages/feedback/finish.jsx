import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layouts/article";
import { Box, Center, Container, Flex, Text, Button, Icon, Square } from "@chakra-ui/react";
import route from "../../components/route";

const FeedbackFinish = () => {
  const routePath = route();
  return (
    <Layout>
      <Box minH="calc(100vh - 66px)" width="100%">
        <Container maxW="container.lg" minH="calc(100vh - 66px)">
          <Center minH="calc(100vh - 66px)" w="100%" position="relative">
            <Flex w="100%" direction="column" justify="center">
              <Flex display={{ base: "flex", md: "none" }} justify="center" position="relative">
                <Image
                  src="/images/coming-soon.png"
                  layout="intrinsic"
                  width={300}
                  height={300}
                  quality="75"
                  priority
                ></Image>
              </Flex>
              <Text fontWeight="600" color="primary.01">
                Thank you
              </Text>
              <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="600" color="dark" mt={3}>
                ขอบคุณสำหรับ <br />
                ความคิดเห็นของคุณ
              </Text>
              <Text color="gray.01" fontSize="xl" mt={6}>
                เราจะนำความคิดเห็นนี้ไปพัฒนา PEA Solar Hero ให้ดียิ่งขึ้น
              </Text>
              <Flex mt={12} direction={{ base: "column", md: "row" }} pb={3}>
                <Link href={routePath.landing} passHref scroll={false}>
                  <Button variant="primary">กลับสู่หน้าหลัก</Button>
                </Link>
              </Flex>
            </Flex>
            <Box
              width={{ md: "430px", lg: "500px" }}
              right={0}
              position="absolute"
              display={{ base: "none", md: "block" }}
            >
              <Square size={{ md: "430px", lg: "500px" }} position="relative">
                <Image src="/images/coming-soon.png" layout="fill" quality="75" priority></Image>
              </Square>
            </Box>
          </Center>
        </Container>
      </Box>
    </Layout>
  );
};

export default FeedbackFinish;
