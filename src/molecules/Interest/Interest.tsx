import * as React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import classnames from "classnames";

export interface InterestProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    icon: {
      color: theme.palette.primary.main
    }
  })
);

const Interest: React.FunctionComponent<InterestProps> = ({
  icon,
  title,
  description
}) => {
  const classes = useStyles();
  const clonedIcon = React.cloneElement(icon, {
    className: classnames(icon.props.className, classes.icon)
  });
  return (
    <div className={classes.root}>
      {clonedIcon}
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>
      </div>
    </div>
  );
};

export default Interest;
