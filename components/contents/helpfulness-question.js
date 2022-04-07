import Link from "next/link";
import { useState } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import route from "../route";

const HelpfulnessQuestion = () => {
  const [useful, setUseful] = useState(false);
  const routePath = route();
  const usefulClickHandler = () => {
    setUseful(true);
  };
  return (
    <Flex direction={{ base: "column", md: "row" }} w="100%" align="center" justify="space-evenly">
      {!useful ? (
        <>
          <Text color="primary.01" fontSize="xl" fontWeight={600}>
            ข้อมูลนี้มีประโยชน์ต่อคุณหรือไม่ ?
          </Text>
          <Flex pt={{ base: 8, md: 0 }}>
            <Button w="124px" mx={4} variant="primary-outline" onClick={() => usefulClickHandler()}>
              มี
            </Button>
            <Link href={routePath.feedback} passHref>
              <Button w="124px" mx={4} variant="primary-outline">
                ไม่มี
              </Button>
            </Link>
          </Flex>
        </>
      ) : (
        <>
          <Text color="primary.01" fontSize="20px" fontWeight={600} textAlign="center">
            ขอบคุณสำหรับข้อเสนอแนะ/คำแนะนำ อันเป็นประโยชน์ <br />
            PEA Solar Hero จะนำข้อมูลดังกล่าวไปปรับปรุงผลการวิเคราะห์ให้เป็นประโยชน์มากขึ้น
          </Text>
        </>
      )}
    </Flex>
  );
};
export default HelpfulnessQuestion;
