import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

const GetInTouch: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography variant="h5">{t("footer.getInTouch")}</Typography>
      <Typography>{t("footer.letsTalk")}</Typography>
      <Button
        variant="outlined"
        color="primary"
        href="mailto:clementdungle@gmail.com"
      >
        {t("footer.contact")}
      </Button>
    </div>
  );
};

export default GetInTouch;
