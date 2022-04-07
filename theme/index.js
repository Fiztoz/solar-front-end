import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import styles from "./styles";
import shadows from "./shadows";

import Input from "./components/input";
import Textarea from "./components/textarea";
import Button from "./components/button";
import ButtonGroup from "./components/button-group";
import Radio from "./components/radio";
import Select from "./components/select";
import Checkbox from "./components/checkbox";

const overrides = {
  colors,
  styles,
  shadows,
  components: {
    Input,
    Textarea,
    Button,
    ButtonGroup,
    Radio,
    Select,
    Checkbox,
  },
};

const theme = extendTheme(overrides);
export default theme;
