
const ServiceInvestmentComp = () => {
  const serviceInvestmentCompData = [
    {
      img: "/img/Investments-icon-1.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      img: "/img/Investments-icon-2.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      img: "/img/Investments-icon-3.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      img: "/img/Investments-icon-4.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
  ];
  return (
    <section className="flex">
      <div className=" flex flex-col">
        <div>
            <img src="/img/Abstract Design.png" /> 
            <h3>Smart Investments, Informed Decisions</h3>
            <p>Building a real estate portfolio requires a strategic approach. Estateins Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
        </div>

        <div>
            <h3>Unlock Your Investment Potential</h3>
            <p>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
            <buttom>Learn More.</buttom>
        </div>
      </div>


      <div>
        {serviceInvestmentCompData.map((data, index) => (
            <div key={index}> 
            <div>
                <img src={data.img} />
                <h3>{data.title}</h3>
            </div>
            <div>
                <p>{data.description}</p>
            </div>

            </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceInvestmentComp;
