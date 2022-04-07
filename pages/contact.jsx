import { useRouter } from "next/router";
import React, { useRef } from "react";
import { Box, Container, Flex, Text, Link, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/layouts/article";
import CommentForm from "../components/forms/comment-form";
import { MdArrowForward } from "react-icons/md";
import { useCommentApi, CommentApi } from "../library/api/comment-api";
import route from "../components/route";

const ContactContent = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const routePath = route();
  const commentApi = useCommentApi();
  const onSubmitHandler = (data) => {
    commentApi.actions
      .createComment(data)
      .then((response) => {
        router.push(routePath.feedbackFinish);
      })
      .catch((error) => {});
  };
  return (
    <Layout>
      <Flex
        mt={{ base: "0", lg: "-66px" }}
        minH="calc(100vh - 66px)"
        w="100%"
        direction={{ base: "column", lg: "row" }}
      >
        <Box minH="calc(100vh - 66px)" maxW={{ base: "100%", lg: "50%" }} bgColor="primary.00">
          <Container minH="calc(100vh - 66px)" maxW="container.sm" pt={{ base: 0, lg: "66px" }}>
            <Flex minH="calc(100vh - 66px)" direction="column" justify="center" px={{ base: 0, lg: 10 }} py={4}>
              <Text fontSize="2xl" color="light" fontWeight={600}>
                ช่องทางการติดต่อ
              </Text>
              <Text fontSize="lg" color="primary.05" pt={4}>
                หากคุณต้องการติดต่อ PEA Solar Hero โดยตรง <br />
                คุณสามารถติดต่อพวกเราได้ตามช่องทางด้านล่างนี้
              </Text>
              <Flex pt={8} align="start">
                <Image src="/images/i-location-light.png" layout="intrinsic" width="24px" height="26px" />
                <Flex flex="1" direction="column" ml={4}>
                  <Text fontSize="xl" color="light" fontWeight={500}>
                    สถานที่ตั้ง
                  </Text>
                  <Text fontSize="lg" color="gray.07" pt={2}>
                    กองบริการธุรกิจจัดการพลังงานและดิจิทัล <br />
                    ชั้น 17 อาคาร LED <br />
                    การไฟฟ้าส่วนภูมิภาค (สำนักงานใหญ่) <br />
                    เลขที่ 200 ถนนงามวงศ์วาน แขวงลาดยาว <br />
                    เขตจตุจักร กรุงเทพฯ 10900
                  </Text>
                  <Flex align="center" pt={2}>
                    <Link href="https://goo.gl/maps/RPMQ3QcvGYzs5nZW9" isExternal color="primary.04">
                      เปิดแผนที่บน Google Map
                    </Link>
                    <Icon as={MdArrowForward} mx="2px" color="primary.04" />
                  </Flex>
                </Flex>
              </Flex>
              <Flex pt={8} align="start">
                <Image src="/images/i-phone-light.png" layout="intrinsic" width="24px" height="26px" />
                <Flex flex="1" direction="column" ml={4}>
                  <Text fontSize="xl" color="light" fontWeight={500}>
                    เวลาทำการ
                  </Text>
                  <Text fontSize="lg" color="gray.07" pt={2}>
                    เปิดทำการ จันทร์ - ศุกร์ <br />
                    เวลา 8:30 - 16:30 น.
                  </Text>
                </Flex>
              </Flex>
              <Flex pt={8} align="start">
                <Image src="/images/i-phone-light.png" layout="intrinsic" width="24px" height="26px" />
                <Flex flex="1" direction="column" ml={4}>
                  <Text fontSize="xl" color="light" fontWeight={500}>
                    หมายเลขโทรศัพท์
                  </Text>
                  <Text
                    fontSize="lg"
                    color="gray.07"
                    pt={2}
                    cursor="pointer"
                    onClick={() => window.open("tel:020096703")}
                  >
                    02 009 6703
                  </Text>
                </Flex>
              </Flex>
              <Flex pt={8} align="start">
                <Image src="/images/i-mail-light.png" layout="intrinsic" width="24px" height="26px" />
                <Flex flex="1" direction="column" ml={4}>
                  <Text fontSize="xl" color="light" fontWeight={500}>
                    อีเมล
                  </Text>
                  <Text fontSize="lg" color="gray.07" pt={2}>
                    peasolarhero@pea.co.th
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box minH="calc(100vh - 66px)" flex="1">
          <Container minH="calc(100vh - 66px)" maxW="container.sm" pt={{ base: "0", lg: "66px" }}>
            <Flex minH="calc(100vh - 66px)" direction="column" justify="center" py={4}>
              <Text fontSize="3xl" color="gray.00" fontWeight={600}>
                ฝากข้อความให้เราติดต่อกลับ <br />
                เพื่อสอบถามข้อมูลเพิ่มเติม
              </Text>
              <Text fontSize="xl" color="gray.02" mt={5}>
                PEA Solar Hero จะติดต่อกลับหาคุณโดยเร็วที่สุด
              </Text>
              <Box w="100%" pt={10}>
                <CommentForm
                  ref={formRef}
                  disabledAll={commentApi.isLoading}
                  onFormSubmitted={(e) => onSubmitHandler(e)}
                />
              </Box>
            </Flex>
          </Container>
        </Box>
      </Flex>
    </Layout>
  );
};

export default function Contact() {
  return (
    <CommentApi>
      <ContactContent />
    </CommentApi>
  );
}
