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
        description="Each card is written the way I would explain it in an interview: what the situation was, what we chose, and what changed. Open any card for the full picture."
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
