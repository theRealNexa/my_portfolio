import { links, principles } from "@/lib/data";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Reveal } from "./Reveal";
import { Button, IconBadge, SectionLabel } from "./ui";

export function EngineeringApproach() {
  return (
    <section id="engineering" className="container-page pt-10 md:pt-[34px]">
      <Reveal>
        <div className="grid overflow-hidden rounded-xl border border-line bg-card/40 lg:grid-cols-[38fr_34fr_28fr]">
          {/* Left */}
          <div className="p-6 md:p-[26px] lg:p-[26px_28px_30px_26px]">
            <SectionLabel>03. Engineering Approach</SectionLabel>
            <h2 className="heading-serif mt-7 text-[clamp(1.75rem,2.1vw,1.9rem)] leading-[1.12]">
              Clean architecture.
              <br /> Thoughtful decisions.
            </h2>
            <p className="mt-5 max-w-[360px] text-[14px] leading-[1.7] text-sub md:text-[12px]">
              I design systems that are maintainable, secure and ready for growth. From API design to database
              structure, I focus on reliability, performance and long-term flexibility.
            </p>
            <Button href={links.technicalDetails} variant="outline" arrow small className="mt-6">
              See the technical details
            </Button>
          </div>

          {/* Centre: diagram */}
          <div className="flex items-center justify-center border-t border-line p-6 lg:border-l lg:border-t-0 lg:p-7">
            <ArchitectureDiagram />
          </div>

          {/* Right: principles */}
          <div className="border-t border-line p-6 lg:border-l lg:border-t-0 lg:p-[26px_28px]">
            <ul className="flex h-full flex-col justify-center gap-5">
              {principles.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-center gap-3.5">
                  <IconBadge>
                    <Icon aria-hidden className="h-[15px] w-[15px]" strokeWidth={1.5} />
                  </IconBadge>
                  <div>
                    <p className="text-[13px] font-medium leading-[1.4] md:text-[11.5px]">{title}</p>
                    <p className="text-[12px] leading-[1.5] text-mute md:text-[10.5px]">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
