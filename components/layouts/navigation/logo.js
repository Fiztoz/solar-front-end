import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Text, Flex, Square } from "@chakra-ui/react";
import usePageOffset from "../../../library/page-offset";
import route from "../../route";

const Logo = ({ color }) => {
  const { x, y } = usePageOffset();
  const routePath = route();
  const img = `/images/nav-image.png`;

  const variants = {
    small: { width: "40px", height: "50px" },
    large: { width: "40px", height: "50px" },
  };

  return (
    <Link href={routePath.landing} scroll={false}>
      <a>
        <Flex align="center">
          <motion.div
            animate={y > 20 ? "small" : "large"}
            variants={variants}
            style={{ position: "relative", marginRight: "4px" }}
          >
            <Image src={img} layout="fill" />
          </motion.div>
          <Text
            fontWeight={600}
            color={{
              lg: () => {
                if (y > 0) {
                  return "dark";
                } else {
                  return color ? color : "dark";
                }
              },
              base: "dark",
            }}
          >
            PEA Solar Hero
          </Text>
        </Flex>
      </a>
    </Link>
  );
};

export default Logo;
