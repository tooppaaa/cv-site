import * as React from "react";
import { Typography, Grow } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useViewport } from "../../atoms/ViewportContext/ViewportContext";
import CheckedTypography from "../../atoms/CheckedTypography";

export interface TimelineDescriptionProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
  descriptions?: string[];
  image?: string;
  stack?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },
    content: {
      flexGrow: 1
    },
    imageContainer: {
      maxWidth: "25vw",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "auto",
        maxHeigth: 150,
        alignSelf: "center",
        margin: theme.spacing(1)
      }
    },
    image: {
      maxWidth: "100%",
      maxHeight: 100
    }
  })
);

const TimelineDescription: React.FunctionComponent<
  TimelineDescriptionProps
> = ({ title, subtitle, subtitle2, children, descriptions, image, stack }) => {
  const classes = useStyles();
  const visible = useViewport();
  return (
    <Grow in={visible}>
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography variant="h4">{title}</Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom={!subtitle2}
          >
            {subtitle}
          </Typography>
          {subtitle2 && (
            <Typography variant="subtitle2" color="primary" gutterBottom>
              {subtitle2}
            </Typography>
          )}
          {children}
          {descriptions &&
            descriptions.map((description, index) => (
              <CheckedTypography key={index}>{description}</CheckedTypography>
            ))}
          {stack && (
            <Typography gutterBottom variant="caption" color="primary">
              {stack}
            </Typography>
          )}
        </div>
        {image && (
          <div className={classes.imageContainer}>
            <img src={image} className={classes.image} />
          </div>
        )}
      </div>
    </Grow>
  );
};

export default TimelineDescription;
