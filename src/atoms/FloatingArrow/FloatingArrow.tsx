import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import classnames from "classnames";

export interface FloatingArrowProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      animation: `$arrow-pulsate 2500ms ${
        theme.transitions.easing.easeInOut
      } 200ms infinite`
    },

    "@keyframes arrow-pulsate": {
      "0%": {
        transform: "translate(-50%, 0)"
      },
      "65%": {
        transform: "translate(-50%, -15px)"
      },
      "100%": {
        transform: "translate(-50%, 0)"
      }
    }
  })
);

const FloatingArrow: React.FunctionComponent<FloatingArrowProps> = ({
  className
}) => {
  const classes = useStyles();
  return (
    // <IconButton>
    <div className={classnames(classes.root, className)}>
      <KeyboardArrowDown />
    </div>
    // </IconButton>
  );
};

export default FloatingArrow;
