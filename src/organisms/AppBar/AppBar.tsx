import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Logo from "../../atoms/Logo";
import { useTranslation } from "react-i18next";
import { links } from "../../helpers/navigation";
import { Link, Container, IconButton, Hidden, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classnames from "classnames";
import Fade from "../../atoms/Fade";
import NavLinks from "../../molecules/NavLinks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transition: theme.transitions.create("all"),
      position: "fixed",
      width: "100%",
      zIndex: theme.zIndex.appBar,
      color: theme.palette.common.white,
      "&$scrolled": {
        backgroundColor: theme.palette.grey[900]
      }
    },
    content: {
      position: "relative",
      padding: theme.spacing(4, 0),
      display: "flex",
      alignItems: "center",
      borderBottom: "solid 1px rgba(255, 255, 255, 0.2)",
      margin: "0 auto",
      transition: theme.transitions.create("padding"),
      "&$scrolled": {
        borderBottom: "none",
        padding: theme.spacing(2, 0)
      }
    },
    scrolled: {},
    smNavigation: {
      position: "fixed",
      backgroundColor: "#000",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: theme.zIndex.modal,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    toggleMenu: {
      position: "absolute",
      transition: theme.transitions.create("padding"),
      top: 0,
      padding: theme.spacing(3, 0),
      right: 15,
      zIndex: theme.zIndex.modal + 1,
      "&$scrolled": {
        padding: theme.spacing(1, 0)
      }
    },
    grow: {
      flexGrow: 1
    },
    download: {}
  })
);

const AppBar: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  const [open, setOpen] = React.useState(false);
  const handleClick = React.useCallback(() => setOpen(!open), [open, setOpen]);

  return (
    <>
      <Container
        className={classnames(classes.root, {
          [classes.scrolled]: trigger
        })}
      >
        <div
          className={classnames(classes.content, {
            [classes.scrolled]: trigger
          })}
        >
          <Logo />
          <Hidden smDown>
            <NavLinks open={open} />
          </Hidden>

          <Hidden mdUp>
            <div
              className={classnames(classes.toggleMenu, {
                [classes.scrolled]: trigger
              })}
            >
              <IconButton onClick={handleClick} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Hidden>
          <Fade in={open} opacity={0.9}>
            <div className={classes.smNavigation}>
              <NavLinks open={open} />
            </div>
          </Fade>
        </div>
      </Container>
    </>
  );
};

export default AppBar;
