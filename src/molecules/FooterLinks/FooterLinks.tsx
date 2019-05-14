import * as React from "react";
import { Typography, Button, Link } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

interface FooterLinksProps {
  links: {
    to: string;
    label: string;
  }[];
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      borderTop: `1px solid ${theme.palette.grey[600]}`,
      [theme.breakpoints.down("sm")]: {
        borderTopWidth: 0,
        flexDirection: "column"
      }
    },
    link: {
      color: theme.palette.common.white,
      padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        borderBottom: `1px solid ${theme.palette.grey[600]}`
      }
    }
  })
);

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {links.map((link, index) => (
        <Link key={index} className={classes.link} href={link.to}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
