import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0, 4),
      color: theme.palette.common.white
    },
    letsTalk: {
      color: theme.palette.grey[400],
      marginBottom: theme.spacing(3)
    }
  })
);

const GetInTouch: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="inherit" gutterBottom>
        {t("footer.getInTouch")}
      </Typography>
      <Typography className={classes.letsTalk} variant="body1">
        {t("footer.letsTalk")}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        href="mailto:clementdungler@gmail.com"
      >
        {t("footer.contact")}
      </Button>
    </div>
  );
};

export default GetInTouch;
