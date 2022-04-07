import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useCustomRadioContext } from "./custom-radio-group";

const TextRadio = ({ object }) => {
  const { value, action } = useCustomRadioContext();
  return (
    <Box
      w="100"
      p={4}
      cursor="pointer"
      borderRadius="lg"
      borderWidth="1px"
      borderColor={value == object.value ? "primary.03" : "gray.07"}
      bgColor={value == object.value ? "primary.05" : "light"}
      onClick={() => action.setValue(object.value)}
    >
      <Flex align="start">
        <Image
          src={value == object.value ? "/images/check.png" : "/images/uncheck.png"}
          layout="intrinsic"
          width="20px"
          height="20px"
        />
        <Flex direction="column" pl={4}>
          <Text color={value == object.value ? "primary.01" : "gray.01"}>{object.text}</Text>
          <Text color={value == object.value ? "primary.01" : "gray.01"}>{object.description}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TextRadio;
