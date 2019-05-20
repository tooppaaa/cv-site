import * as React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";
import Timeline from "../../molecules/Timeline";
import TimelineElement from "../../molecules/TimelineElement";
import TimelineDescription from "../../molecules/TimelineDescription";
import anaba from "../../assets/anaba.png";
import lifeevent from "../../assets/lifeevent.png";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        {t("project.title")}
      </Typography>
      <Timeline>
        <TimelineElement>
          <TimelineDescription
            title={t("project.anaba.title")}
            subtitle={t("project.anaba.subtitle")}
            subtitle2={t("project.anaba.subtitle2")}
            image={anaba}
            descriptions={[
              t("project.anaba.bullet1"),
              t("project.anaba.bullet2"),
              t("project.anaba.bullet3"),
              t("project.anaba.bullet4"),
              t("project.anaba.bullet5")
            ]}
            stack={t("project.anaba.stack")}
          >
            <Typography gutterBottom>
              <Trans i18nKey="project.anaba.description">
                <Link target="_blank" href="https://anaba.fr" />
              </Trans>
            </Typography>
          </TimelineDescription>
        </TimelineElement>
        <TimelineElement>
          <TimelineDescription
            title={t("project.lifeevent.title")}
            subtitle={t("project.lifeevent.subtitle")}
            subtitle2={t("project.lifeevent.subtitle2")}
            image={lifeevent}
            descriptions={[
              t("project.lifeevent.bullet1"),
              t("project.lifeevent.bullet2"),
              t("project.lifeevent.bullet3"),
              t("project.lifeevent.bullet4")
            ]}
            stack={t("project.lifeevent.stack")}
          >
            <Typography gutterBottom>
              <Trans i18nKey="project.lifeevent.description">
                <Link target="_blank" href="http://lifeevent.fr" />
              </Trans>
            </Typography>
          </TimelineDescription>
        </TimelineElement>
      </Timeline>
    </Container>
  );
};

export default Projects;
