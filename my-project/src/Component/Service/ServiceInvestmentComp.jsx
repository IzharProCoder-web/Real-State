const ServiceInvestmentComp = () => {
  const serviceInvestmentCompData = [
    {
      img: "/img/Icon-service-1.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      img: "/img/Icon-service-2.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      img: "/img/Icon-service-3.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      img: "/img/Icon-service-4.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 sm:px-8 lg:px-14 py-8">
      <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-1/2">
        <div>
          <img
            src="/img/Abstract Design.png"
            alt="Abstract Design"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 object-contain"
          />
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Smart Investments, Informed Decisions
          </h3>
          <p className="text-base sm:text-lg text-[#999]">
            Building a real estate portfolio requires a strategic approach. Estateins Investment Advisory Service empowers you to make smart investments and informed decisions.
          </p>
        </div>

        <div className="bg-[url('/img/Service-card-bg.svg')] bg-cover bg-no-repeat bg-center p-6 sm:p-8 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Unlock Your Investment Potential
          </h3>
          <p className="text-base sm:text-lg text-[#999] mb-6">
            Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
          </p>
          <button className="bg-black text-white w-full sm:w-[300px] h-12 sm:h-16 rounded-lg hover:bg-opacity-90 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full lg:w-1/2">
        {serviceInvestmentCompData.map((data, index) => (
          <div key={index} className="bg-black p-6 sm:p-8 rounded-lg">
            <div className="flex items-center gap-4">
              <img src={data.img} alt={data.title} className="w-12 h-12 sm:w-16 sm:h-16" />
              <h3 className="text-xl sm:text-2xl font-bold">{data.title}</h3>
            </div>
            <div className="pt-4 sm:pt-6">
              <p className="text-sm sm:text-base text-[#999]">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceInvestmentComp;