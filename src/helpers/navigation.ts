import i18next from "i18next";
export const links = (t: i18next.TFunction) => [
  { to: "experience", label: t("experience.title") },
  { to: "projects", label: t("project.title") },
  { to: "expertise", label: t("expertise.title") },
  { to: "education", label: t("education.title") },
  { to: "hobbies", label: t("hobbies.title") }
];
