import  { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaBed, FaBath, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertiesDiscoverComp = () => {
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
    {
      img: "/img/Image.svg",
      title: "Seaside Serenity Villa 2",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
      bedrooms: "4-Bedrooms",
      washrooms: "3-Washrooms",
      villa: "Villa",
      price: "$550,000",
    },
    {
      img: "/img/Image-1.svg",
      title: "Metropolitan Haven 2",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
      bedrooms: "2-Bedrooms",
      washrooms: "2-Washrooms",
      villa: "Villa",
      price: "$550,000",
    },
    {
      img: "/img/Image-2.svg",
      title: "Rustic Retreat Cottage 2",
      description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community",
      bedrooms: "3-Bedrooms",
      washrooms: "3-Washrooms",
      villa: "Villa",
      price: "$550,000",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredData.length / cardsPerSlide));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(featuredData.length / cardsPerSlide)) % Math.ceil(featuredData.length / cardsPerSlide));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
          <div className="pr-[20px] mb-6 md:mb-0">
            <img src="/img/Abstract Design.png" alt="Abstract Design" className="mb-4" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">Discover a World of Possibilities</h3>
            <p className="text-[#999] text-base sm:text-lg mb-4 md:mb-0">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional
              homes and investments available through Estatein. Click View Details for more information.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 gap-6"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerSlide)}%)` }}
          >
            {featuredData.map((property, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: `calc(${100 / cardsPerSlide}% - 1rem)` }}
              >
                <div className="w-full overflow-hidden rounded-2xl bg-zinc-900 text-white border-2 border-[#262626]">
                  <div className="relative w-full pb-[66.67%] overflow-hidden rounded-t-2xl">
                    <Link to="/propertyDetail">
                      <img
                        src={property.img || "/placeholder.svg"}
                        alt={property.title}
                        className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <div className="p-4 sm:p-6 space-y-4">
                    <h2 className="text-xl font-bold">{property.title}</h2>
                    <p className="text-sm text-zinc-400">
                      {property.description}{" "}
                      <Link to="/propertyDetail" className="text-white hover:underline cursor-pointer">Read More</Link>
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
                    <Link to="/propertyDetail">
                      <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200">
                        View Property Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-[#262626] mt-8 pt-4">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p className="text-white text-center sm:text-left">
              {currentSlide + 1} of {Math.ceil(featuredData.length / cardsPerSlide)}
            </p>
          </div>
          <div className="flex justify-center sm:justify-end gap-4">
            <button
              className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200"
              onClick={handlePrev}
            >
              <IoIosArrowBack className="w-6 h-6 text-white" />
            </button>
            <button
              className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200"
              onClick={handleNext}
            >
              <IoIosArrowForward className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesDiscoverComp;