const Select = {
  variants: {
    "outline-valid": {
      field: {
        background: "light",
        border: "1px solid",
        borderColor: "gray.07",
        _hover: { borderColor: "gray.05" },
        _focus: {
          borderColor: "primary.02",
          _hover: {
            borderColor: "primary.02",
          },
        },
        _disabled: {
          opacity: 1,
          border: "none",
          backgroundColor: "gray.07",
        },
      },
    },
    "outline-invalid": {
      field: {
        background: "light",
        border: "1px solid",
        borderColor: "error.02",
        _hover: { borderColor: "error.02" },
        _focus: {
          borderColor: "error.02",
          _hover: {
            borderColor: "error.02",
          },
        },
      },
    },
  },
};
export default Select;
