import * as React from "react";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import quote from "../../assets/quote.jpeg";
import { Container } from "@material-ui/core";

export interface QuoteProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   height: "200px",
      backgroundImage: `url(${quote})`,
      backgroundPositionX: "center",
      backgroundPositionY: "center",
      backgroundSize: "cover",
      position: "relative",
      color: theme.palette.common.white,
      padding: theme.spacing(10)
    }
  })
);

const Quote: React.FunctionComponent<QuoteProps> = ({}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" color="inherit" align="center">
        {t("quote.quote")}
      </Typography>
      <Typography align="center">{t("quote.author")}</Typography>
    </Container>
  );
};

export default Quote;
