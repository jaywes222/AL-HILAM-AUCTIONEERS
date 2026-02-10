function MissionVisionSection() {
  const cards = [
    {
      title: "Our Mission",
      description: `We strive to provide the best quality and unique services to our clients without harming relationships with their customers.
      We commit to delivering assignments with minimum time, cost, and absolute honesty.`,
      gradient: "from-blue-soft to-primary",
      line: "from-primary to-blue-soft",
    },
    {
      title: "Our Vision",
      description: `To be the preferred motor vehicle recovery and investigation company in Kenya, offering services
      fully compliant with the laws of Kenya.`,
      gradient: "from-primary to-purple-soft",
      line: "from-blue-soft to-primary",
    },
  ];

  return (
    <section className="relative max-w-7xl w-full mx-auto py-12 md:py-16 px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <h3 className="text-center font-bold text-xl md:text-3xl lg:text-4xl text-blue-dark">
          Our guiding{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-soft to-primary bg-clip-text">
            purpose
          </span>{" "}
          and direction
        </h3>
        <p className="text-grey-darker text-center max-w-2xl text-sm md:text-base">
          What drives us and where we are headed as Al-Hilam Auctioneers
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              group relative bg-secondary/60 border border-blue-soft/40
              rounded-2xl p-6 md:p-8
              shadow-lg transition-all duration-500
              hover:shadow-xl hover:border-primary/40
            "
            style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s both` }}
          >
            <div className="flex flex-col gap-4">
              <h4
                className={`font-bold text-lg md:text-xl text-transparent bg-gradient-to-r ${card.gradient} bg-clip-text`}
              >
                {card.title}
              </h4>

              <p className="text-grey-darker text-sm md:text-base leading-relaxed">
                {card.description}
              </p>

              <div
                className={`w-12 h-0.5 rounded-full bg-gradient-to-r ${card.line}`}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default MissionVisionSection;
