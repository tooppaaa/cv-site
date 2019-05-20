import * as React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Knowledge from "../../molecules/Knowledge";
import { ViewportContextProvider } from "../../atoms/ViewportContext/ViewportContext";

const Expertise: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typography variant="h2" align="center">
        {t("expertise.title")}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <ViewportContextProvider>
            <Typography variant="h3" gutterBottom>
              {t("expertise.languages.title")}
            </Typography>
            <Knowledge
              title={t("expertise.languages.lang1.title")}
              caption={t("expertise.languages.lang1.years")}
              percentage={100}
            />
            <Knowledge
              title={t("expertise.languages.lang2.title")}
              caption={t("expertise.languages.lang2.years")}
              percentage={90}
            />
            <Knowledge
              title={t("expertise.languages.lang3.title")}
              caption={t("expertise.languages.lang3.years")}
              percentage={80}
            />
            <Knowledge
              title={t("expertise.languages.lang4.title")}
              caption={t("expertise.languages.lang4.years")}
              percentage={60}
            />
            <Knowledge
              title={t("expertise.languages.lang5.title")}
              caption={t("expertise.languages.lang5.years")}
              percentage={50}
            />
          </ViewportContextProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ViewportContextProvider>
            <Typography variant="h3" gutterBottom>
              {t("expertise.tools.title")}
            </Typography>
            <Knowledge
              title={t("expertise.tools.tool1.title")}
              caption={t("expertise.tools.tool1.years")}
              percentage={100}
            />
            <Knowledge
              title={t("expertise.tools.tool2.title")}
              caption={t("expertise.tools.tool2.years")}
              percentage={90}
            />
            <Knowledge
              title={t("expertise.tools.tool3.title")}
              caption={t("expertise.tools.tool3.years")}
              percentage={80}
            />
            <Knowledge
              title={t("expertise.tools.tool4.title")}
              caption={t("expertise.tools.tool4.years")}
              percentage={70}
            />
            <Knowledge
              title={t("expertise.tools.tool5.title")}
              caption={t("expertise.tools.tool5.years")}
              percentage={70}
            />
          </ViewportContextProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ViewportContextProvider>
            <Typography variant="h3" gutterBottom>
              {t("expertise.skills.title")}
            </Typography>
            <Knowledge
              title={t("expertise.skills.skill1.title")}
              caption={t("expertise.skills.skill1.caption")}
              percentage={100}
            />
            <Knowledge
              title={t("expertise.skills.skill2.title")}
              caption={t("expertise.skills.skill2.caption")}
              percentage={85}
            />
            <Knowledge
              title={t("expertise.skills.skill3.title")}
              caption={t("expertise.skills.skill3.caption")}
              percentage={85}
            />
            <Knowledge
              title={t("expertise.skills.skill4.title")}
              caption={t("expertise.skills.skill4.caption")}
              percentage={100}
            />
          </ViewportContextProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Expertise;
