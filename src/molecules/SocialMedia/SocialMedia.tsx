import * as React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import LinkedinIcon from "../../atoms/icons/Linkedin";

interface SocialMediaProps {
  className?: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backroundColor: theme.palette.grey[900]
    },
    linkedin: {
      backgroundColor: "#0077B5"
    }
  })
);

const SocialMedia: React.FC<SocialMediaProps> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classnames(classes.root, className)}>
      <Typography variant="h5" color="inherit">
        {t("footer.socialMedia")}
      </Typography>

      <IconButton
        className={classes.linkedin}
        href="https://www.linkedin.com/in/clement-dungler/"
      >
        <LinkedinIcon />
      </IconButton>
    </div>
  );
};

export default SocialMedia;
