
const AboutUsHeroComp = () => {
    const HeroData = [
        {
          number: "200+",
          text: "Happy Customers",
        },
        {
          number: "10k+",
          text: "Properties For Clients",
        },
        {
          number: "16+",
          text: "Years of Experience",
        },
      ]


  return (
    <section className="bg-[#1A1A1A] text-white w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    
    <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-8">
    <img src="/img/Abstract Design.png" alt="Abstract Design" className="w-[50px]" />

      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
        Our Journey
        </h1>
        <p className="text-[#999999] text-sm sm:text-base md:text-lg leading-relaxed">
        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we have expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
        </p>
      </div>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HeroData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-2 bg-[#262626] p-4 sm:p-6 rounded-lg"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{data.number}</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#CCCCCC]">{data.text}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
      <img src="/img/AboutUS-img.svg" alt="hero" className="w-full h-auto object-contain max-w-md lg:max-w-full" />
    </div>
  </section>
  )
}

export default AboutUsHeroComp



