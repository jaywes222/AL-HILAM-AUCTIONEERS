import React, { useState, useEffect, useCallback } from "react";
import heroImage from "/src/assets/images/hero-section/cars.jpg";
import heroImage2 from "/src/assets/images/hero-section/properties.jpg";

const SLIDES = [
  { src: heroImage, alt: "Motor Vehicles" },
  { src: heroImage2, alt: "Properties" },
  { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&q=80", alt: "Motor Vehicles" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* ───────── Mouse parallax ───────── */
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 18,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ───────── Autoplay ───────── */
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const pillars = [
    {
      title: "Persuasiveness & Persistence",
      body: "The secret behind our high success rate and outstanding client satisfaction.",
    },
    {
      title: "Fast-Track Recovery",
      body: "Cost-effective results delivered with speed and precision.",
    },
    {
      title: "Trace, Cleanse & Repossess",
      body: "End-to-end handling of complex and hard-to-find cases.",
    },
  ];

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden">

      {/* ───────── Carousel images ───────── */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === current ? 1 : 0,
              transform: `scale(1.04) translate(${mouse.x * 0.4}px, ${mouse.y * 0.4}px)`,
              transition: "opacity 1s ease-in-out, transform 0.5s ease-out",
            }}
          />
        ))}
      </div>

      {/* ───────── Light overlay – lets photos breathe ───────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-hero/40 via-transparent to-blue-hero/50" />

      {/* ───────── blue glow orb ───────── */}
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* ───────── BOTTOM: pillar cards + Kenya tag ───────── */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-4 pb-16 sm:pb-20">
        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="rounded-xl p-4 text-center backdrop-blur"
                style={{
                  background: "rgba(15,23,42,0.55)",
                  border: "1px solid rgba(96,165,250,0.15)",
                }}
              >
                <h3 className="text-white text-sm font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-xs mt-1.5">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── Dots navigation ───────── */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: i === current ? "28px" : "8px",
              background: i === current
                ? "linear-gradient(90deg, #ADD8E6, #7B6CF6)"
                : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* ───────── Animations ───────── */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: .2; }
          50%      { opacity: .45; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}