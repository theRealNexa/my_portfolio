import Image from "next/image";
import { links, skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowLink, IconBadge, SectionLabel } from "./ui";

export function About() {
  return (
    <section id="about" className="container-page pt-10 md:pt-[30px]">
      <Reveal>
        <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-[31fr_39fr_30fr] lg:gap-x-10">
          <div className="relative aspect-[1.25/1] w-full overflow-hidden rounded-xl bg-wash md:max-lg:col-span-2">
            <Image
              src="/images/workspace.jpg"
              alt="Minimal desk with a laptop, notebook and bottle in soft natural light"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
            <p
              className="absolute left-5 top-5 font-mono text-[9px] uppercase leading-[1.9] tracking-[0.18em] text-white/85"
              aria-hidden
            >
              Curious
              <br />
              Consistent
              <br />
              Growing
            </p>
          </div>

          <div className="">
            <SectionLabel>04. About</SectionLabel>
            <h2 className="heading-serif mt-5 text-[clamp(1.75rem,2.2vw,2rem)] leading-[1.12]">More than just code.</h2>
            <p className="mt-4 max-w-[400px] text-[14px] leading-[1.75] text-sub md:text-[12px]">
              I&apos;m a Computer Science student at LASU, passionate about technology, creativity and the people who
              use what I build. I enjoy solving problems, learning new tools, and turning ideas into useful
              products — whether through code, design or both.
            </p>
            <ArrowLink href={links.moreAbout} className="mt-6">
              Read more about me
            </ArrowLink>
          </div>

          <ul className="flex flex-col justify-center gap-5 md:border-l md:border-line md:pl-8 lg:pl-10">
            {skills.map(({ icon: Icon, title, text }) => (
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
      </Reveal>
    </section>
  );
}
