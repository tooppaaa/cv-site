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
      color: theme.palette.common.white
    },
    container: {
      padding: theme.spacing(10)
    },
    quote: {
      fontStyle: "italic"
    }
  })
);

const Quote: React.FunctionComponent<QuoteProps> = ({}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography
          component="div"
          variant="h3"
          color="inherit"
          align="center"
          className={classes.quote}
        >
          {t("quote.quote")}
        </Typography>
        <Typography align="center" color="inherit">
          {t("quote.author")}
        </Typography>
      </Container>
    </div>
  );
};

export default Quote;
