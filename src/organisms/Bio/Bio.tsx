import * as React from "react";
import { Container, Avatar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import me from "../../assets/me.png";
import { useTranslation } from "react-i18next";

export interface BioProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    }
  })
);

const Bio: React.FunctionComponent<BioProps> = ({}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Container className={classes.root}>
      <Avatar src={me} />
      <div>
        <Typography variant="h3">{t("bio.title")}</Typography>
        <Typography>{t("bio.p1")}</Typography>
        <Typography>{t("bio.p2")}</Typography>
      </div>
    </Container>
  );
};

export default Bio;
