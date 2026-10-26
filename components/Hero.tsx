import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/lib/data";
import { Button } from "./ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="home" className="container-page pb-10 pt-4 md:pb-12 md:pt-3">
      <div className="grid items-center gap-8 lg:grid-cols-[52fr_48fr] lg:gap-14">
        <div>
          <p className="enter label-mono mb-5 md:mb-6" style={d(0)}>
            Hi, I&apos;m {site.name}
          </p>

          <h1
            className="enter heading-serif text-[clamp(2.5rem,4.1vw,3.375rem)] leading-[1.02] tracking-[-0.01em] max-md:text-[2.6rem]"
            style={d(80)}
          >
            I build software that
            <br className="hidden sm:block" /> solves <em className="italic">real</em> problems.
          </h1>

          <p className="enter mt-6 max-w-[390px] text-[15px] leading-[1.7] text-sub md:text-[13px]" style={d(160)}>
            I&apos;m a Computer Science student and developer interested in building useful, reliable web
            products — from thoughtful user interfaces to the systems that power them.
          </p>

          <div className="enter mt-[22px] flex flex-wrap gap-3" style={d(240)}>
            <Button href="#work" arrow>
              Explore my work
            </Button>
            <Button href="#about" variant="outline">
              About me
            </Button>
          </div>
        </div>

        <div className="enter-fade relative" style={d(300)}>
          <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-[13px] bg-wash">
            <Image
              src="/images/hero-architecture.jpg"
              alt="Concrete building with strong geometric planes against a muted blue-grey sky"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <p className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/85">
              Build / Learn / Improve
            </p>
            <div className="absolute bottom-5 right-5 text-right font-mono text-[9px] uppercase leading-[1.7] tracking-[0.16em] text-white/90">
              <p>Software Engineer</p>
              <p className="flex items-center justify-end gap-1.5">
                LASU · 3rd Year
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
