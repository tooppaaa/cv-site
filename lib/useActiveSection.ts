import { useEffect, useState } from "react";

const useActiveSection = (ids: string[]) => {
  let [activeSection, setActiveSection] = useState<string>(ids[0]);

  useEffect(() => {
    let sections = ids.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (ids.includes(entry.target.id)) {
              setActiveSection(entry.target.id);
            } else {
              setActiveSection(ids[0]);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      section && observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        section && observer.unobserve(section);
      });
    };
  }, [ids]);

  return activeSection;
};

export default useActiveSection;
