"use client";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // seconds
  className?: string;
  outline?: boolean;
}

export default function MarqueeRibbon({
  items,
  direction = "left",
  speed = 28,
  className = "",
  outline = false,
}: MarqueeProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden whitespace-nowrap py-3.5 border-y select-none ${className}`}
    >
      <div
        className={`inline-flex items-center gap-8 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="inline-flex items-center gap-8">
            <span
              className={`font-display text-sm sm:text-base tracking-[0.2em] uppercase font-extrabold ${
                outline
                  ? "text-transparent stroke-cyan"
                  : "text-white hover:text-impulse-cyan transition-colors"
              }`}
              style={
                outline
                  ? { WebkitTextStroke: "1px rgba(34, 179, 184, 0.6)" }
                  : undefined
              }
            >
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-impulse-cyan shadow-[0_0_8px_#3FE3E8]" />
          </div>
        ))}
      </div>
    </div>
  );
}
