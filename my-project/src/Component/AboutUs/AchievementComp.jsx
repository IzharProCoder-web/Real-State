const AchievementComp = () => {
  const achievementData = [
    {
      title: "3+ Years of Excellence",
      text: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
    },
    {
      title: "Happy Clients",
      text: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
      title: "Industry Recognition",
      text: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full h-auto px-4 py-6 my-3 rounded-lg shadow-md md:px-10">
      <div className="ml-9">
        <img
          src="/img/Abstract Design.png"
          alt="Abstract Design"
          className="w-16 mb-2 "
        />
        <h1 className="text-3xl font-semibold py-1 md:text-4xl lg:text-5xl">
          Our Achievements
        </h1>
        <p className="text-[#999999] text-base md:text-lg">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>

      <div className="flex flex-col mt-7 gap-6 w-full md:flex-row md:justify-center md:items-stretch">
        {achievementData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col p-5 rounded-lg shadow-sm text-white w-full border-[5px] border-[#262626] md:w-1/3 lg:w-[400px]"
          >
            <div className="flex items-center gap-x-2">
              <h1 className="text-2xl font-semibold pb-4 md:text-3xl lg:text-4xl">
                {data.title}
              </h1>
            </div>
            <p className="text-sm text-[#999] md:text-base">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementComp;