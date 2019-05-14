import * as React from "react";
import { Typography } from "@material-ui/core";
import CheckedIcon from "../icons/Checked";

export interface CheckedTypographyProps {}

const CheckedTypography: React.FunctionComponent<CheckedTypographyProps> = ({
  children
}) => (
  <div>
    <CheckedIcon />
    <Typography>{children}</Typography>
  </div>
);

export default CheckedTypography;
