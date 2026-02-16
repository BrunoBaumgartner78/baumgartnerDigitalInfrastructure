export default function TechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(600px_circle_at_35%_20%,black,transparent_70%)]" />
      {/* Soft glows */}
      <div className="absolute -top-24 left-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -top-16 right-[-160px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
    </div>
  );
}
