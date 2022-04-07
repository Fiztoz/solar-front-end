import { Box, Container, Flex, SimpleGrid, Text, Link } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import SitesRecomendation from "../../components/contents/sites-recommendation";
import Image from "next/image";

const Agency = () => {
  return (
    <Layout>
      <Container maxW="container.lg" pt={16} minH="calc(100vh - 66px)">
        <Text color="primary.01" fontSize={{ base: "18px", lg: "24px" }} fontWeight={600} mb={4}>
          คลังความรู้
        </Text>
        <Text color="dark" fontSize={{ base: "32px", lg: "48px" }} fontWeight={600} mb="56px">
          หน่วยงานที่เกี่ยวข้องกับการติดตั้ง Solar Rooftop
        </Text>
        <Text color="gray.00" fontSize="24px" fontWeight={600} mb="32px">
          หน่วยงานที่เกี่ยวข้อง
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="40px" mb="96px">
          <Flex align="start">
            <Image src="/images/moe.png" layout="fixed" width="96px" height="96px" />
            <Flex direction="column" align="start" ml={6}>
              <Text color="dark" fontSize="20px" fontWeight={600}>
                กระทรวงพลังงาน
              </Text>
              <Text color="gray.02" fontSize="18px" fontWeight={400} mb={2}>
                Ministry of Energy
              </Text>
              <Link href="https://energy.go.th/" isExternal>
                <Text color="primary.01" fontSize="16px" fontWeight={400} textDecoration="underline">
                  เข้าสู่เว็บไซต์
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex align="start">
            <Box minW="96px" height="96px">
              <Image src="/images/erc.png" layout="fixed" width="96px" height="96px" />
            </Box>
            <Flex direction="column" align="start" ml={6}>
              <Text color="dark" fontSize="20px" fontWeight={600}>
                คณะกรรมการกำกับกิจการพลังงาน (กกพ.)
              </Text>
              <Text color="gray.02" fontSize="18px" fontWeight={400} mb={2}>
                Energy Regulatory Commission
              </Text>
              <Link href="https://www.erc.or.th/ERCWeb2/Default.aspx" isExternal>
                <Text color="primary.01" fontSize="16px" fontWeight={400} textDecoration="underline">
                  เข้าสู่เว็บไซต์
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex align="start">
            <Image src="/images/pea.png" layout="fixed" width="96px" height="96px" />
            <Flex direction="column" align="start" ml={6}>
              <Text color="dark" fontSize="20px" fontWeight={600}>
                การไฟฟ้าส่วนภูมิภาค
              </Text>
              <Text color="gray.02" fontSize="18px" fontWeight={400} mb={2}>
                Provincial Electricity Authority
              </Text>
              <Link href="https://www.pea.co.th/" isExternal>
                <Text color="primary.01" fontSize="16px" fontWeight={400} textDecoration="underline">
                  เข้าสู่เว็บไซต์
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex align="start">
            <Image src="/images/mea.png" layout="fixed" width="96px" height="96px" />
            <Flex direction="column" align="start" ml={6}>
              <Text color="dark" fontSize="20px" fontWeight={600}>
                การไฟฟ้านครหลวง
              </Text>
              <Text color="gray.02" fontSize="18px" fontWeight={400} mb={2}>
                Metropolitan Electricity Authority
              </Text>
              <Link href="https://www.mea.or.th/intro" isExternal>
                <Text color="primary.01" fontSize="16px" fontWeight={400} textDecoration="underline">
                  เข้าสู่เว็บไซต์
                </Text>
              </Link>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Container>
      <Box w="100%" py={16} bgColor="primary.05">
        <Container w="100%" maxW="container.md" px={{ base: 4, md: 8 }}>
          <SitesRecomendation />
        </Container>
      </Box>
    </Layout>
  );
};

export default Agency;
