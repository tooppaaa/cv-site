import * as React from "react";
import { Typography } from "@material-ui/core";
import CheckedIcon from "../icons/Checked";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { display: "flex" },
    icon: {
      margin: theme.spacing(0, 2),
      height: theme.typography.body2.fontSize,
      width: theme.typography.body2.fontSize,
      color: theme.palette.text.secondary
    }
  })
);

const CheckedTypography: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CheckedIcon className={classes.icon} />
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {children}
      </Typography>
    </div>
  );
};

export default CheckedTypography;
