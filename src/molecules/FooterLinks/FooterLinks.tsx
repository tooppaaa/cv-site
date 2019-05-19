import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SmoothNavLink from "../../atoms/SmoothNavLink";

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
      padding: theme.spacing(2, 0),
      [theme.breakpoints.down("sm")]: {
        borderTopWidth: 0,
        flexDirection: "column"
      }
    },
    link: {
      padding: theme.spacing(1),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        paddingRight: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.grey[600]}`
      }
    }
  })
);

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {links.map((link, index) => (
        <SmoothNavLink key={index} className={classes.link} to={link.to}>
          {link.label}
        </SmoothNavLink>
      ))}
    </div>
  );
};

export default FooterLinks;
