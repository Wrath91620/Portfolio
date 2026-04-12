"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { projectLogoStyles } from "@/lib/projectLogo";
import { IconChevronDown, IconChevronRight } from "./icons";

/** Expandable case study. Copy in src/data/projects.js */
export function ProjectCaseStudy({ project, index }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const [logoFailed, setLogoFailed] = useState(false);
  const activeLogo = !logoFailed && project.localLogoUrl ? project.localLogoUrl : project.logoUrl;
  const { wrap: logoWrapClass, img: logoImgClass } = projectLogoStyles(project.logoTreatment);

  return (
    <article className="min-w-0 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-shadow hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--color-accent)_25%,transparent)]">
      <div className="border-b border-[var(--color-border)] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <span className="font-mono text-xs text-[var(--color-text-muted)]">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 font-display text-2xl font-medium tracking-tight text-[var(--color-text)]">{project.name}</h3>
            <p className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.context}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs font-medium text-[var(--color-text)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
            {project.liveUrl && activeLogo ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-1 inline-flex overflow-hidden rounded-md border border-[var(--color-border)] ${logoWrapClass}`}
                title={`Open ${project.name}`}
              >
                <div className="relative h-11 w-24">
                  <Image
                    src={activeLogo}
                    alt={`${project.name} logo`}
                    fill
                    unoptimized
                    className={logoImgClass}
                    onError={() => setLogoFailed(true)}
                  />
                </div>
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline"
              >
                Visit site
                <IconChevronRight className="opacity-80" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-text-muted)] underline-offset-4 hover:text-[var(--color-text)] hover:underline"
              >
                View code
                <IconChevronRight className="opacity-80" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="p-6 sm:px-8 sm:pb-8 sm:pt-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
        >
          <span>{open ? "Hide the story" : "How I approached it"}</span>
          <IconChevronDown
            className={`text-[var(--color-text-muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div id={panelId} hidden={!open} className={open ? "mt-6 block" : "hidden"}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">What was wrong</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">What we did</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.solution}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--color-border)] pt-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">What changed</h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text)]">{project.outcome}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
