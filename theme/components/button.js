const Button = {
  variants: {
    "nav-button": {
      fontWeight: "400",
      color: "gray.01",
    },
    light: {
      fontWeight: "500",
      color: "primary.01",
      backgroundColor: "light",
      _hover: {
        boxShadow: "xl",
      },
    },
    "light-on-light": {
      fontWeight: "500",
      color: "gray.02",
      backgroundColor: "light",
      border: "1px",
      borderColor: "gray.02",
      _hover: {
        boxShadow: "xl",
      },
    },
    primary: {
      fontWeight: "600",
      color: "light",
      backgroundColor: "primary.01",
      _hover: {
        boxShadow: "xl",
      },
      _disabled: {
        opacity: 1,
        backgroundColor: "gray.05",
      },
      _hover: {
        _disabled: {
          opacity: 1,
          backgroundColor: "gray.05",
        },
      },
    },
    "primary-outline": {
      fontWeight: "500",
      color: "primary.01",
      border: "1px solid",
      backgroundColor: "light",
      borderColor: "primary.01",
      _hover: {
        boxShadow: "xl",
      },
    },
    "link-primary": {
      fontWeight: "500",
      color: "primary.01",
    },
    "link-light": {
      fontWeight: "500",
      color: "light",
      paddingLeft: 0,
    },
  },
};

export default Button;
