import { createContext, useContext, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const CustomRadioContext = createContext({});

export const useCustomRadioContext = () => useContext(CustomRadioContext);

export const CustomRadioGroup = ({ initValue, onValueChange, children }) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    onValueChange(value);
  }, [value]);

  const provideValue = {
    value,
    action: {
      setValue,
    },
  };

  return (
    <CustomRadioContext.Provider value={provideValue}>
      <Box w="100%">{children}</Box>
    </CustomRadioContext.Provider>
  );
};
