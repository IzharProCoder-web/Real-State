import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaBed, FaBath, FaHome } from "react-icons/fa"

const FeaturedComponent = () => {
  const featuredData = [
    {
      img: "/img/Image.svg",
      title: "Seaside Serenity Villa",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
      bedrooms: "4-Bedrooms",
      washrooms: "3-Washrooms",
      villa: "Villa",
      price: "$550,000",
    },
    {
      img: "/img/Image-1.svg",
      title: "Metropolitan Haven",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
      bedrooms: "2-Bedrooms",
      washrooms: "2-Washrooms",
      villa: "Villa",
      price: "$550,000",
    },
    {
      img: "/img/Image-2.svg",
      title: "Rustic Retreat Cottage",
      description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community",
      bedrooms: "3-Bedrooms",
      washrooms: "3-Washrooms",
      villa: "Villa",
      price: "$550,000",
    },
  ]

  return (
    <section className="bg-[#1A1A1A] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
          <div className="md:w-1/2 lg:w-2/5 mb-6 md:mb-0">
            <img src="/img/Abstract Design.png" alt="Abstract Design" className="mb-4" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">Featured Properties</h3>
            <p className="text-[#999] text-base sm:text-lg mb-4 md:mb-0">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional
              homes and investments available through Estatein. Click View Details for more information.
            </p>
          </div>
          <div className="md:ml-auto">
            <button className="w-full md:w-auto bg-[#262626] text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:bg-[#333]">
              View All Properties
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredData.map((property, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-2xl bg-zinc-900 text-white border-2 border-[#262626]"
            >
              <div className="relative w-full pb-[66.67%] overflow-hidden rounded-t-2xl">
                <img
                  src={property.img || "/placeholder.svg"}
                  alt={property.title}
                  className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <h2 className="text-xl font-bold">{property.title}</h2>
                <p className="text-sm text-zinc-400">
                  {property.description}{" "}
                  <span className="text-purple-400 hover:underline cursor-pointer">Read More</span>
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white">
                  <div className="flex items-center gap-1">
                    <FaBed className="w-5 h-5 text-white" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath className="w-5 h-5 text-white" />
                    <span>{property.washrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHome className="w-5 h-5 text-white" />
                    <span>{property.villa}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div className="text-2xl font-bold">{property.price}</div>
                <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200">
                  View Property Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-[#262626] mt-8 pt-4">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p className="text-white text-center sm:text-left">01 of 60</p>
          </div>
          <div className="flex justify-center sm:justify-end gap-4">
            <button className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200">
              <IoIosArrowBack className="w-6 h-6 text-white" />
            </button>
            <button className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200">
              <IoIosArrowForward className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedComponent

