import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import hero from "../../assets/hero.jpeg";
import { Container } from "@material-ui/core";
import FloatingArrow from "../../atoms/FloatingArrow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundImage: `url(${hero})`,
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      backgroundSize: "cover",
      color: theme.palette.common.white
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      height: "100%"
    },
    icon: {
      position: "absolute",
      bottom: theme.spacing(2)
    },
    actions: {
      dislpay: "flex",
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },
    button: {
      margin: theme.spacing(2)
    }
  })
);

const Hero: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h1" color="inherit" align="center" gutterBottom>
          {t("hero.header")}
        </Typography>
        <Typography align="center" color="inherit" gutterBottom>
          {t("hero.description")}
        </Typography>
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
            target="_blank"
            href="/DUNGLER_CLEMENT_CV.pdf"
          >
            {t("hero.download")}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            size="large"
            href="mailto:clementdungler@gmail.com"
          >
            {t("hero.contact")}
          </Button>
        </div>
        <FloatingArrow className={classes.icon} />
      </Container>
    </div>
  );
};

export default Hero;
