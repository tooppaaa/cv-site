import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: 5,
      marginRight: theme.spacing(2),
      "&:hover": {
        color: "inherit"
      }
    }
  })
);

const Logo: React.FC = () => {
  const classes = useStyles();
  return (
    <Link href="#" className={classes.root} underline="none" color="inherit">
      Clement Dungler
    </Link>
  );
};

export default Logo;
