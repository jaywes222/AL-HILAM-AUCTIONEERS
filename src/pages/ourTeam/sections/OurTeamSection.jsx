/* eslint-disable no-underscore-dangle */
import { LeadershipData } from "./data";

function OurTeamSection() {
  return (
    <main className="relative w-full min-h-screen bg-secondary/30 pt-24 md:pt-32">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-7xl w-full mx-auto px-4 md:px-8 py-12 md:py-16 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-dark">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-dark bg-clip-text">
              Repossession Agents
            </span>
          </h1>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {LeadershipData.map(({ id, name, title, image, number, linkedin, twitter }, idx) => (
            <div
              key={id}
              className="group relative bg-secondary/30 border-2 border-blue-dark/20 rounded-2xl p-6 flex flex-col items-center gap-4 text-center
                         shadow-lg shadow-blue-dark/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + idx * 0.1}s both` }}
            >
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-dark/20 shadow-md"
              />
              <h4 className="text-lg md:text-xl font-bold text-blue-dark">{name}</h4>
              <p className="text-sm md:text-base text-blue-dark/70">{title}</p>

              {/* Number / Agents */}
              {number && (
                <div className="text-blue-dark font-bold text-lg md:text-xl mt-1">{number}</div>
              )}

              {/* Social Links */}
              <div className="flex gap-3 mt-2">
                {linkedin?.href && (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-dark"
                  >
                    LinkedIn
                  </a>
                )}
                {twitter?.href && (
                  <a
                    href={twitter.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-dark/70 hover:text-blue-dark"
                  >
                    Twitter
                  </a>
                )}
              </div>

              <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-primary to-blue-dark mt-2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

export default OurTeamSection;
