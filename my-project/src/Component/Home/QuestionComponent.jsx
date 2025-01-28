import { Link } from "react-router-dom"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const QuestionComponent = () => {
  const questionsData = [
    {
      header: "How do I search for properties on Estatein?",
      text: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
      buttonText: "Read More",
    },
    {
      header: "What documents do I need to sell my property through Estatein?",
      text: "Find out about the necessary documentation for listing your property with us.",
      buttonText: "Read More",
    },
    {
      header: "How can I contact an Estatein agent?",
      text: "Find out about the necessary documentation for listing your property with us.",
      buttonText: "Read More",
    },
  ]

  return (
    <section className="bg-[#1A1A1A] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <div className="md:w-1/2 lg:w-3/5 mb-6 md:mb-0">
            <img src="/img/Abstract Design.png" alt="Abstract Design" className="mb-4" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">Frequently Asked Questions</h3>
            <p className="text-[#999] text-base sm:text-lg mb-4 md:mb-0">
              Find answers to common questions about Estateins services, property listings, and the real estate
              process. We are here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <div className="md:ml-auto">
           <Link to="/about" >
           <button className="w-full md:w-auto bg-[#262626] text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:bg-[#333]">
              View All FAQs
            </button>
           </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {questionsData.map((data, ) => (
            <div
              key={data.header}
              className="border-2 border-[#262626] rounded-lg shadow-md flex flex-col justify-between p-6 h-full"
            >
              <h1 className="text-xl font-medium mb-4 text-white">{data.header}</h1>
              <p className="text-base mb-6 text-[#999] flex-grow">{data.text}</p>
              <Link to="/about" >
              <button className="bg-[#262626] text-white py-2 px-4 rounded-md hover:bg-[#333] transition duration-300 w-full sm:w-auto">
                {data.buttonText}
              </button>
              </Link>
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

export default QuestionComponent

