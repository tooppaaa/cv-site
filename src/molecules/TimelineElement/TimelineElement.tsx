import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ViewportContextProvider } from "../../atoms/ViewportContext/ViewportContext";
import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2)
      }
    },
    circle: {
      position: "absolute",
      height: 20,
      width: 20,
      top: 0,
      left: -13,
      border: `2px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.common.white,
      borderRadius: "50%",
      verticalAlign: "top",
      transition: theme.transitions.create("background-color")
    },
    filled: {
      backgroundColor: theme.palette.primary.main
    }
  })
);

const TimelineElement: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const [isIn, setIn] = React.useState(false);
  const handleMouseEnter = React.useCallback(() => setIn(true), [setIn]);
  const handleMouseLeave = React.useCallback(() => setIn(false), [setIn]);
  return (
    <ViewportContextProvider>
      <div
        className={classes.root}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={classnames(classes.circle, {
            [classes.filled]: isIn
          })}
        />{" "}
        {children}
      </div>
    </ViewportContextProvider>
  );
};

export default TimelineElement;
