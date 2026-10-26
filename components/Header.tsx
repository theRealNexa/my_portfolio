"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-bg/95">
      <div className="container-page flex h-16 items-center justify-between md:h-[68px]">
        <a href="#home" aria-label={`${site.name} — home`} className="text-[17px] font-medium tracking-tight">
          {site.initials}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((n) => {
              const on = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`relative block py-2 text-[11.5px] transition-colors duration-200 ${
                      on ? "text-ink" : "text-sub hover:text-ink"
                    }`}
                  >
                    {n.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-300 ${
                        on ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="h-4 w-4" /> : <Menu aria-hidden className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-y border-line bg-bg md:hidden">
          <ul className="container-page py-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex h-12 items-center text-[15px] ${active === n.id ? "text-ink" : "text-sub"}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
