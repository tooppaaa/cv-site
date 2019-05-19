import * as React from "react";
import { IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import { animateScroll } from "react-scroll";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-end"
    },
    container: {
      backgroundColor: theme.palette.grey[700],
      borderRadius: 0,
      color: theme.palette.common.white
    }
  })
);

const ScrollTopBar: React.FC = () => {
  const classes = useStyles();
  const handleScrollTop = React.useCallback(() => {
    animateScroll.scrollToTop();
  }, []);
  return (
    <div className={classes.root}>
      <IconButton className={classes.container} onClick={handleScrollTop}>
        <KeyboardArrowUp />
      </IconButton>
    </div>
  );
};

export default ScrollTopBar;
