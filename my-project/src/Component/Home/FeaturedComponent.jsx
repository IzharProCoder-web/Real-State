import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaBed, FaBath, FaHome, } from "react-icons/fa"

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
    <section className="bg-[#1A1A1A] text-white p-14 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between  ">
          <div className="md:w-1/2 lg:w-2/5">
            <img src="/img/Abstract Design.png" />
            <h3 className="xl:text-[48px] font-normal mb-4">
              Featured Properties
            </h3>
            <p className="text-[#999] text-[18px] mb-4 md:mb-0">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click View Details for more
              information.
            </p>
          </div>
          <div className="md:ml-auto">
            <button className="bg-[#262626]  text-white font-medium py-2 px-6 rounded-md transition duration-300">
              View All Properties
            </button>
          </div>
        </div>

      
        <div className="mt-8 p-4 sm:p-6 md:p-8 ">
  <div className="container mx-auto">
    <div className="flex flex-wrap gap-6 md:gap-8">
      {featuredData.map((property, index) => (
        <div
          key={index}
          className={`w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-zinc-900 text-white border-2 border-[#262626]  ${
            index > 0 ? "hidden md:block" : ""
          }`}
        >
          <div className="relative w-full overflow-hidden rounded-t-2xl">
            <img
              src={property.img || "/placeholder.svg"}
              alt={property.title}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">{property.title}</h2>
            <p className="text-sm text-zinc-400">
              {property.description}{" "}
              <span className="text-purple-400 hover:underline cursor-pointer">
                Read More
              </span>
            </p>
            <div className="flex md:flex-row flex-col md:items-center gap-4 text-sm text-white">
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
          <div className="p-6 pt-0 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="text-2xl font-bold">{property.price}</div>
            <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200">
              View Property Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


 <div className="flex md:flex-row justify-between flex-col items-center border-t-2 border-[#262626]">
 <div className=" w-full mt-4 py-2">
        <p className=" text-white">01 of 60</p>
      </div>
      <div className="flex justify-between w-24 py-2">
        <button className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center">
          <IoIosArrowBack className="w-6 h-6 text-white" />
        </button>
        <button className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center">
          <IoIosArrowForward className="w-6 h-6 text-white" />
        </button>
      </div>
      
    </div>


      </div>
    </section>
  );
};

export default FeaturedComponent;
