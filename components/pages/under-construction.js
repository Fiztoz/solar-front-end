import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { Box, Center, Container, Flex, Text, Button, Icon, Square } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import CommentForm from "../forms/comment-form";
import { useCommentApi, CommentApi } from "../../library/api/comment-api";
import route from "../route";

const UnderConstructionContent = () => {
  const feedbackRef = useRef(null);
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
    <>
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
                Coming Soon
              </Text>
              <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="600" color="dark" mt={3}>
                อยู่ระหว่างพัฒนา
              </Text>
              <Text color="gray.01" fontSize="xl" mt={6}>
                พวกเรากำลังเร่งสร้างสรรค์สิ่งดีดีมาให้คุณอยู่ <br />
                และคุณมีส่วนร่วมในการพัฒนาไปกับเราได้ <br />
                เพียงแสดงความคิดเห็นของคุณ <br />
                ความคิดเห็นของทุกคนมีค่าในการพัฒนา <br />
                PEA Solar Hero ให้ดียิ่งขึ้น
              </Text>
              <Flex mt={12} direction={{ base: "column", md: "row" }} pb={3}>
                <Button
                  variant="primary"
                  mb={3}
                  display={{ base: "block", md: "none" }}
                  onClick={() => feedbackRef.current.scrollIntoView({ behavior: "smooth" })}
                >
                  แสดงความคิดเห็น
                </Button>
                <Button
                  variant="light-on-light"
                  leftIcon={<Icon as={MdArrowBack} />}
                  mr={{ base: 0, md: 2 }}
                  mb={{ base: 3, md: 0 }}
                  onClick={() => router.back()}
                >
                  ย้อนกลับ
                </Button>
                <Button
                  variant="primary"
                  ml={2}
                  display={{ base: "none", md: "block" }}
                  onClick={() => feedbackRef.current.scrollIntoView({ behavior: "smooth" })}
                >
                  แสดงความคิดเห็น
                </Button>
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
      <Box ref={feedbackRef} width="100%" py={24} bgColor="primary.05">
        <Container maxW="container.sm" w="100%">
          <Flex direction="column" align="center">
            <Text color="dark" fontWeight="600" mt={3} fontSize={{ base: "3xl", md: "5xl" }} textAlign="center">
              คำแนะนำและติชม <br />
              Comment and Feedback
            </Text>
            <Text color="gray.01" mt={4} textAlign="center" fontSize="xl">
              เรายินดีรับฟังทุกความคิดเห็นของคุณ ไม่ว่าจะเป็นติชมหรือเสนอแนะ <br />
              ทุกความคิดเห็นของคุณมีค่า และเราจะนำมาใช้พัฒนา PEA Solar Hero <br />
              ให้ดียิ่งขึ้นต่อไป
            </Text>
            <Box w="100%" pt={12}>
              <CommentForm
                ref={formRef}
                disabledAll={commentApi.isLoading}
                onFormSubmitted={(e) => onSubmitHandler(e)}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default function UnderConstruction() {
  return (
    <CommentApi>
      <UnderConstructionContent />
    </CommentApi>
  );
}
