import { useEffect } from "react";
import { Box, Container, Flex, Text, Center, Divider, Spacer, Button, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import NumberFormat from "react-number-format";
import route from "../../route";
import SitesRecomendation from "../../contents/sites-recommendation";
import HelpfulnessQuestion from "../../contents/helpfulness-question";

const CalculationRecommended = ({ result, onRecalculation }) => {
  const routePath = route();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Box w="100%" minH="calc(100vh - 66px)" pt={16}>
        <Container w="100%" maxW="container.md" px={{ base: 4, md: 8 }}>
          <Flex w="100%" direction="column" align="center">
            <Text color="dark" fontSize="5xl" fontWeight={600} mb={4}>
              ผลการคำนวณ
            </Text>
            <Text color="gray.01" fontSize="xl" fontWeight={400} mb={{ base: 8, md: 16 }} textAlign="center">
              ขนาดติดตั้ง Solar Rooftop ที่เหมาะสมกับพื้นที่หลังคา และพฤติกรรมการใช้ไฟฟ้าของคุณ
            </Text>
            <Flex direction={{ base: "column", md: "row" }} w="100%" justify="space-between" align="center">
              <Center
                p={8}
                mb={8}
                boxShadow="md"
                rounded="md"
                borderColor="gray.07"
                borderWidth="1px"
                w={{ base: "100%", md: "auto" }}
              >
                <Flex direction="column">
                  <Flex w="100%" align="start" mb={4}>
                    <Image src="/images/solar-home.png" layout="intrinsic" width="72px" height="72px" />
                    <Text color="dark" fontSize="2xl" fontWeight="600" alignSelf="start" mx={8}>
                      ขนาดติดตั้ง <br />
                      ที่แนะนำ
                    </Text>
                  </Flex>
                  <Text
                    alignSelf="end"
                    color="primary.01"
                    fontSize="5xl"
                    fontWeight={600}
                    fontFamily="'Noto Sans Thai', sans-serif"
                  >
                    <NumberFormat value={result.installedCapacity} displayType={"text"} thousandSeparator={true} />{" "}
                    <Text as="span" color="gray.00" fontSize="md">
                      kW
                    </Text>
                  </Text>
                </Flex>
              </Center>

              <Center
                p={8}
                mb={8}
                boxShadow="md"
                rounded="md"
                borderColor="gray.07"
                borderWidth="1px"
                w={{ base: "100%", md: "auto" }}
              >
                <Flex direction="column">
                  <Flex w="100%" align="start" mb={4}>
                    <Image src="/images/piggy-bank.png" layout="intrinsic" width="72px" height="72px" />
                    <Text color="dark" fontSize="2xl" fontWeight="600" alignSelf="start" mx={8}>
                      ค่าไฟที่ลดได้ <br />
                      ต่อเดือน
                    </Text>
                  </Flex>
                  <Text alignSelf="end" color="primary.01" fontSize="5xl" fontWeight={600}>
                    <NumberFormat value={result.save} displayType={"text"} thousandSeparator={true} />{" "}
                    <Text as="span" color="gray.00" fontSize="md">
                      บาท
                    </Text>
                  </Text>
                </Flex>
              </Center>
            </Flex>
            <Box w="100%" mb={{ base: 24, md: 40 }}>
              <Text fontSize="lg" color="gray.01" fontWeight={600}>
                หมายเหตุ:
              </Text>
              <Text fontSize="lg" color="gray.01">
                ขนาดติดตั้งที่แนะนำอาจมีการเปลี่ยนแปลงได้ ขึ้นอยู่กับการประเมินจากสภาพพื้นที่ติดตั้งจริง
              </Text>
            </Box>
            <Text color="dark" fontSize={{ base: "3xl", md: "5xl" }} fontWeight={600} mb={4} textAlign="center">
              ผลการวิเคราะห์ความคุ้มค่าเบื้องต้น
            </Text>
            <Text color="gray.01" fontSize="xl" fontWeight={400} mb={8} textAlign="center">
              ลงทุนติดตั้ง Solar Rooftop เพื่อลดค่าไฟฟ้าอย่างยั่งยืน
            </Text>
            <Flex
              boxShadow="md"
              rounded="md"
              borderColor="gray.07"
              borderWidth="1px"
              w="100%"
              direction="column"
              mb={8}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                w="100%"
                align={{ base: "start", md: "center" }}
                px={{ base: 6, md: 8 }}
                pt={8}
                pb={6}
              >
                <Text color="dark" fontSize={{ base: "xl", md: "2xl" }} fontWeight="600">
                  ค่าใช้จ่ายในการติดตั้งโดยประมาณ
                </Text>
                <Spacer />
                <Flex justifySelf="end" alignSelf={{ base: "end", md: "center" }} align="end" pt={{ base: 4, md: 0 }}>
                  <Text color="primary.01" fontSize="5xl" fontWeight={600}>
                    <NumberFormat value={result.installationCost} displayType={"text"} thousandSeparator={true} />
                  </Text>
                  <Box ml={4} mb={4} w="27px">
                    <Text color="gray.00" fontSize="md">
                      บาท
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Divider mb={8} />
              <Text color="dark" fontWeight={600} ml={{ base: 6, md: 8 }} mb={1}>
                ความคุ้มค่าในการลงทุนติดตั้ง Solar Rooftop
              </Text>
              <Flex pl={{ base: 6, md: 8 }} direction={{ base: "column", md: "row" }}>
                <Text color="gray.01" mr={1}>
                  ขนาดกำลังผลิตไฟฟ้า{" "}
                  <NumberFormat value={result.installedCapacity} displayType={"text"} thousandSeparator={true} /> kW
                </Text>
                <Text color="gray.01">สำหรับระบบไฟฟ้า {result.phase} เฟส</Text>
              </Flex>

              <Flex
                direction={{ base: "column", md: "row" }}
                w="100%"
                align={{ base: "start", md: "center" }}
                px={{ base: 6, md: 8 }}
                pt={6}
              >
                <Flex align="center">
                  <Image src="/images/check-icon.png" width="24px" height="24px" />
                  <Text color="gray.00" fontSize="xl" ml={3}>
                    ระยะเวลาในการคืนทุน
                  </Text>
                </Flex>
                <Spacer />
                <Flex justifySelf="end" alignSelf={{ base: "end", md: "center" }} align="end" pt={{ base: 2, md: 0 }}>
                  <Text color="gray.00" fontSize="2xl">
                    <NumberFormat value={result.returnPeriod} displayType={"text"} thousandSeparator={true} />
                  </Text>
                  <Box ml={4} mb={1} w="27px">
                    <Text color="gray.01" fontSize="md">
                      ปี
                    </Text>
                  </Box>
                </Flex>
              </Flex>

              <Flex
                direction={{ base: "column", md: "row" }}
                w="100%"
                align={{ base: "start", md: "center" }}
                px={{ base: 6, md: 8 }}
                pt={6}
              >
                <Flex align="center">
                  <Image src="/images/check-icon.png" width="24px" height="24px" />
                  <Text color="gray.00" fontSize="xl" ml={3}>
                    ค่าไฟฟ้าต่อหน่วยโดยเฉลี่ยที่ผลิตได้
                  </Text>
                </Flex>
                <Spacer />
                <Flex justifySelf="end" alignSelf={{ base: "end", md: "center" }} align="end" pt={{ base: 2, md: 0 }}>
                  <Text color="gray.00" fontSize="2xl">
                    <NumberFormat value={result.pricePerUnit} displayType={"text"} thousandSeparator={true} />
                  </Text>
                  <Box ml={4} mb={1} w="27px">
                    <Text color="gray.01" fontSize="md">
                      บาท
                    </Text>
                  </Box>
                </Flex>
              </Flex>

              <Flex
                direction={{ base: "column", md: "row" }}
                w="100%"
                align={{ base: "start", md: "center" }}
                px={{ base: 6, md: 8 }}
                pt={6}
              >
                <Flex align="center">
                  <Image src="/images/check-icon.png" width="24px" height="24px" />
                  <Text color="gray.00" fontSize="xl" ml={3}>
                    ค่าไฟฟ้าโดยเฉลี่ยที่ประหยัดได้ต่อปี
                  </Text>
                </Flex>
                <Spacer />
                <Flex justifySelf="end" alignSelf={{ base: "end", md: "center" }} align="end" pt={{ base: 2, md: 0 }}>
                  <Text color="gray.00" fontSize="2xl">
                    <NumberFormat value={result.energyProducedPerYear} displayType={"text"} thousandSeparator={true} />
                  </Text>
                  <Box ml={4} mb={1} w="27px">
                    <Text color="gray.01" fontSize="md">
                      บาท
                    </Text>
                  </Box>
                </Flex>
              </Flex>

              <Flex
                direction={{ base: "column", md: "row" }}
                w="100%"
                align={{ base: "start", md: "center" }}
                px={{ base: 6, md: 8 }}
                pt={6}
                pb={10}
              >
                <Flex align="center">
                  <Image src="/images/check-icon.png" width="24px" height="24px" />
                  <Text color="gray.00" fontSize="xl" ml={3}>
                    ค่าไฟฟ้าที่ประหยัดไปได้ใน 20 ปี
                  </Text>
                </Flex>
                <Spacer />
                <Flex justifySelf="end" alignSelf={{ base: "end", md: "center" }} align="end" pt={{ base: 2, md: 0 }}>
                  <Text color="gray.00" fontSize="2xl">
                    <NumberFormat
                      value={result.energyProducedPer20Year}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Text>
                  <Box ml={4} mb={1} w="27px">
                    <Text color="gray.01" fontSize="md">
                      บาท
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            <Box w="100%" mb={{ base: 16, md: 8 }}>
              <Text fontSize="lg" color="gray.01" fontWeight={600}>
                หมายเหตุ:
              </Text>
              <Flex>
                <Text fontSize="lg" color="gray.01" mr={1}>
                  1.
                </Text>
                <Text fontSize="lg" color="gray.01">
                  ค่าใช้จ่ายในการติดตั้งโดยประมาณในที่นี้ ประกอบด้วยค่าสำรวจ ค่าอุปกรณ์ และค่าติดตั้ง
                  อาจมีการเปลี่ยนแปลงได้ตามสภาพหน้างานและพื้นที่ติดตั้ง เช่น มีการปรับปรุงหลังคาการทำระบบกราวด์
                  หรือการขออนุญาตเชื่อมต่อเข้ากับระบบไฟฟ้าของการไฟฟ้า เป็นต้น
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="lg" color="gray.01" mr={1}>
                  2.
                </Text>
                <Text fontSize="lg" color="gray.01">
                  ผลการวิเคราะห์ความคุ้มค่าในที่นี้ เป็นการคำนวณเบื้องต้นเท่านั้น อาจมีการเปลี่ยนแปลงได้
                  โดยขึ้นอยู่กับปัจจัยต่าง ๆ ดังนี้ <br />
                  - สภาพหน้างาน เช่น ทิศที่ตั้งและความชันของหลังคา การถูกบดบังแสงจากสภาพแวดล้อม <br />
                  - พฤติกรรมการใช้ไฟฟ้าที่แตกต่างกัน <br />
                  - คุณภาพและประสิทธิภาพของวัสดุอุปกรณ์ <br />
                  - การดูแลรักษา <br />- สภาพอากาศ
                </Text>
              </Flex>
            </Box>

            <Button w={{ base: "100%", md: "auto" }} mb={16} variant="primary" onClick={() => onRecalculation()}>
              ลองคำนวณใหม่
            </Button>
          </Flex>
        </Container>
      </Box>
      <Box w="100%" py={16} bgColor="primary.05">
        <Container w="100%" maxW="container.md" px={{ base: 4, md: 8 }}>
          <HelpfulnessQuestion />
        </Container>
      </Box>
      <Box w="100%" py={16}>
        <Container w="100%" maxW="container.md" px={{ base: 4, md: 8 }}>
          <SitesRecomendation />
        </Container>
      </Box>
    </>
  );
};

export default CalculationRecommended;
