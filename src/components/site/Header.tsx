"use client";

import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { brand } from "@/config/brand";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const nav = [
  { href: brand.links.start, label: "Start" },
  { href: brand.links.solutions, label: "Solutions" },
  { href: brand.links.projects, label: "Projects" },
  { href: brand.links.company, label: "Company" },
  { href: brand.links.contact, label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-2">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm text-white/75 hover:text-white",
                "hover:bg-white/5 transition border border-transparent hover:border-white/10"
              )}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          href={brand.links.contact}
          className={cn(
            "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium",
            "border border-white/14 bg-white/8 hover:bg-white/12 transition",
            "shadow-[var(--shadow-card)]"
          )}
        >
          Projekt besprechen
        </Link>
      </Container>
    </header>
  );
}

