import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="container-page flex items-center justify-between gap-4 py-8 md:py-6">
      <div className="flex items-center gap-4">
        <span className="text-[16px] font-medium tracking-tight">{site.initials}</span>
        <span className="text-[10px] uppercase tracking-[0.08em] text-mute md:text-[9px]">{site.name}</span>
      </div>
      <p className="text-right text-[10px] text-mute md:text-[9px]">Built with Next.js · {site.year}</p>
    </footer>
  );
}
