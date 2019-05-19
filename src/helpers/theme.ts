import createMuiTheme, {
  ThemeOptions
} from "@material-ui/core/styles/createMuiTheme";
import { responsiveFontSizes } from "@material-ui/core/styles";

import { grey } from "./colors";
import typography from "./typography";

const theme: ThemeOptions = {
  shape: {
    borderRadius: 32
  },
  palette: {
    primary: {
      main: "#03A9F4",
      contrastText: "rgba(255, 255, 255, 0.87)"
    },
    grey,
    text: {
      primary: grey[700],
      secondary: "rgba(28, 54, 83, 0.54)"
    },
    background: {
      default: "#FFFFFF",
      paper: "#F3F4F8"
    }
  },
  typography,
  props: {},
  overrides: {
    MuiTypography: {
      h2: {
        marginBottom: "1.5em"
      }
    },
    MuiLink: {}
  }
};
export default responsiveFontSizes(createMuiTheme(theme));
