import * as React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0),
      color: theme.palette.grey[400]
    }
  })
);

const Copyright: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Typography className={classes.root} variant="body2">
      {t("footer.copyright", { year: new Date().getFullYear() })}
    </Typography>
  );
};

export default Copyright;
