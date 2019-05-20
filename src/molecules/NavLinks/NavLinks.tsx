import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { links } from "../../helpers/navigation";
import { Hidden, Button } from "@material-ui/core";
import classnames from "classnames";
import SmoothNavLink from "../../atoms/SmoothNavLink";

interface NavLinksProps {
  open: boolean;
  onClick?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      padding: theme.spacing(1),

      [theme.breakpoints.down("sm")]: {
        display: "block",
        ...theme.typography.button
      }
    },
    animated: {
      transition: theme.transitions.create("all"),
      [theme.breakpoints.down("sm")]: {
        display: "block",
        ...theme.typography.button,
        transition: "transform 0.5s",
        transform: "translate3d(0, -80px, 0)"
      }
    },
    inAnimated: {
      [theme.breakpoints.down("sm")]: {
        transform: "translate3d(0, 0px, 0)"
      }
    },
    grow: {
      flexGrow: 1
    },
    download: {
      "&:hover": {
        color: theme.palette.primary.main
      }
    }
  })
);

const NavLinks: React.FunctionComponent<NavLinksProps> = ({
  open,
  onClick
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      {links(t).map((link, index) => (
        <SmoothNavLink
          key={index}
          to={link.to}
          onClick={onClick}
          className={classnames(classes.link, classes.animated, {
            [classes.inAnimated]: open
          })}
        >
          {link.label}
        </SmoothNavLink>
      ))}
      <Hidden smDown>
        <div className={classes.grow} />
      </Hidden>
      <Button
        variant="outlined"
        color="inherit"
        className={classnames(classes.download, classes.animated, {
          [classes.inAnimated]: open
        })}
        target="_blank"
        href="/DUNGLER_CLEMENT_CV.pdf"
      >
        {t("hero.download")}
      </Button>
    </>
  );
};

export default NavLinks;
