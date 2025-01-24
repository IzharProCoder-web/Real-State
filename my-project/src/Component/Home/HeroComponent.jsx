import { useNavigate } from 'react-router-dom';

const HeroComponent = () => {
  const HeroData = [
    {
      number: "200+",
      text: "Happy Customers",
    },
    {
      number: "10k+",
      text: "Properties For Clients",
    },
    {
      number: "16+",
      text: "Years of Experience",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="bg-[#1A1A1A] text-white w-full flex flex-col-reverse md:flex-row items-center justify-between gap-x-8 pb-16 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col justify-center pt-10 md:w-1/2">
        <div className="space-y-6">
          <h1 className="text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold leading-tight">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-[#999999] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
        </div>

        <div className="flex md:flex-row flex-col gap-4 py-10">
          <button onClick={() => navigate("/aboutus")} className="rounded-lg border border-[#262626] text-[16px] md:text-[18px] px-6 py-3 hover:bg-[#262626] transition-all duration-300">
            Learn More
          </button>
          <button onClick={() => navigate("/properties")} className="rounded-lg bg-[#703BF7] text-[16px] md:text-[18px] px-6 py-3 border border-[#703BF7] hover:bg-[#5a2dc7] transition-all duration-300">
            Browse Properties
          </button>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-6">
          {HeroData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-2 bg-[#262626] p-6 rounded-lg w-full md:w-[240px]"
            >
              <h1 className="text-[24px] font-bold">{data.number}</h1>
              <p className="text-[16px] md:text-[18px] text-[#CCCCCC]">
                {data.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2">
        <img
          src="/img/Container.svg"
          alt="hero"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroComponent;
