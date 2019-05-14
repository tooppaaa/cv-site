import * as React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Knowledge from "../../molecules/Knowledge";

export interface ExpertiseProps {}

const Expertise: React.FunctionComponent<ExpertiseProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typography variant="h2" align="center">
        {t("expertise.title")}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Typography variant="h3">{t("expertise.languages.title")}</Typography>
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
            percentage={70}
          />
          <Knowledge
            title={t("expertise.languages.lang5.title")}
            caption={t("expertise.languages.lang5.years")}
            percentage={90}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h3">{t("expertise.tools.title")}</Typography>
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
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h3">{t("expertise.skills.title")}</Typography>
          <Knowledge
            title={t("expertise.skills.skill1.title")}
            caption={t("expertise.skills.skill1.caption")}
            percentage={100}
          />
          <Knowledge
            title={t("expertise.skills.skill2.title")}
            percentage={70}
          />
          <Knowledge
            title={t("expertise.skills.skill3.title")}
            percentage={80}
          />
          <Knowledge
            title={t("expertise.skills.skill4.title")}
            caption={t("expertise.skills.skill4.caption")}
            percentage={70}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Expertise;
