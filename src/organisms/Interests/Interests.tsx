import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import CraftIcon from "../../atoms/icons/Craft";
import InnovateIcon from "../../atoms/icons/Innovate";
import TelescopeIcon from "../../atoms/icons/Telescope";
import Interest from "../../molecules/Interest";
import { useTranslation } from "react-i18next";

export interface InterestsProps {}

const Interests: React.FunctionComponent<InterestsProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Interest
            icon={<CraftIcon />}
            title={t("interests.software.title")}
            description={t("interests.software.description")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Interest
            icon={<InnovateIcon />}
            title={t("interests.frontend.title")}
            description={t("interests.frontend.description")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Interest
            icon={<TelescopeIcon />}
            title={t("interests.technology.title")}
            description={t("interests.technology.description")}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Interests;
