import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

export default function PropertySearch() {
  const propertiesData = [
    {
      title: "Location",
      logo: <FaLocationDot className="text-lg" />,
      dropDown: <IoIosArrowDropdown />,
    },
    {
      title: "Property Type",
      logo: <MdHomeWork className="text-lg" />,
      dropDown: <IoIosArrowDropdown />,
    },
    {
      title: "Price Range",
      logo: <IoIosPricetag className="text-lg" />,
      dropDown: <IoIosArrowDropdown />,
    },
    {
      title: "Property Size",
      logo: <IoCubeOutline className="text-lg" />,
      dropDown: <IoIosArrowDropdown />,
    },
    {
      title: "Build Year",
      logo: <CiCalendarDate className="text-lg" />,
      dropDown: <IoIosArrowDropdown />,
    },
  ];

  return (
    <div className="bg-[#141414]">
      <section className="relative bg-[#141414]">
        <div className="pt-[50px] md:pt-[100px] px-4 md:pl-[112px] pb-[50px] md:pb-[110px] pr-4 md:pr-[200px] bg-gradient-to-tr from-[#1A1A1A] to-[#141414]">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-base md:text-lg text-[#999] max-w-3xl">
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our
            curated selection of properties, each offering a unique story and a chance to redefine your life.
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-28 w-full max-w-6xl px-4 md:block ">
          <div className="mx-6 bg-[#1A1A1A] rounded-lg shadow-xl">
            {/* Search Section */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-6 border-b border-[#262626]">
              <div className="w-full md:flex-1 flex items-center gap-3 px-4 py-3 bg-[#141414] rounded-lg">
                <CiSearch className="text-2xl text-[#666]" />
                <input
                  type="text"
                  placeholder="Search for Property"
                  className="w-full bg-transparent text-white outline-none placeholder:text-[#666]"
                />
              </div>
              <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#703BF7] text-white rounded-lg hover:bg-[#703BF7]/90 transition-colors">
                <CiSearch className="text-xl" />
                Find Property
              </button>
            </div>

            <div className="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-x divide-[#262626] hidden">
              {propertiesData.map((data, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 p-4 md:p-6 text-[#666] hover:text-white transition-colors group"
                >
                  <span className="group-hover:text-[#703BF7] transition-colors">{data.logo}</span>
                  <span className="text-sm font-medium">{data.title}</span>
                  <span className="text-lg ml-auto group-hover:text-[#703BF7] transition-colors">{data.dropDown}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="pb-16 md:pb-32"></div>
    </div>
  );
}