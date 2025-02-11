import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const CardComponent = () => {
  const CardsData = [
    {
      img: "/img/Icon-1.svg",
      text: "Find Your Dream Home",
    },
    {
      img: "/img/Icon-2.svg",
      text: "Unlock Property Value",
    },
    {
      img: "/img/Icon-3.svg",
      text: "Effortless Property Management",
    },
    {
      img: "/img/Icon-4.svg",
      text: "Smart Investments, Informed Decisions",
    },
  ]

  return (
    <section className="w-full bg-[#1A1A1A] text-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {CardsData.map((data, index) => (
            <div
            
              key={index}
              className="relative flex flex-col items-center justify-center bg-[#252525] rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute top-4 right-4 ">
                <Link to="/properties" ><FiArrowUpRight className="w-5 h-5 text-white transform rotate-45" /></Link>
              </div>
              <img
                src={data.img || "/placeholder.svg"}
                alt="icon"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4"
              />
              <p className="text-center text-sm sm:text-base md:text-lg font-medium">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardComponent

