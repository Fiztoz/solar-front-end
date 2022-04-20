import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AspectRatio, Container, Center, Box, Text, Flex, SimpleGrid, Button, Square, Icon } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import Layout from "../components/layouts/article";
import MainBgImg from "../components/pages/landing-page/main-background-image";
import route from "../components/route";

export default function Home() {
  const router = useRouter();
  const aboutUsRef = useRef(null);
  const routePath = route();

  useEffect(() => {
    if (router.query.goto && router.query.goto == "about-us") {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [router.query]);

  return (
    <Layout>
      <MainBgImg>
        <Container maxW="container.md" h="100%">
          <Center h="100%">
            <Flex direction="column">
              <Text textAlign="center" fontSize={{ base: "5xl", md: "7xl" }} fontWeight={600} color="primary.00">
                ลดค่าไฟอย่างยั่งยืน <br />
                เริ่มได้ง่ายๆ <br />
                ที่หลังคาบ้านคุณ
              </Text>
              <Text textAlign="center" fontSize="xl" color="dark" mt={{ base: 4, md: 6 }}>
                อยากติดตั้งโซลาร์รูฟ แต่ไม่แน่ใจว่าควรติดตั้งขนาดเท่าใด <br />
                ลองใส่ข้อมูลของคุณเพื่อให้เราช่วยคำนวณขนาดติดตั้งที่เหมาะสมและคุ้มค่าที่สุดให้สิ
              </Text>
              <Flex justify="center" mt={{ base: 8, md: 12 }} px={{ base: 0, md: 8 }}>
                <Link href={routePath.calculation} passHref scroll={false}>
                  <Button variant="primary" w={{ base: "100%", md: "auto" }}>
                    ระบุตำแหน่งเพื่อคำนวณขนาดติดตั้ง
                  </Button>
                </Link>
              </Flex>
              {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={{ base: 8, md: 12 }} px={{ base: 0, md: 8 }}>
                <Link href={routePath.calculation} passHref scroll={false}>
                  <Button variant="primary">ระบุตำแหน่งเพื่อคำนวณขนาดติดตั้ง</Button>
                </Link>
                <Link href={routePath.suitability} passHref scroll={false}>
                  <Button variant="primary">เริ่มทำแบบประเมิน</Button>
                </Link>
              </SimpleGrid> */}
            </Flex>
          </Center>
        </Container>
      </MainBgImg>

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Container ref={aboutUsRef} maxW="container.lg" py={16}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
            <Flex direction="column">
              <Text color="primary.01" fontWeight="600" fontSize={{ base: "lg", lg: "xl" }}>
                มาร่วมเป็นส่วนหนึ่งในการใช้พลังงานสะอาด
              </Text>
              <Text color="dark" fontWeight="600" fontSize={{ base: "3xl", lg: "4xl" }}>
                ทำไมต้อง PEA Solar Hero
              </Text>
            </Flex>
            <Text color="dark" fontSize={{ base: "md", lg: "lg" }}>
              PEA Solar Hero ตัวช่วยสำหรับผู้ที่สนใจติดตั้ง Solar Rooftop แต่ไม่รู้จะเริ่มต้นอย่างไร
              เราต้องการผลักดันให้เกิดการตระหนักรู้ เพื่อให้ประเทศไทยหันมาพึ่งพาพลังงานสะอาด
              โดยเฉพาะพลังงานจากแสงอาทิตย์ให้มากขึ้น
              ซึ่งเป็นส่วนสำคัญในการลดปัญหาสิ่งแวดล้อมที่เกิดจากการพึ่งพาพลังงานรูปแบบเดิม และเรายังต้องการให้การติดตั้ง
              Solar Rooftop เป็นเรื่องง่ายที่ทุกคนสามารถเข้าใจและเข้าถึงได้
            </Text>
          </SimpleGrid>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Box w="100%" bgColor="gray.09">
          <Container maxW="container.lg" py={16}>
            <Flex direction="column" align="center">
              <Text color="primary.01" fontWeight="600" fontSize={{ base: "lg", lg: "xl" }}>
                PEA Solar Hero
              </Text>
              <Text color="dark" fontWeight="600" fontSize={{ base: "3xl", lg: "4xl" }} textAlign="center" mt={3}>
                เรามาพร้อมกับตัวช่วยที่จะทำให้ <br /> Solar Rooftop เป็นเรื่องที่ทุกคนเข้าถึงได้
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX={6} spacingY={12} pt={16} w="100%">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Flex direction="column" align="center">
                    <Image src="/images/checklist.png" width="48px" height="48px"></Image>
                    <Text color="dark" fontWeight="500" fontSize="xl" textAlign="center" mt={5}>
                      แบบประเมินความเหมาะสมเบื้องต้น
                    </Text>
                    <Text color="gray.01" textAlign="center" mt={2}>
                      ประเมินความเหมาะสมในการติดตั้ง <br /> Solar Rooftop ได้ง่าย ๆ เพียงคุณ <br /> ทำแบบประเมินของเรา
                    </Text>
                  </Flex>
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Flex direction="column" align="center">
                    <Image src="/images/calculator.png" width="48px" height="48px"></Image>
                    <Text color="dark" fontWeight="500" fontSize="xl" textAlign="center" mt={5}>
                      เครื่องมือคำนวณขนาดติดตั้ง
                    </Text>
                    <Text color="gray.01" textAlign="center" mt={2}>
                      คำนวณขนาดติดตั้ง Solar Rooftop <br /> ที่เหมาะกับคุณ พร้อมทราบจุดคุ้มทุน <br />
                      รู้ผลได้ในเพียงไม่กี่ขั้นตอน
                    </Text>
                  </Flex>
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Flex direction="column" align="center">
                    <Image src="/images/knowledge.png" width="48px" height="48px"></Image>
                    <Text color="dark" fontWeight="500" fontSize="xl" textAlign="center" mt={5}>
                      คลังความรู้ Solar Rooftop
                    </Text>
                    <Text color="gray.01" textAlign="center" mt={2}>
                      อัปเดตความรู้ และข่าวสาร Solar Rooftop <br /> ได้ที่นี่ ทุกอย่างที่คุณจำเป็นต้องรู้ <br />
                      เรารวบรวมมาไว้ให้คุณแล้ว
                    </Text>
                  </Flex>
                </motion.div>
              </SimpleGrid>
            </Flex>
          </Container>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Container maxW="container.lg" py={16}>
          <Flex direction="column" align="center">
            <Text color="primary.01" fontWeight="600" fontSize={{ base: "lg", lg: "xl" }}>
              ต้องติดตั้งขนาดเท่าใด คุ้มทุนเมื่อไหร่ ก็รู้ได้ง่ายๆ
            </Text>
            <Text color="dark" fontWeight="600" fontSize={{ base: "3xl", lg: "4xl" }} textAlign="center" mt={3}>
              คำนวณขนาดติดตั้ง Solar Rooftop <br />
              ที่เหมาะกับคุณได้ง่าย ๆ ใน 3 ขั้นตอน
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX={6} spacingY={12} pt={16} w="100%">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Flex direction="column" align="start" bgColor="gray.09" p={6}>
                  <Image src="/images/location.png" width="48px" height="48px"></Image>
                  <Text color="dark" fontWeight="600" fontSize="xl" mt={5}>
                    หาตำแหน่งที่ต้องการติดตั้ง
                  </Text>
                  <Text color="gray.01" mt={2}>
                    เพื่อประกอบการคำนวณหาประสิทธิภาพ <br />
                    ในพื้นที่ติดตั้ง ว่ามีความสามารถในการผลิต <br />
                    พลังงานไฟฟ้าจากแสงอาทิตย์เท่าไร
                  </Text>
                </Flex>
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Flex direction="column" align="start" bgColor="gray.09" p={6}>
                  <Image src="/images/select.png" width="48px" height="48px"></Image>
                  <Text color="dark" fontWeight="600" fontSize="xl" mt={5}>
                    กำหนดพื้นที่หลังคา
                  </Text>
                  <Text color="gray.01" mt={2}>
                    เพิ่มความแม่นยำ ด้วยเทคโนโลยีภาพถ่าย <br />
                    ทางอากาศ เพื่อคำนวณพื้นที่หลังคา <br />
                    ของคุณให้ใกล้เคียงพื้นที่จริง มากที่สุด
                  </Text>
                </Flex>
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Flex direction="column" align="start" bgColor="gray.09" p={6}>
                  <Image src="/images/solar-panel.png" width="48px" height="48px"></Image>
                  <Text color="dark" fontWeight="600" fontSize="xl" mt={5}>
                    ได้ขนาดติดตั้งที่เหมาะสม
                  </Text>
                  <Text color="gray.01" mt={2}>
                    มีข้อมูลเบื้องต้นที่ถูกต้อง สามารถนำไป <br />
                    ประกอบการตัดสินใจก่อนการติดตั้งจริง <br />
                    และเลือกผู้ให้บริการติดตั้งที่เหมาะสมที่สุด
                  </Text>
                </Flex>
              </motion.div>
            </SimpleGrid>
            <Link href={routePath.calculation} passHref scroll={false}>
              <Button variant="primary" mt={{ base: "48px", lg: "64px" }} w={{ base: "100%", md: "auto" }}>
                ลองคำนวณขนาดติดตั้ง
              </Button>
            </Link>
          </Flex>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Box w="100%" bgColor="gray.09">
          <Container maxW="container.lg" py={16}>
            <Flex direction="column" align="start">
              <Text color="primary.01" fontWeight="600" fontSize={{ base: "lg", lg: "xl" }}>
                เตรียมความพร้อม! เปลี่ยนหลังคาบ้านคุณเป็นตัวช่วยประหยัดค่าไฟฟ้าแบบยั่งยืน
              </Text>
              <Text color="dark" fontWeight="600" fontSize={{ base: "3xl", lg: "4xl" }} mt={3}>
                มือใหม่อยากติดตั้ง Solar Rooftop
              </Text>
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} pt={16} w="100%">
                <Flex direction="column" justify="center">
                  <Flex align="start">
                    <Square size="48px">
                      <Image src="/images/bulb.png" width="48px" height="48px"></Image>
                    </Square>
                    <Flex direction="column" align="start" ml={4} pt={2}>
                      <Text fontSize="xl" color="dark">
                        สิ่งที่มือใหม่ควรรู้เกี่ยวกับการติดตั้งโซลาร์รูฟ (Solar Rooftop)
                      </Text>
                      <Text fontSize="md" color="dark" mt={2}>
                        รวมข้อมูลที่เกี่ยวข้องกับการติดตั้งโซลาร์รูฟ (Solar Rooftop)
                        ไม่ว่าจะเป็นหลักการทำงานของโซลาร์รูฟ อุปกรณ์ที่ต้องใช้ในการติดตั้ง
                        รวมถึงประโยชน์ของการติดตั้งโซลาร์รูฟ (Solar Rooftop)
                      </Text>
                      <Link href={routePath.knowledge.deviceSelection} passHref scroll={false}>
                        <Button variant="link-primary" pl={0} mt={5} rightIcon={<Icon as={MdArrowForward} />}>
                          อ่านต่อ
                        </Button>
                      </Link>
                    </Flex>
                  </Flex>
                  <Flex align="start" pt={12}>
                    <Square size="48px">
                      <Image src="/images/verify.png" width="48px" height="48px"></Image>
                    </Square>
                    <Flex direction="column" align="start" ml={4} pt={2}>
                      <Text fontSize="xl" color="dark">
                        ขออนุญาตติดตั้งกับหน่วยงานภาครัฐ
                      </Text>
                      <Text fontSize="md" color="dark" mt={2}>
                        การติดตั้ง Solar Rooftop จะต้องมีการขออนุญาตจากหน่วยงานภาครัฐ เพื่อให้การติดตั้งได้รับมาตรฐาน
                        และมีความปลอดภัย
                      </Text>
                      <Link href={routePath.knowledge.permissionProcess} passHref scroll={false}>
                        <Button variant="link-primary" pl={0} mt={5} rightIcon={<Icon as={MdArrowForward} />}>
                          อ่านต่อ
                        </Button>
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
                <AspectRatio maxW="100%" ratio={1.1625} display={{ base: "none", lg: "block" }}>
                  <Image src="/images/home-roof.png" layout="fill" quality="75" priority></Image>
                </AspectRatio>
              </SimpleGrid>
            </Flex>
          </Container>
          <AspectRatio maxW="100%" ratio={1.1625} display={{ base: "block", lg: "none" }}>
            <Image src="/images/home-roof.png" layout="fill" quality="75" priority></Image>
          </AspectRatio>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Container maxW="container.lg" py={16}>
          <Flex direction="column" align="center" py={16} px={6} bgColor="primary.05">
            <Text color="dark" fontWeight="600" fontSize={{ base: "3xl", lg: "4xl" }} textAlign="center">
              ประหยัดค่าไฟฟ้าแบบยั่งยืน <br />
              และคืนทุนได้ภายใน 7 ปี *
            </Text>
            <Text fontSize="md" color="dark" mt={5} textAlign="center">
              *การคืนทุนเป็นการคำนวณเบื้องต้น ซึ่งอาจเปลี่ยนแปลงได้ขึ้นอยู่กับปัจจัยต่าง ๆ ที่ส่งผลต่อการคำนวณ เช่น
              สภาพอากาศ ที่ตั้ง พฤติกรรมการใช้ไฟฟ้า ประสิทธิภาพของแผงโซลาร์เซลล์ และอื่นๆ
            </Text>
            <Link href={routePath.calculation} passHref scroll={false}>
              <Button variant="primary" mt={8} w={{ base: "100%", md: "auto" }}>
                ลองคำนวณความคุ้มทุน
              </Button>
            </Link>
          </Flex>
        </Container>
      </motion.div>
    </Layout>
  );
}
