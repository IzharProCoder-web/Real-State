import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMdCloseCircleOutline } from "react-icons/io"

const TopNav = () => {
  const [isTopNavOpen, setIsTopNavOpen] = useState(true)

  const toggleTopNav = () => {
    setIsTopNavOpen(!isTopNavOpen)
  }

  if (!isTopNavOpen) {
    return null
  }

  return (
    <div className="relative bg-[url(/img/Banner.svg)] text-white bg-cover bg-no-repeat w-full py-2 sm:py-3 md:py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex flex-wrap justify-center items-center">
          <p className="text-center">✨Discover Your Dream Property with Estatein</p>
          <Link to="/properties" className="ml-1 sm:ml-2 underline cursor-pointer whitespace-nowrap">
            Learn More
          </Link>
        </h3>
      </div>
      <button
        onClick={toggleTopNav}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 md:right-6 cursor-pointer"
        aria-label="Close banner"
      >
        <IoMdCloseCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>
    </div>
  )
}

export default TopNav

