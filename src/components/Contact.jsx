"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";

/** CUSTOMIZE: Formspree endpoint or replace with your API / server action. */
const FORMSPREE_ACTION = "https://formspree.io/f/YOUR_FORM_ID";

export function Contact() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <SectionShell id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something serious."
            description="If you’re hiring a tech lead or need a senior full stack partner for SaaS, integrations, or performance critical web work, send a concise brief. I respond to real opportunities, not vague intros."
          />
          <Reveal>
            <div className="mt-8 space-y-5 text-sm text-[var(--color-text-muted)]">
              <p>
                <span className="font-medium text-[var(--color-text)]">Email</span>
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </p>
              {site.linkedin ? (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>

        <Reveal className="delay-75">
          <form
            onSubmit={onSubmit}
            className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  What you need
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
                  placeholder="Role, stack, timeline, and what success looks like in two or three sentences."
                />
              </div>
            </div>
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-[var(--radius-md)] bg-[var(--color-accent)] py-3 text-sm font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "ok" ? (
              <p className="mt-3 text-center text-sm text-[var(--color-accent)]" role="status">
                Received. I’ll get back to you shortly.
              </p>
            ) : null}
            {status === "err" ? (
              <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400" role="alert">
                Form not configured or network error. Email {site.email} directly.
              </p>
            ) : null}
            <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
              Replace <code className="rounded bg-[var(--color-surface)] px-1">FORMSPREE_ACTION</code> in{" "}
              <code className="rounded bg-[var(--color-surface)] px-1">Contact.jsx</code> before production.
            </p>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
