import { useRef } from "react";
import { Flex, Text, Container, Box } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { useBreakpointValue } from "@chakra-ui/react";
import FeedbackForm from "../../components/forms/feedback-form";
import { FeedbackApi, useFeedbackApi } from "../../library/api/feedback-api";
import { useRouter } from "next/router";
import route from "../../components/route";

const FeedbackContent = () => {
  const router = useRouter();
  const routePath = route();
  const bp = useBreakpointValue({ base: "base", sm: "sm" });
  const formRef = useRef(null);
  const feedbackApi = useFeedbackApi();
  const formSubmitHandler = (data) => {
    feedbackApi.actions
      .createFeedback(data)
      .then((response) => {
        router.push(routePath.feedbackFinish);
      })
      .catch((error) => {});
  };
  return (
    <Layout>
      <Box w="100%" bgColor="gray.08">
        <Container maxW="container.sm" w="100%">
          <Flex direction="column" w="100%" align="center" py="64px">
            <Text fontSize={{ base: "32px", sm: "48px" }} fontWeight="600" color="dark" mb="20px">
              ช่วยเราปรับปรุงผลวิเคราะห์
            </Text>
            <Text fontSize="20px" fontWeight="400" color="gray.01" textAlign="center">
              บอกเราหน่อยว่า ข้อมูลที่คุณได้รับจากผลวิเคราะห์มีอะไรต้องปรับปรุงบ้าง {bp == "sm" ? <br /> : ""}
              เพื่อให้ผลการวิเคราะห์มีประโยชน์และช่วยคุณได้มากขึ้น
            </Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.sm" w="100%">
        <Flex direction="column" w="100%" align="center" pt="32px" pb="64px">
          <FeedbackForm
            ref={formRef}
            disabledAll={feedbackApi.isLoading}
            onFormSubmitted={(value) => formSubmitHandler(value)}
          />
        </Flex>
      </Container>
    </Layout>
  );
};

const Feedback = () => (
  <FeedbackApi>
    <FeedbackContent />
  </FeedbackApi>
);

export default Feedback;
