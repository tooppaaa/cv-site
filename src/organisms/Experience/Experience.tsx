import * as React from "react";
import { Container, Typography, Grow } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "react-spring";
import Timeline from "../../molecules/Timeline";
import TimelineElement from "../../molecules/TimelineElement";
import TimelineDescription from "../../molecules/TimelineDescription";
import enablon from "../../assets/enablon.png";
import soliton from "../../assets/soliton.png";
import airbus from "../../assets/airbus.png";
import ames from "../../assets/ames.png";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const [visible, setVisible] = React.useState(false);
  const props = useSpring({ opacity: visible ? 1 : 0, from: { opacity: 0 } });
  const handleWaypointEnter = React.useCallback(() => setVisible(true), [
    setVisible
  ]);
  const handleWaypointLeave = React.useCallback(() => setVisible(false), [
    setVisible
  ]);
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
              {
                section: t("experience.enablon.section1.section"),
                descriptions: [
                  t("experience.enablon.section1.bullet1"),
                  t("experience.enablon.section1.bullet2"),
                  t("experience.enablon.section1.bullet3")
                ]
              },
              {
                section: t("experience.enablon.section2.section"),
                descriptions: [
                  t("experience.enablon.section2.bullet1"),
                  t("experience.enablon.section2.bullet2"),
                  t("experience.enablon.section2.bullet3")
                ]
              }
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
              {
                section: t("experience.soliton.section1.section"),
                descriptions: [
                  t("experience.soliton.section1.bullet1"),
                  t("experience.soliton.section1.bullet2"),
                  t("experience.soliton.section1.bullet3")
                ]
              },
              {
                section: t("experience.soliton.section2.section"),
                descriptions: [
                  t("experience.soliton.section2.bullet1"),
                  t("experience.soliton.section2.bullet2"),
                  t("experience.soliton.section2.bullet3")
                ]
              }
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
