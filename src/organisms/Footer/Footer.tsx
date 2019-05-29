import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Hidden, Typography } from "@material-ui/core";
import ScrollTopBar from "../../atoms/ScrollTopBar";
import GetInTouch from "../../molecules/GetInTouch";
import FooterLinks from "../../molecules/FooterLinks";
import { links } from "../../helpers/navigation";
import SocialMedia from "../../molecules/SocialMedia";
import Copyright from "../../molecules/Copyright";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.grey[700],

      width: "100%"
    },
    scrollTop: {
      backgroundColor: theme.palette.grey[600]
    },
    content: {
      position: "relative",
      paddingBottom: theme.spacing(4)
    },
    leftPart: {
      maxWidth: "calc(60% - 84px)",
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        paddingRight: theme.spacing(0),
        maxWidth: "100%"
      }
    },
    rightPart: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "40%",
      height: "calc(100% - 32px)"
    }
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.root}>
      <div className={classes.scrollTop}>
        <Container>
          <ScrollTopBar />
        </Container>
      </div>
      <Container className={classes.content}>
        <div className={classes.leftPart}>
          <GetInTouch />
          <FooterLinks links={links(t)} />
          <Copyright />
          <Typography variant="caption" color="textSecondary">
            1.0.0
          </Typography>
        </div>
        <Hidden smDown>
          <SocialMedia className={classes.rightPart} />
        </Hidden>
      </Container>
    </footer>
  );
};

export default Footer;
