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
        title="Systems I’ve owned, from constraint to impact."
        description="Each project is structured for how senior hires and clients evaluate work: context, constraints, technical choices, and measurable results. Expand any card for the full breakdown."
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
