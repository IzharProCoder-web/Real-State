import  { useState, useEffect } from "react";

const ContactUsOfficeComp = () => {
  const contactUsOfficeCompData = [
    {
      type: "Main Headquarters",
      companyName: "123 Estatein Plaza, City Center, Metropolis",
      description:
        "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      email: "info@estatein.com",
      phone: "+1 (123) 456-7890",
      location: "Metropolis",
      btn: "Get Direction",
    },
    {
      type: "Main Headquarters",
      companyName: "456 Urban Avenue, Downtown District, Metropolis",
      description:
        "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      email: "info@estatein.com",
      phone: "+1 (123) 456-7890",
      location: "Metropolis",
      btn: "Get Direction",
    },
    {
      type: "Regional Office",
      companyName: "789 Suburb Lane, Suburbia, Metropolis",
      description:
        "Our regional office is designed to cater to clients in suburban areas. It offers the same level of service and expertise as our main headquarters.",
      email: "regional@estatein.com",
      phone: "+1 (123) 456-7891",
      location: "Suburbia",
      btn: "Get Direction",
    },
    {
      type: "International Office",
      companyName: "101 Global Street, International City, Metropolis",
      description:
        "Our international office serves clients from around the world. It is equipped to handle global real estate transactions with ease.",
      email: "international@estatein.com",
      phone: "+1 (123) 456-7892",
      location: "International City",
      btn: "Get Direction",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(1);
      } else {
        setCardsPerSlide(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(contactUsOfficeCompData.length / cardsPerSlide));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(contactUsOfficeCompData.length / cardsPerSlide)) % Math.ceil(contactUsOfficeCompData.length / cardsPerSlide));
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-[50px] mt-8 sm:mt-12 lg:mt-[50px]">
      <div className="text-center sm:text-left mb-8 sm:mb-12 lg:mb-[50px]">
        <img
          src="/img/Abstract Design.png"
          alt="Abstract Design"
          className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 object-contain mx-auto sm:mx-0"
        />
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          Discover Our Office Locations
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-[#999] max-w-2xl mx-auto sm:mx-0">
          Estatein is here to serve you across multiple locations. Whether you are
          looking to meet our team, discuss real estate opportunities, or simply
          drop by for a chat, we have offices conveniently located to serve your
          needs. Explore the categories below to find the Estatein office nearest
          to you.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-[30px] bg-[#1A1A1A] p-3 sm:p-4 lg:p-[10px] rounded-lg">
        <div className="bg-[#141414] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] w-full sm:w-auto flex-1 text-center rounded-[10px]">
          <h3 className="text-sm sm:text-base lg:text-lg">All</h3>
        </div>
        <div className="bg-[#262626] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] w-full sm:w-auto flex-1 text-center rounded-[10px]">
          <h3 className="text-sm sm:text-base lg:text-lg">Regional</h3>
        </div>
        <div className="bg-[#262626] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] w-full sm:w-auto flex-1 text-center rounded-[10px]">
          <h3 className="text-sm sm:text-base lg:text-lg">International</h3>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 gap-6"
          style={{ transform: `translateX(-${currentSlide * (100 / cardsPerSlide)}%)` }}
        >
          {contactUsOfficeCompData.map((data, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: `calc(${100 / cardsPerSlide}% - 1rem)` }}
            >
              <div className="border-[2px] border-[#262626] p-4 sm:p-6 lg:p-[30px] rounded-lg flex-1">
                <p className="text-sm sm:text-base lg:text-[18px] pb-2 sm:pb-3 lg:pb-[10px]">
                  {data.type}
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-3 sm:pb-4 lg:pb-[14px]">
                  {data.companyName}
                </h3>
                <p className="text-sm sm:text-base lg:text-[18px] text-[#999] pb-4 sm:pb-6 lg:pb-[40px]">
                  {data.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 pb-4 sm:pb-6 lg:pb-[40px]">
                  <div className="bg-[#262626] w-full sm:w-[200px] h-[50px] text-sm sm:text-base lg:text-[18px] text-center p-2 sm:p-3 lg:p-[14px] rounded-[10px]">
                    <p>{data.email}</p>
                  </div>
                  <div className="bg-[#262626] w-full sm:w-[200px] h-[50px] text-sm sm:text-base lg:text-[18px] text-center p-2 sm:p-3 lg:p-[14px] rounded-[10px]">
                    <p>{data.phone}</p>
                  </div>
                  <div className="bg-[#262626] w-full sm:w-[200px] h-[50px] text-sm sm:text-base lg:text-[18px] text-center p-2 sm:p-3 lg:p-[14px] rounded-[10px]">
                    <p>{data.location}</p>
                  </div>
                </div>
                <button className="w-[100%] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] bg-[#703BF7] text-sm sm:text-base lg:text-[18px] rounded-[10px] hover:bg-[#5c2dc7] transition-colors">
                  {data.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-[#262626] mt-8 pt-4">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <p className="text-white text-center sm:text-left">
            {currentSlide + 1} of {Math.ceil(contactUsOfficeCompData.length / cardsPerSlide)}
          </p>
        </div>
        <div className="flex justify-center sm:justify-end gap-4">
          <button
            className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsOfficeComp;