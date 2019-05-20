import * as React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import KnowledgeBar from "../../atoms/KnowledgeBar";

export interface KnowledgeProps {
  title: string;
  caption?: string;
  percentage: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(2)
    },
    texts: {
      display: "flex",
      marginBottom: theme.spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    caption: {
      float: "right"
    }
  })
);

const Knowledge: React.FunctionComponent<KnowledgeProps> = ({
  title,
  caption,
  percentage
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.texts}>
        <Typography variant="h5" align="left">
          {title}
        </Typography>
        <div className={classes.grow} />
        <Typography
          color="textSecondary"
          align="right"
          variant="h5"
          component="span"
          className={classes.caption}
        >
          {caption}
        </Typography>
      </div>
      <KnowledgeBar percentage={percentage} />
    </div>
  );
};

export default Knowledge;
