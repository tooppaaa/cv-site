import { Timeline, TimelineItem } from "@/components/ui/timeline";

const Education = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem
          title="École d'ingénieur en informatique"
          duration="2010-2013"
          subtitle="ENSISA"
          text="École d'ingénieur spécialisée en informatique et réseaux"
        />
        <TimelineItem
          title="Classe préparatoire aux grandes écoles"
          duration="2008 - 2010"
          subtitle="Mulhouse, France"
        />
        <TimelineItem
          title="Baccalauréat avec mention"
          duration="2008"
          subtitle="Mulhouse, France"
        />
      </Timeline>
    </div>
  );
};

export default Education;
