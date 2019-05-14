import * as React from "react";
import { Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CheckedTypography from "../../atoms/CheckedTypography";

export interface KnowledgeBarProps {
  percentage: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%",
      height: 23
    },
    bar: {
      position: "absolute",
      top: 6,
      left: 1,
      background: theme.palette.primary.main,
      borderRadius: 15,
      width: "100%",
      height: 15,
      boxShadow: theme.shadows[1]
    },
    progress: {
      position: "absolute",
      top: 0,
      background: theme.palette.primary.dark,
      height: 23,
      borderRadius: 15,

      border: `2px solid ${theme.palette.background.default}`,
      minWidth: "5%"
    }
  })
);

const KnowledgeBar: React.FunctionComponent<KnowledgeBarProps> = ({
  percentage
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bar} />
      <div className={classes.progress} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default KnowledgeBar;
