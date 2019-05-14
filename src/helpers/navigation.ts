import i18next from "i18next";
export const links = (t: i18next.TFunction) => [
  { to: "#education", label: t("education.title") },
  { to: "#experience", label: t("experience.title") },
  { to: "#expertise", label: t("expertise.title") },
  { to: "#hobbies", label: t("hobbies.title") }
];
