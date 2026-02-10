/* eslint-disable react/prop-types */
import { whatWeDoData } from "./data";

function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="relative max-w-7xl w-full mx-auto flex flex-col items-center gap-8 md:gap-10
                 pt-[160px] sm:pt-[180px] md:pt-[200px] lg:pt-[220px] pb-12 md:pb-16
                 scroll-mt-[160px] sm:scroll-mt-[180px] md:scroll-mt-[200px] lg:scroll-mt-[220px]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 px-4">
        <h3 className="w-full max-w-3xl text-center font-bold text-xl md:text-3xl lg:text-4xl leading-tight text-blue-dark">
          Getting into{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-blue-dark bg-clip-text">
            asset recovery
          </span>{" "}
          can be complex, but it doesn't have to be.
        </h3>

        <p className="text-blue-dark/70 text-center max-w-2xl text-sm md:text-base">
          Discover our comprehensive solutions designed to simplify your asset recovery journey
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-8 gap-6 md:gap-8">
        {whatWeDoData.map((card, i) => (
          <WhatWeDoCard key={card.id} index={i} card={card} />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function WhatWeDoCard({ card, index }) {
  const { title, description } = card;

  return (
    <div
      className="group relative bg-secondary/30 border-2 border-blue-dark/20 rounded-2xl p-6 flex flex-col justify-between gap-4
                 shadow-lg shadow-blue-dark/10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30"
      style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` }}
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h4
          className={`font-bold capitalize text-lg md:text-xl text-transparent bg-gradient-to-r ${
            index % 2 === 0
              ? "from-primary to-blue-dark"
              : "from-blue-dark to-primary"
          } bg-clip-text`}
        >
          {title}
        </h4>

        {/* Description */}
        <p className="text-blue-dark/70 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Decorative Line */}
        <div
          className={`w-12 h-0.5 rounded-full ${
            index % 2 === 0
              ? "bg-gradient-to-r from-primary to-blue-dark"
              : "bg-gradient-to-r from-blue-dark to-primary"
          }`}
        />
      </div>
    </div>
  );
}

export default WhatWeDoSection;
