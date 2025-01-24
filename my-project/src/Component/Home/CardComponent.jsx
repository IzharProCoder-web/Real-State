import { FiArrowUpRight } from "react-icons/fi";

const CardComponent = () => {
  const CardsData = [
    {
      img: "/img/Icon-1.svg",
      text: "Find Your Dream Home",
    },
    {
      img: "/img/Icon-2.svg",
      text: "Unlock Property Value",
    },
    {
      img: "/img/Icon-3.svg",
      text: "Effortless Property Management",
    },
    {
      img: "/img/Icon-4.svg",
      text: "Smart Investments, Informed Decisions",
    },
  ];

  return (
    <section className="w-full bg-[#1A1A1A] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {CardsData.map((data, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center bg-[#252525] rounded-lg xl:w-[330px] h-48 gap-4 p-6 shadow-lg"
          >
            <div className="absolute top-4 right-4 ">
              <FiArrowUpRight className="w-5 h-5 text-white transform rotate-45" />
            </div>
            <img src={data.img} alt="icon" className="w-16 h-16" />
            <p className="text-center text-sm font-medium">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardComponent;
