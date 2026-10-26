import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const isExternal = (href: string) => /^https?:\/\//.test(href);

const ext = (href: string) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

/** Pill button. Primary = filled, outline = bordered. */
export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  small = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  arrow?: boolean;
  small?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 ";
  const size = small
    ? "h-9 px-4 text-[11px] md:text-[10px]"
    : "h-11 px-6 text-[13px] md:h-10 md:px-[22px] md:text-[11.5px]";
  const look =
    variant === "primary"
      ? "bg-btn text-btnfg hover:opacity-85"
      : "border border-mute/50 text-ink hover:border-ink/60 hover:bg-ink/[0.03]";
  return (
    <a href={href} {...ext(href)} className={`${base}${size} ${look} ${className}`}>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}

/** Small text link with an arrow that nudges on hover. */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...ext(href)}
      className={`group inline-flex items-center gap-1.5 text-[12px] font-medium text-ink md:text-[10.5px] ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`label-mono ${className}`}>{children}</p>;
}

/** Round/rounded container for a small outlined icon. */
export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-card text-ink/70">
      {children}
    </span>
  );
}
