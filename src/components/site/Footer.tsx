import Link from "next/link";
import { site } from "@/config/site";
import { Logo } from "@/components/site/Logo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-sm opacity-80">
          <span className="font-medium">WCAG 2.2 AA</span> – barrierearme Umsetzung für Gemeinden &amp; Bildung. {" "}
          <Link className="underline underline-offset-4" href="/accessibility">
            Mehr zur Barrierefreiheit
          </Link>
        </div>
        <div className="mt-6" />
        <div className="flex items-center justify-between gap-6">
          <Logo size={40} showText={false} />
          <div className="text-xs text-white/55">
            © {new Date().getFullYear()} Baumgartner Digital Infrastructure · Schweiz
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-4 text-sm">
          <Link className="text-white/70 hover:text-white transition" href="/company">
            Company
          </Link>
          <Link className="text-white/70 hover:text-white transition" href="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/55">
        <a className="underline hover:text-white/80" href="/impressum">Impressum</a>
        <a className="underline hover:text-white/80" href="/datenschutz">Datenschutz</a>
      </div>
    </footer>
  );
}
