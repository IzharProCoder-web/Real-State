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


  return (
    <section className=" text-white bg-[#1A1A1A] xl:h-[814px] flex items-center justify-between">
      <div className=" flex flex-col justify-between ">
        <div>
          <h1 className="xl:text-[60px] font-semibold">Discover Your Dream Property with Estatein</h1>
          <p className="xl:text-[18px] text-[#999999] font-medium">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="">Learn More</button>
          <button>Browser Properties</button>
        </div>

        <div>
          <div>
            {HeroData.map((data, index) => (
              <div key={index}>
                <h1>{data.number}</h1>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <img src="/img/Container.svg" alt="hero" />
      </div>
    </section>
  );
};

export default HeroComponent;
