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
    <article className="group min-w-0 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_70px_-42px_color-mix(in_oklch,var(--color-accent)_65%,transparent)]">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.name} preview`}
            fill
            unoptimized
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
      </div>
      <div className="border-b border-[var(--color-border)] p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <span className="font-mono text-xs text-[var(--color-text-muted)]">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 font-display text-2xl font-medium tracking-tight text-[var(--color-text)]">{project.name}</h3>
            <p className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.context}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs font-medium text-[var(--color-text)] transition-colors group-hover:border-[var(--color-accent)]/35"
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
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)]"
                >
                  Live Demo
                  <IconChevronRight className="opacity-80" />
                </a>
              ) : null}
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
              >
                {open ? "Hide Case Study" : "Case Study"}
                <IconChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
                >
                  GitHub
                  <IconChevronRight className="opacity-80" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:px-8 sm:pb-8 sm:pt-0">
        <div id={panelId} hidden={!open} className={open ? "mt-6 block" : "hidden"}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">What was wrong</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">What I Did</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.solution}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--color-border)] pt-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">What changed</h4>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text)]">{project.outcome}</p>
          </div>
          {project.proofPoints?.length ? (
            <div className="mt-8 border-t border-[var(--color-border)] pt-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Proof points
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {project.proofPoints.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
