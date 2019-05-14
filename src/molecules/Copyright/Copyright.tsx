import * as React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

const Copyright: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Typography className={classes.root}>
      {t("footer.copyright", { year: new Date().getFullYear() })}
    </Typography>
  );
};

export default Copyright;
