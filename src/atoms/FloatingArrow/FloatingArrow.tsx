import * as React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { Transition } from "react-transition-group";

export interface FloatingArrowProps {}

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
        transform: "translate(-50%, 15px)"
      },
      "100%": {
        transform: "translate(-50%, 0)"
      }
    }
  })
);

const FloatingArrow: React.FunctionComponent<FloatingArrowProps> = ({}) => {
  const classes = useStyles();
  return (
    // <IconButton>
    <div className={classes.root}>
      <KeyboardArrowDown />
    </div>
    // </IconButton>
  );
};

export default FloatingArrow;
