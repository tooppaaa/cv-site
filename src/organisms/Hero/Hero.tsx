import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import hero from "../../assets/hero.jpeg";
import { Container } from "@material-ui/core";
import FloatingArrow from "../../atoms/FloatingArrow";

export interface HeroProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      backgroundImage: `url(${hero})`,
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      backgroundSize: "cover",
      color: theme.palette.common.white,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);

const Hero: React.FunctionComponent<HeroProps> = ({}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.root}>
      <Typography variant="h1" color="inherit">
        {t("hero.header")}
      </Typography>
      <Typography>{t("hero.description")}</Typography>
      <div>
        <Button variant="contained" color="primary">
          {t("hero.download")}
        </Button>
        <Button variant="outlined" color="primary">
          {t("hero.contact")}
        </Button>
      </div>
      <FloatingArrow />
    </Container>
  );
};

export default Hero;
