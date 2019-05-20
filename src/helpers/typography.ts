import { grey } from "./colors";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: [
    "Raleway",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(","),
  h1: {
    fontWeight: 300,
    fontSize: "4rem",
    lineHeight: 1,
    letterSpacing: "-0.01562em"
  },
  h2: {
    fontWeight: 300,
    fontSize: "3rem",
    lineHeight: 1,
    letterSpacing: "-0.01562em",
    textTransform: "uppercase"
  },
  h3: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "1.250rem",
    lineHeight: 1.6,
    letterSpacing: "0em"
  },
  h4: {
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.4,
    letterSpacing: "0.00714em"
  },
  h5: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.4,
    letterSpacing: "0.00714em"
  },
  body1: {
    color: grey[500]
  },
  body2: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1,
    letterSpacing: "0.00714em"
  },
  subtitle1: {
    fontSize: "0.875rem",
    letterSpacing: "0.00714em"
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.43,
    letterSpacing: "0.01071em"
  }
};

export default typography;
