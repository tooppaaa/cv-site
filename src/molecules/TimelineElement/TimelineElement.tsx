import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ViewportContextProvider } from "../../atoms/ViewportContext/ViewportContext";

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
      background: theme.palette.common.white,
      borderRadius: "50%",
      verticalAlign: "top"
    }
  })
);

const TimelineElement: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <ViewportContextProvider>
      <div className={classes.root}>
        <div className={classes.circle} /> {children}
      </div>
    </ViewportContextProvider>
  );
};

export default TimelineElement;
