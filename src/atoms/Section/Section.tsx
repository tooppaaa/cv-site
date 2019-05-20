import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import classnames from "classnames";

export interface SectionProps {
  id: string;
  className?: string;
  noPadding?: boolean;
  alternate?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    padded: {
      padding: theme.spacing(8, 0),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 0)
      }
    },
    alternate: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

const Section: React.FunctionComponent<SectionProps> = ({
  children,
  className,
  noPadding = false,
  alternate = false,
  ...props
}) => {
  const classes = useStyles();
  return (
    <section
      {...props}
      className={classnames(className, {
        [classes.padded]: !noPadding,
        [classes.alternate]: alternate
      })}
    >
      {children}
    </section>
  );
};

export default Section;
