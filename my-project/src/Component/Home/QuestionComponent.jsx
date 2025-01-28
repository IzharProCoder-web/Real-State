
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const QuestionComponent = () => {
    const questionsData = [
        {
            header:"How do I search for properties on Estatein?",
            text: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
            buttonText: "Read  More",
        },
        {
            header:"What documents do I need to sell my property through Estatein?",
            text: "Find out about the necessary documentation for listing your property with us.",
            buttonText: "Read  More",
        },
        {
            header:"How can I contact an Estatein agent?",
            text: "Find out about the necessary documentation for listing your property with us.",
            buttonText: "Read  More",
        },
    ]
  return (
   <section className="bg-[#1A1A1A] text-white p-14 ">
   <div className="container mx-auto px-4">
   <div className="flex flex-col md:flex-row  md:items-center justify-between  ">
        <div className="md:w-1/2 lg:w-2/5">
          <img src="/img/Abstract Design.png" />
          <h3 className="xl:text-[48px] font-normal mb-4">
          Frequently Asked Questions
          </h3>
          <p className="text-[#999] text-[18px] mb-4 md:mb-0">
          Find answers to common questions about Estateins services, property listings, and the real estate process. We are here to provide clarity and assist you every step of the way.
          </p>
        </div>
        <div className="md:ml-auto">
          <button className="bg-[#262626]  text-white font-medium py-2 px-6 rounded-md transition duration-300">
          View All FAQ’s
          </button>
        </div>
      </div>



      <div className=" py-14">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-wrap flex-nowrap gap-7 justify-center ">
          {questionsData.map((data, index) => (
            <div
              key={data.header}
              className={` border-2 border-[#262626] rounded-lg shadow-md flex flex-col justify-between items-start w-[400px]  h-[300px] p-6  ${
                index > 0 ? 'hidden md:block' : ''
              }`}
            >
              <h1 className="text-xl font-medium mb-2 text-white pb-8">
                {data.header}
              </h1>
              <p className="text-base line-clamp-3 mb-4 text-[#999]">
                {data.text}
              </p>
              <button className="bg-[#262626] flex  text-white py-2 px-4  rounded-md  mt-auto w-[150px]">
                {data.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


           <div className="flex md:flex-row  mt-9 justify-between flex-col items-center border-t-2 border-[#262626]">
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
  )
}

export default QuestionComponent
