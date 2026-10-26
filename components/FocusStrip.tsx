import { focus } from "@/lib/data";
import { Reveal } from "./Reveal";

export function FocusStrip() {
  return (
    <div className="container-page">
      <Reveal>
        <dl className="grid grid-cols-1 gap-y-5 border-t border-line py-5 sm:grid-cols-3 sm:gap-y-0 md:py-[22px]">
          {focus.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col gap-1.5 ${
                i > 0 ? "sm:border-l sm:border-line sm:pl-8 lg:pl-[min(10%,56px)]" : ""
              }`}
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute md:text-[9px]">
                {f.label}
              </dt>
              <dd className="text-[14px] text-ink md:text-[12.5px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
