import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm uppercase tracking-wider opacity-70">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Diese Seite wurde nicht gefunden.
        </h1>
        <p className="mt-4 text-base opacity-80">
          Der Link ist eventuell falsch oder die Seite wurde verschoben.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl px-5 py-2.5 font-medium shadow-sm border border-white/10 hover:opacity-90"
          >
            Zur Startseite
          </Link>
          <Link
            href="/contact"
            className="rounded-xl px-5 py-2.5 font-medium shadow-sm border border-white/10 hover:opacity-90"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </main>
  );
}
