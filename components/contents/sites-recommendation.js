import Link from "next/link";
import { Flex, Text, Button, Icon } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import route from "../route";

const SitesRecomendation = () => {
  const routePath = route();
  return (
    <Flex direction="column" w="100%" align="center">
      <Text color="primary.01" fontWeight={600} mb={3} textAlign="center">
        คุณพร้อมที่จะติดตั้ง Solar Rooftop แล้วใช่ไหม ?
      </Text>
      <Text color="dark" fontSize="3xl" fontWeight={600} mb={5} textAlign="center">
        อย่ารอช้าที่จะลดค่าไฟอย่างยั่งยืน
      </Text>
      <Text color="gray.01" fontSize="xl" fontWeight={400} mb={7} textAlign="center">
        คุณอาจจะเรียนรู้เพิ่มเติม หรือค้นหาผู้ติดตั้ง Solar Rooftop ด้วยตนเองได้จากด้านล่างนี้
      </Text>
      <Link href={routePath.knowledge.permissionProcess} passHref scroll={false}>
        <Button variant="link-primary" fontSize="lg" fontWeight={600} rightIcon={<Icon as={MdArrowForward} />} mb={5}>
          มือใหม่สนใจติดตั้ง Solar Rooftop
        </Button>
      </Link>
      <Link href={routePath.knowledge.permissionProcess} passHref scroll={false}>
        <Button variant="link-primary" fontSize="lg" fontWeight={600} rightIcon={<Icon as={MdArrowForward} />} mb={5}>
          เลือกช่างติดตั้งยังไงดีนะ ?
        </Button>
      </Link>
      <Button
        onClick={() =>
          window.open(
            "https://www.google.com/search?client=safari&rls=en&q=%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87+%E0%B9%82%E0%B8%8B%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%8B%E0%B8%A5%E0%B8%A5%E0%B9%8C+%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%89%E0%B8%B1%E0%B8%99&ie=UTF-8&oe=UTF-8"
          )
        }
        variant="link-primary"
        fontSize="lg"
        fontWeight={600}
        rightIcon={<Icon as={MdArrowForward} />}
        mb={5}
      >
        ค้นหาช่างติดตั้ง
      </Button>
    </Flex>
  );
};

export default SitesRecomendation;
