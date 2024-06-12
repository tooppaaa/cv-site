import Progress from "@/components/ui/progress";

const skills = [
  {
    label: "React / Next.js",
    percentage: 100,
    levelLabel: "Expert",
  },
  {
    label: "AI / LLM",
    percentage: 80,
  },
  {
    label: "Node.js / Typescript",
    percentage: 100,
  },
  {
    label: "Tailwind CSS / Emotion",
    percentage: 100,
  },
  {
    label: "Jest, Playwright",
    percentage: 100,
  },
  {
    label: "AWS, GCP, Azure, Vercel",
    percentage: 100,
  },
  {
    label: "CI/CD",
    percentage: 90,
  },
  {
    label: "PostgreSQL",
    percentage: 80,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className={"grid grid-cols-1 gap-8 md:grid-cols-2"}>
        <div>
          <div
            className="aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="mb-5 text-2xl">Mes compétences et technologies</h2>
            <div className="text-foreground-secondary">
              <p className="mb-2">
                Difficile de lister toutes les technologies que j&apos;ai pu
                utiliser au cours de ma carrière, mais voici celles que
                j&apos;utilise le plus souvent.
              </p>
              <p>
                Dans les technologies utilisés, il faut faire un choix. A la
                fois la bonne technologie, pour la bonne utilisation, adoptée
                par les bonnes personnes
              </p>
            </div>
            {/* <h2 className="my-5 text-2xl">Autres</h2>
            <div className="text-foreground-secondary">
              <p className="mb-2">
                Français, Anglais, attitude positive, partage
              </p>
            </div> */}
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 print:grid print:grid-cols-2">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SkillProps {
  label: string;
  percentage: number;
  levelLabel?: string;
}

const Skill = ({ label, percentage, levelLabel }: SkillProps) => {
  return (
    <div
      className="aos-init aos-animate w-full"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200"
    >
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-lg print:text-xs">{label}</h3>
        {levelLabel && (
          <p
            className="text-primary print:text-xs"
            data-aos-duration="1.5s"
            data-aos-delay="0.5s"
          >
            {levelLabel}
          </p>
        )}
      </div>
      <Progress value={percentage} />
    </div>
  );
};

export default Skills;
