import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Flex, Spacer, Text, Collapse, VStack, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const NavAccordion = (props) => {
  const { menuItem, onNavigationEnd } = props;
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const handleOnNavigate = () => {
    onToggle();
    onNavigationEnd();
  };
  return (
    <Box>
      <Flex align="center" onClick={onToggle} cursor="pointer" h="40px">
        <Text color={isOpen ? "primary.01" : "gray.01"} fontWeight="500">
          {menuItem.name}
        </Text>
        <Spacer />
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" align="stretch">
          {menuItem.children.map((child, index) => (
            <Link key={index} href={child.href} passHref scroll={false}>
              <Flex align="center" cursor="pointer" h="40px" onClick={() => handleOnNavigate()}>
                <Text fontSize={14} color="gray.01">
                  {child.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Collapse>
    </Box>
  );
};

export default NavAccordion;
