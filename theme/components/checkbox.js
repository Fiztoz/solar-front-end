const Checkbox = {
  variants: {
    primary: {
      icon: {
        transitionProperty: "transform",
        transitionDuration: "normal",
      },
      control: {
        transitionProperty: "box-shadow",
        transitionDuration: "normal",
        border: "1px solid",
        borderRadius: "4px",
        borderColor: "inherit",
        color: "white",

        _checked: {
          bg: "primary.05",
          borderColor: "primary.01",
          color: "primary.01",

          _hover: {
            bg: "primary.05",
            borderColor: "primary.01",
            color: "primary.01",
          },

          _disabled: {
            borderColor: "transparent",
            bg: "gray.05",
            color: "light",
          },
        },

        _indeterminate: {
          bg: "primary.05",
          borderColor: "primary.01",
          color: "primary.01",
        },

        _disabled: {
          borderColor: "transparent",
          bg: "gray.05",
        },

        _focus: {
          boxShadow: "outline",
        },

        _invalid: {
          borderColor: "error.02",
        },
      },
      label: {
        userSelect: "none",
        _disabled: { opacity: 0.4 },
      },
    },
  },
};
export default Checkbox;
