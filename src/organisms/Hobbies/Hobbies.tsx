import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import CookingHatIcon from "../../atoms/icons/CookingHat";
import RunnerIcon from "../../atoms/icons/Runner";
import CodeIcon from "../../atoms/icons/Code";
import Interest from "../../molecules/Interest";
import { useTranslation } from "react-i18next";

const Hobbies: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Interest
            icon={<CookingHatIcon />}
            title={t("hobbies.cooking.title")}
            description={t("hobbies.cooking.description")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Interest
            icon={<RunnerIcon />}
            title={t("hobbies.running.title")}
            description={t("hobbies.running.description")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Interest
            icon={<CodeIcon />}
            title={t("hobbies.development.title")}
            description={t("hobbies.development.description")}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hobbies;
