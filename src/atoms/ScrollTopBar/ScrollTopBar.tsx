import * as React from "react";
import { IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-end"
    },
    container: {
      backgroundColor: theme.palette.grey[600]
    }
  })
);

const ScrollTopBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <IconButton>
          <KeyboardArrowUp />
        </IconButton>
      </div>
    </div>
  );
};

export default ScrollTopBar;
