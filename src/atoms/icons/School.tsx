import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const School: React.FunctionComponent<SvgIconProps> = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M12 3l11.016 6v8.016h-2.016v-6.938l-9 4.922-11.016-6zM5.016 13.172l6.984 3.844 6.984-3.844v4.031l-6.984 3.797-6.984-3.797v-4.031z" />
  </SvgIcon>
);

export default School;
