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
    root: {},
    icon: {
      color: theme.palette.primary.main
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
      <Typography variant="h5" align="left" display="inline">
        {title}
      </Typography>
      <Typography color="textSecondary" align="left" display="inline">
        {caption}
      </Typography>
      <KnowledgeBar percentage={percentage} />
    </div>
  );
};

export default Knowledge;
