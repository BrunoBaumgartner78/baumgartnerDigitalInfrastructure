"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "./nav";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition"
        aria-expanded={open}
        aria-label="Menü öffnen"
      >
        {open ? "Schliessen" : "Menü"}
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-[72px] border-b border-white/10 bg-[var(--bg)]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-2">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "px-3 py-2 rounded-xl text-sm border transition",
                    active
                      ? "bg-white/10 border-white/15"
                      : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10 text-white/85"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
