import * as React from "react";
import { Typography, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CheckedTypography from "../../atoms/CheckedTypography";

export interface TimelineDescriptionProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
  descriptions?: (string | { section: string; descriptions: string[] })[];
  image?: string;
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
> = ({ title, subtitle, subtitle2, descriptions, image }) => {
  const classes = useStyles();
  return (
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
        {descriptions &&
          descriptions.map((description, index) =>
            typeof description === "string" ? (
              <CheckedTypography key={index}>{description}</CheckedTypography>
            ) : (
              <div key={index}>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  {description.section}
                </Typography>
                {description.descriptions.map((description, index) => (
                  <CheckedTypography key={index}>
                    {description}
                  </CheckedTypography>
                ))}
              </div>
            )
          )}
      </div>
      {image && (
        <div className={classes.imageContainer}>
          <img src={image} className={classes.image} />
        </div>
      )}
    </div>
  );
};

export default TimelineDescription;
