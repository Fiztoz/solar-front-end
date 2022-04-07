const Radio = {
  baseStyle: {
    control: {
      border: "1px solid",
      borderColor: "gray.00",
      _checked: {
        borderColor: "primary.01",
        bg: "light",
        color: "primary.01",
        _hover: {
          borderColor: "primary.01",
          bg: "light",
        },
      },
      _indeterminate: {
        borderColor: "primary.01",
        bg: "light",
      },
    },
  },
};
export default Radio;
