import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Timeline from "../../molecules/Timeline";
import TimelineElement from "../../molecules/TimelineElement";
import TimelineDescription from "../../molecules/TimelineDescription";
import enablon from "../../assets/enablon.png";
import soliton from "../../assets/soliton.png";
import airbus from "../../assets/airbus.png";
import ames from "../../assets/ames.png";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2" align="center">
        {t("experience.title")}
      </Typography>
      <Timeline>
        <TimelineElement>
          <TimelineDescription
            title={t("experience.enablon.title")}
            subtitle={t("experience.enablon.subtitle")}
            subtitle2={t("experience.enablon.subtitle2")}
            image={enablon}
            descriptions={[
              t("experience.enablon.bullet1"),
              t("experience.enablon.bullet2"),
              t("experience.enablon.bullet3"),
              t("experience.enablon.bullet4"),
              t("experience.enablon.bullet5"),
              t("experience.enablon.bullet6")
            ]}
          />
        </TimelineElement>
        <TimelineElement>
          <TimelineDescription
            title={t("experience.soliton.title")}
            subtitle={t("experience.soliton.subtitle")}
            subtitle2={t("experience.soliton.subtitle2")}
            image={soliton}
            descriptions={[
              t("experience.soliton.bullet1"),
              t("experience.soliton.bullet2"),
              t("experience.soliton.bullet3"),
              t("experience.soliton.bullet4"),
              t("experience.soliton.bullet5"),
              t("experience.soliton.bullet6")
            ]}
          />
        </TimelineElement>
        <TimelineElement>
          <TimelineDescription
            title={t("experience.airbus.title")}
            subtitle={t("experience.airbus.subtitle")}
            subtitle2={t("experience.airbus.subtitle2")}
            image={airbus}
            descriptions={[
              t("experience.airbus.bullet1"),
              t("experience.airbus.bullet2"),
              t("experience.airbus.bullet3")
            ]}
          />
        </TimelineElement>
        <TimelineElement>
          <TimelineDescription
            title={t("experience.ames.title")}
            subtitle={t("experience.ames.subtitle")}
            subtitle2={t("experience.ames.subtitle2")}
            image={ames}
            descriptions={[
              t("experience.ames.bullet1"),
              t("experience.ames.bullet2")
            ]}
          />
        </TimelineElement>
      </Timeline>
    </Container>
  );
};

export default Experience;
