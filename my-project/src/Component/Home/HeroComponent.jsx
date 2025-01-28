import { useNavigate } from "react-router-dom"

const HeroComponent = () => {
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

  const navigate = useNavigate()

  return (
    <section className="bg-[#1A1A1A] text-white w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-12 pb-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
      <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-[#999999] text-sm sm:text-base md:text-lg leading-relaxed">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches
            your dreams.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/about")}
            className="rounded-lg border border-[#262626] text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 hover:bg-[#262626] transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </button>
          <button
            onClick={() => navigate("/properties")}
            className="rounded-lg bg-[#703BF7] text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 border border-[#703BF7] hover:bg-[#5a2dc7] transition-all duration-300 w-full sm:w-auto"
          >
            Browse Properties
          </button>
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
        <img src="/img/Container.svg" alt="hero" className="w-full h-auto object-contain max-w-md lg:max-w-full" />
      </div>


      <div className=" w-[175px] h-[175px] lg:top-[50px] lg:right-[40%] top-[90%] left-0 rounded-full absolute hidden">
      <img src="/img/Sub Container.svg" />
        
      </div>
    </section>
  )
}

export default HeroComponent

