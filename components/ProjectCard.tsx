import Image from "next/image";
import type { Project } from "@/lib/data";
import { ProjectMockup } from "./ProjectMockup";
import { ArrowLink } from "./ui";

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-card transition-[transform,border-color] duration-200 ease-out md:hover:-translate-y-0.5 md:hover:border-mute/60">
      <div className="relative aspect-[1.55/1] overflow-hidden border-b border-line bg-wash">
        <div className="h-full w-full transition-[filter] duration-200 group-hover/card:brightness-[1.02] group-hover/card:contrast-[1.02]">
          {p.image ? (
            <Image
              src={p.image}
              alt={`${p.name} ${p.tagline} screenshot`}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <ProjectMockup variant={p.mockup} label={`${p.name} ${p.tagline} — ${p.imageNote.toLowerCase()}`} />
          )}
        </div>
        {p.featured && (
          <span className="absolute right-3 top-3 rounded-full border border-accent/50 bg-white/90 px-2 py-0.5 text-[10px] font-medium leading-none text-accent md:text-[9px]">
            Featured
          </span>
        )}
        {!p.image && (
          <span className="absolute bottom-2.5 left-3 rounded bg-white/85 px-1.5 py-0.5 font-mono text-[8px] uppercase leading-none tracking-[0.12em] text-[#727783]">
            {p.imageNote}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-[18px]">
        <h3 className="text-[16px] leading-[1.4] md:text-[14px]">
          <span className="font-semibold">{p.name}</span>
          <span className="text-ink"> — {p.tagline}</span>
        </h3>
        <p className="mt-1 text-[12px] leading-[1.5] text-mute md:text-[10.5px]">{p.meta.join(" · ")}</p>
        <p className="mt-3 text-[14px] leading-[1.65] text-sub md:text-[11.5px]">{p.description}</p>
        <div className="mt-auto pt-5">
          <ArrowLink href={p.href}>View case study</ArrowLink>
        </div>
      </div>
    </article>
  );
}