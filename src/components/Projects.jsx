import { projects } from "@/data/projects";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

export function Projects() {
  const featuredFirst = ["cham-clinic", "oppolia-online", "cashcup-sports", "tgmena"];
  const sortedProjects = [...projects].sort((a, b) => {
    const aIdx = featuredFirst.indexOf(a.id);
    const bIdx = featuredFirst.indexOf(b.id);
    if (aIdx === -1 && bIdx === -1) return 0;
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });

  return (
    <SectionShell id="work" variant="muted">
      <SectionHeading
        eyebrow="Case studies"
        title="Work I have stood behind."
        description="Selected production work with business context, technical choices, and measurable delivery outcomes."
      />
      <div className="flex flex-col gap-8 lg:gap-10">
        {sortedProjects.map((project, index) => (
          <Reveal key={project.id}>
            <ProjectCaseStudy project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
