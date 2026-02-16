export const tokens = {
  brand: {
    name: "Baumgartner Digital Infrastructure",
    short: "BDI",
  },
  radius: {
    card: "rounded-2xl",
    hero: "rounded-3xl",
    pill: "rounded-full",
    button: "rounded-2xl",
  },
  border: {
    subtle: "border border-white/10",
    strong: "border border-white/15",
  },
  surface: {
    base: "bg-[#0b1220] text-white",
    panel: "bg-white/5",
    panelHover: "hover:bg-white/7",
  },
  text: {
    muted: "text-white/70",
    soft: "text-white/80",
  },
  shadow: {
    soft: "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.35)]",
  },
} as const;
