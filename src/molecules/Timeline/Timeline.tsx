import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderLeft: `3px dotted ${theme.palette.grey[300]}` //#E6E9EA;
    }
  })
);

const Timeline: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Timeline;
