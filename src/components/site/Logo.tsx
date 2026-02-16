import Link from "next/link";
import Image from "next/image";

export function Logo({
  size = 44,
  showText = true,
}: {
  size?: number;
  showText?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div
        className="rounded-2xl border border-white/10 bg-white/5 p-1 shadow-[0_0_40px_rgba(0,180,255,0.12)]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="Baumgartner Development"
          width={size}
          height={size}
          className="rounded-xl object-cover"
          priority
        />
      </div>

      {showText ? (
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white/90 group-hover:text-white">
            Baumgartner
          </div>
          <div className="text-xs text-white/60 group-hover:text-white/75">
            Digital Infrastructure
          </div>
        </div>
      ) : null}
    </Link>
  );
}
