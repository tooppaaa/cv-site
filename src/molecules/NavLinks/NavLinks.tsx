import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { links } from "../../helpers/navigation";
import { Link, Hidden, Button } from "@material-ui/core";
import classnames from "classnames";

interface NavLinksProps {
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: theme.palette.common.white,
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

const NavLinks: React.FunctionComponent<NavLinksProps> = ({ open }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      {links(t).map((link, index) => (
        <Link
          key={index}
          className={classnames(classes.link, classes.animated, {
            [classes.inAnimated]: open
          })}
          href={link.to}
          underline="none"
        >
          {link.label}
        </Link>
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
      >
        {t("hero.download")}
      </Button>
    </>
  );
};

export default NavLinks;
