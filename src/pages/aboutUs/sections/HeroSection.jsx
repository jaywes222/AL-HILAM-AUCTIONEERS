import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import heroImage from "/src/assets/images/hero-section/auction.jpg";

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="
        relative w-full
        min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]
        flex items-center justify-center
        pt-[130px] sm:pt-[150px] md:pt-[170px] lg:pt-[190px]
        pb-[70px]
        overflow-hidden
        scroll-mt-[140px]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-blue-tint to-secondary/80" />

        {/* Orb – purple accent */}
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />

        {/* Orb – soft blue */}
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-soft/15 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(47,72,88,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(47,72,88,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-28 z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* TEXT */}
          <div className="flex flex-col gap-6 md:gap-7">
            <div className="inline-flex">
              <div className="px-5 py-2 rounded-full bg-white/50 border border-primary/30">
                <span className="text-xs md:text-sm font-semibold text-blue-dark uppercase tracking-wide">
                  About Al-Hilam Auctioneers
                </span>
              </div>
            </div>

            <h1 className="font-bold leading-[1.1] text-4xl sm:text-5xl lg:text-6xl text-blue-dark">
              Trusted{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-soft to-primary bg-clip-text">
                auctioneers
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-purple-soft bg-clip-text">
                asset recovery
              </span>{" "}
              specialists
            </h1>

            <div className="max-w-xl space-y-4">
              <p className="text-lg lg:text-xl text-grey-darker leading-relaxed">
                Al-Hilam Auctioneers is a professional auctioneering and asset
                recovery firm delivering{" "}
                <span className="font-medium text-blue-dark">
                  transparent, compliant, and results-driven
                </span>{" "}
                solutions.
              </p>
              <p className="text-base lg:text-lg text-grey-neutral">
                We partner with financial institutions, corporates, and
                individuals across Kenya to recover value efficiently and with
                integrity.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            {/* Corner accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-primary/35 rounded-tl-3xl animate-float" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-blue-soft/40 rounded-br-3xl animate-float" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden bg-white/60 p-2 shadow-2xl">
              <div className="rounded-2xl overflow-hidden">
                <LazyLoadImage
                  effect="blur"
                  src={heroImage}
                  alt="Al-Hilam Auctioneers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
