import { projects } from "@/data/projects";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <SectionShell id="work" variant="muted">
      <SectionHeading
        eyebrow="Case studies"
        title="Work I have stood behind."
        description="Projects included: Cham Clinic, Oppolia KSA, Oppolia Online, Tarta de Amor, CashCup Sports, ToysLab KSA, Hadiha, AI Syria, Gravity Wrestling Academy, Kraken, and Elite Edition. Open any card for the full picture."
      />
      <div className="flex flex-col gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <Reveal key={project.id}>
            <ProjectCaseStudy project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
