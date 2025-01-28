import { Link } from "react-router-dom"
const FindProperties = () => {
  return (
    <section className="bg-[#1A1A1A] text-white px-4 sm:px-6 md:px-8 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-2/3 lg:pr-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6">
            Start Your Real Estate Journey Today
          </h1>
          <p className="text-base sm:text-lg text-[#999] mb-6 lg:mb-0">
            Your dream property is just a click away. Whether you are looking for a new home, a strategic investment, or
            expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards
            your real estate goals and explore our available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
         <Link to="/properties" >
         <button className="w-full sm:w-auto px-6 py-3 bg-[#703BF7] text-white font-medium rounded-md hover:bg-[#5a2dc7] transition-colors duration-300">
            Explore Properties
          </button>
         </Link>
        </div>
      </div>
    </section>
  )
}

export default FindProperties

