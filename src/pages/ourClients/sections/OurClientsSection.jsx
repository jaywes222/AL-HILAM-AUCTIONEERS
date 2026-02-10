import React from "react";
import { clients } from "./data";

function OurClientsSection() {
  return (
    <section
      id="partners"
      className="relative pt-[180px] sm:pt-[200px] md:pt-[220px] lg:pt-[240px] pb-16 scroll-mt-[180px] sm:scroll-mt-[200px] md:scroll-mt-[220px] lg:scroll-mt-[240px] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-secondary/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12 md:mb-16">
          <div
            className="inline-flex items-center justify-center"
            style={{ animation: "fadeInUp 0.6s ease-out" }}
          >
            <div className="group relative px-6 py-2 rounded-full bg-secondary/20 border border-primary/25">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <span className="relative text-sm font-semibold text-transparent bg-gradient-to-r from-primary to-blue-dark bg-clip-text flex items-center gap-2">
                Trusted Clientele
              </span>
            </div>
          </div>

          <div
            className="w-full flex flex-row items-center gap-4 md:gap-6"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-dark/20 to-blue-dark/20"></div>
            <h2 className="text-center text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary via-blue-dark to-primary bg-clip-text px-4">
              Our Clients
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-dark/20 to-blue-dark/20"></div>
          </div>

          <p
            className="text-blue-dark/70 text-center max-w-2xl text-sm md:text-base"
            style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
          >
            Building success through strategic collaborations with industry leaders
          </p>
        </div>

        {/* Partners Grid */}
        <div className="relative" style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {clients.map(({ id, img, name }, index) => (
              <ClientCard key={id} img={img} name={name} index={index} />
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4">
              <div className="flex gap-4 pb-4 min-w-max">
                {clients.map(({ id, img, name }, index) => (
                  <ClientCard key={id} img={img} name={name} index={index} mobile />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" style={{ animation: "fadeInUp 0.6s ease-out 1s both" }}>
          {[
            { icon: "🤝", label: "Strategic Partners", value: clients.length },
            { icon: "🌍", label: "National Reach", value: "10+ Counties" },
            { icon: "⭐", label: "Partnership Years", value: "5+ Combined" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-secondary/30 border border-blue-dark/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-dark bg-clip-text">{stat.value}</div>
                  <div className="text-sm text-blue-dark/70 mt-1">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function ClientCard({ img, name, index, mobile }) {
  return (
    <div
      className={`group relative ${mobile ? "flex-shrink-0 w-40 h-28" : ""}`}
      style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.05}s both` }}
    >
      <div className="relative h-full w-full rounded-2xl bg-secondary/30 border border-blue-dark/20 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
        <div className="relative h-full w-full flex items-center justify-center p-6">
          <img
            src={img}
            alt={name}
            className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default OurClientsSection;
