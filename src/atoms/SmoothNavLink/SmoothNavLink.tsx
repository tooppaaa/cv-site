import * as React from "react";
import { Link } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link as ScrollLink } from "react-scroll";
import classnames from "classnames";

interface SmoothNavLinkProps {
  to: string;
  className?: string;
  onClick?: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transition: theme.transitions.create("color"),
      textTransform: "uppercase",
      fontWeight: 300,
      "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer"
      },
      color: theme.palette.common.white
    }
  })
);

const SmoothNavLink: React.FunctionComponent<SmoothNavLinkProps> = ({
  children,
  className,
  to,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Link
      className={classnames(classes.root, className)}
      component={ScrollLink}
      to={to}
      smooth={true}
      offset={-70}
      underline="none"
      {...props}
    >
      {children}
    </Link>
  );
};

export default SmoothNavLink;
