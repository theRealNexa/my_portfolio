import { links, projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { ArrowLink, SectionLabel } from "./ui";

export function SelectedWork() {
  return (
    <section id="work" className="container-page pt-9 md:pt-10">
      <Reveal>
        <div className="mb-6 flex items-center gap-4 md:mb-7">
          <SectionLabel>02. Selected Work</SectionLabel>
          <span aria-hidden className="h-px flex-1 bg-line" />
          <ArrowLink href={links.allProjects} className="shrink-0 !text-sub">
            View all projects
          </ArrowLink>
        </div>
      </Reveal>

      <div className="grid gap-[22px] md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
