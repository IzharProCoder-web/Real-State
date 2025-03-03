import  { useState, useEffect } from "react";
import { IoFlashOutline } from "react-icons/io5";
import { FaDiceFour } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OurValuedClient = () => {
  const OurValuedClientData = [
    {
      date: "Since 2019",
      companyName: "ABC Corporation",
      btn: "Visit Website",
      domin: "Domain",
      dominText: "Commercial Real Estate",
      category: "Category",
      categoryText: "Luxury Home Development",
      question: "What They Said 🤗",
      answer:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      date: "Since 2018",
      companyName: "GreenTech Enterprises",
      btn: "Visit Website",
      domin: "Domain",
      dominText: "Commercial Real Estate",
      category: "Category",
      categoryText: "Luxury Home Development",
      question: "What They Said 🤗",
      answer:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      date: "Since 2020",
      companyName: "Tech Innovators Inc.",
      btn: "Visit Website",
      domin: "Domain",
      dominText: "Commercial Real Estate",
      category: "Category",
      categoryText: "Luxury Home Development",
      question: "What They Said 🤗",
      answer:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      date: "Since 2017",
      companyName: "Global Builders Ltd.",
      btn: "Visit Website",
      domin: "Domain",
      dominText: "Commercial Real Estate",
      category: "Category",
      categoryText: "Luxury Home Development",
      question: "What They Said 🤗",
      answer:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
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
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(OurValuedClientData.length / cardsPerSlide));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(OurValuedClientData.length / cardsPerSlide)) % Math.ceil(OurValuedClientData.length / cardsPerSlide));
  };

  return (
    <section className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col items-start justify-center mb-8 sm:mb-12">
        <img src="/img/Abstract Design.png" alt="Abstract Design" className="w-12 sm:w-16 mb-4" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Navigating the Estatein Experience
        </h1>
        <p className="text-[#999999] text-base sm:text-lg">
          At Estatein, we have designed a straightforward process to help you find and purchase your dream property with
          ease. Here is a step-by-step guide to how it all works.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 gap-4"
          style={{ transform: `translateX(-${currentSlide * (100 / cardsPerSlide)}%)` }}
        >
          {OurValuedClientData.map((data, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: `calc(${100 / cardsPerSlide}% - 1rem)` }}
            >
              <div className="border-[8px] rounded-[10px] border-[#262626] p-4 sm:p-6 md:p-8 mb-4 lg:mb-0">
                <div>
                  <p className="text-[#999] text-sm sm:text-base">{data.date}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-0">{data.companyName}</h3>
                    <button className="px-3 py-2 sm:px-4 sm:py-3 text-center bg-[#262626] rounded-[10px] text-sm sm:text-base">
                      {data.btn}
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between my-4 sm:my-6 gap-4">
                    <div className="text-[#999] flex flex-col items-start justify-center">
                      <div className="flex items-center gap-2">
                        <FaDiceFour />
                        <p className="text-sm sm:text-base">{data.domin}</p>
                      </div>
                      <p className="text-xs sm:text-sm">{data.dominText}</p>
                    </div>
                    <div className="text-[#999] flex flex-col items-start justify-center">
                      <div className="flex items-center gap-2">
                        <IoFlashOutline />
                        <p className="text-sm sm:text-base">{data.category}</p>
                      </div>
                      <p className="text-xs sm:text-sm">{data.categoryText}</p>
                    </div>
                  </div>
                  <div className="border-[2px] rounded-[10px] border-[#262626] text-start p-4 sm:p-6">
                    <p className="text-[#999] pb-2 sm:pb-4 text-sm sm:text-base">{data.question}</p>
                    <p className="text-sm sm:text-base">{data.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-[#262626] mt-8 pt-4">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <p className="text-white text-center sm:text-left">
            {currentSlide + 1} of {Math.ceil(OurValuedClientData.length / cardsPerSlide)}
          </p>
        </div>
        <div className="flex justify-center sm:justify-end gap-4">
          <button
            className="rounded-full bg-[#171717] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200"
            onClick={handlePrev}
          >
            <IoIosArrowBack className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            className="rounded-full bg-[#171717] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200"
            onClick={handleNext}
          >
            <IoIosArrowForward className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurValuedClient;