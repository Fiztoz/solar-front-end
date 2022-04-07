import Link from "next/link";
import React from "react";
import { Container, Box, Flex, Text, Button, Spacer, Divider } from "@chakra-ui/react";
import Logo from "./logo";
import route from "../../route";

const Footer = (props, ref) => {
  const routePath = route();
  const { path } = props;
  const pathConfig = {};
  pathConfig[routePath.landing] = { hasFooter: true, size: "full" };
  pathConfig[routePath.calculation] = { hasFooter: true, size: "less" };
  pathConfig[routePath.suitability] = { hasFooter: true, size: "full" };
  pathConfig[routePath.contact] = { hasFooter: false, size: "none" };
  pathConfig[routePath.knowledge.agency] = { hasFooter: true, size: "less" };
  pathConfig[routePath.feedback] = { hasFooter: true, size: "less" };
  pathConfig[routePath.feedbackFinish] = { hasFooter: true, size: "full" };
  return (
    <>
      {(!pathConfig[path] || (pathConfig[path] && pathConfig[path].hasFooter)) && (
        <Box ref={ref} w="100%" pt={8} pb={8} bgColor="primary.00">
          <Container maxW="container.lg" pt={4}>
            {(!pathConfig[path] ||
              (pathConfig[path] && pathConfig[path].hasFooter && pathConfig[path].size == "full")) && (
              <>
                <Flex wrap="wrap">
                  <Flex direction="column" pb={16}>
                    <Logo color="light" />
                    <Text color="gray.07" fontSize="sm" mt={4}>
                      กองบริการธุรกิจจัดการพลังงานและดิจิทัล <br />
                      ชั้น 17 อาคาร LED การไฟฟ้าส่วนภูมิภาค (สำนักงานใหญ่)
                      <br />
                      เลขที่ 200 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900
                    </Text>
                    <Text color="gray.07" fontSize="sm" mt={3}>
                      (+66) 2 009 6703 <br />
                      peasolarhero@pea.co.th
                    </Text>
                  </Flex>
                  <Spacer />
                  <Flex pb={16}>
                    <Flex direction="column" align="start" mr={16}>
                      <Text color="secondary.03" fontSize="xl" size="sm" mb={6}>
                        About
                      </Text>
                      <Link href={{ pathname: routePath.landing, query: { goto: "about-us" } }} passHref scroll={false}>
                        <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                          เกี่ยวกับเรา
                        </Button>
                      </Link>
                      {/* <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                        คำถามที่พบบ่อย
                      </Button>
                      <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                        ข่าวสารล่าสุด
                      </Button> */}
                      <Link href={routePath.contact} passHref scroll={false}>
                        <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                          ติดต่อเรา
                        </Button>
                      </Link>
                    </Flex>
                    <Flex direction="column" align="start">
                      <Text color="secondary.03" fontSize="xl" size="sm" mb={6}>
                        Resource
                      </Text>
                      {/* <Link href={routePath.suitability} passHref scroll={false}>
                        <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                          แบบประเมินความเหมาะสม
                        </Button>
                      </Link> */}
                      <Link href={routePath.calculation} passHref scroll={false}>
                        <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                          เครื่องมือคำนวณขนาดติดตั้ง
                        </Button>
                      </Link>
                      <Link href={routePath.knowledge.solarRooftop} passHref scroll={false}>
                        <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                          ความรู้เรื่อง Solar Rooftop
                        </Button>
                      </Link>
                      <Link href={routePath.knowledge.agency} passHref scroll={false}>
                        <Button variant="link-light" fontSize="sm" size="sm" _focus={{ boxShadow: "none" }}>
                          หน่วยงานที่เกี่ยวข้อง
                        </Button>
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider mb={8} />
              </>
            )}
            <Text color="light" fontSize="md">
              2022 PEA Solar Hero. All rights reserved.
            </Text>
          </Container>
        </Box>
      )}
    </>
  );
};

export default React.forwardRef(Footer);
