import * as React from "react";
import { Container, Avatar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import me from "../../assets/me.png";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center"
      }
    },
    avatar: {
      marginRight: theme.spacing(4),
      width: 100,
      height: 100,
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2),
        width: 80,
        height: 80
      }
    }
  })
);

const Bio: React.FC = ({}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Container className={classes.root}>
      <Avatar src={me} className={classes.avatar} />
      <div>
        <Typography variant="h3" gutterBottom>
          {t("bio.title")}
        </Typography>
        <Typography gutterBottom>{t("bio.p1")}</Typography>
        <Typography gutterBottom>{t("bio.p2")}</Typography>
      </div>
    </Container>
  );
};

export default Bio;
