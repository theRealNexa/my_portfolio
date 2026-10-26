import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { site, social } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  github: <Github aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />,
  linkedin: <Linkedin aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />,
  x: <XIcon className="h-3 w-3" />,
};

export function Contact() {
  return (
    <section id="contact" className="container-page pt-10 md:pt-[34px]">
      <Reveal>
        <div className="rounded-xl border border-line bg-card/40 p-6 md:p-[26px]">
          <SectionLabel>05. Contact</SectionLabel>

          <div className="mt-6 grid gap-8 lg:grid-cols-[35fr_30fr_20fr_15fr] lg:gap-0">
            <div className="lg:pr-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute md:text-[9px]">
                Let&apos;s connect
              </p>
              <h2 className="heading-serif mt-3 text-[clamp(1.75rem,2.2vw,2rem)] leading-[1.1]">
                Have a project in mind?
                <br /> Let&apos;s talk.
              </h2>
            </div>

            <div className="lg:border-l lg:border-line lg:px-8">
              <p className="max-w-[300px] text-[14px] leading-[1.7] text-sub md:text-[11.5px]">
                I&apos;m open to opportunities, freelance work and collaborations. Feel free to reach out via
                email or connect through my socials.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-[13px] text-ink underline-offset-4 hover:underline md:min-h-0 md:text-[11px]"
              >
                <Mail aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
                {site.email}
              </a>
            </div>

            <ul className="flex flex-col gap-1 lg:border-l lg:border-line lg:px-8 lg:pt-1">
              {social.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 text-[13px] text-sub transition-colors duration-200 hover:text-ink md:min-h-9 md:text-[11px]"
                  >
                    {icons[s.id]}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-2.5 lg:border-l lg:border-line lg:pl-8 lg:pt-2">
              <p className="text-[13px] leading-[1.6] text-sub md:text-[10.5px]">{site.availability}</p>
              <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
