import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import Timeline from "../../molecules/Timeline";
import TimelineElement from "../../molecules/TimelineElement";
import TimelineDescription from "../../molecules/TimelineDescription";
import { useTranslation } from "react-i18next";
import ensisa from "../../assets/ensisa.svg";
import school from "../../assets/school.svg";

const Education: React.FC = ({}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typography variant="h2" align="center">
        {t("education.title")}
      </Typography>
      <Timeline>
        <TimelineElement>
          <TimelineDescription
            title={t("education.ensisa.title")}
            subtitle={t("education.ensisa.subtitle")}
            subtitle2={t("education.ensisa.subtitle2")}
            image={ensisa}
          />
        </TimelineElement>
        <TimelineElement>
          <TimelineDescription
            title={t("education.prepa.title")}
            subtitle={t("education.prepa.subtitle")}
          />
        </TimelineElement>
        <TimelineElement>
          <TimelineDescription
            title={t("education.bac.title")}
            subtitle={t("education.bac.subtitle")}
            image={school}
          />
        </TimelineElement>
      </Timeline>
    </Container>
  );
};

export default Education;
