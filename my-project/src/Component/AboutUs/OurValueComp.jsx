
const OurValueComp = () => {
  const ourValueData = [
    {
      img: "/img/Icon Container.svg",
      title: "Trust",
      text: "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      img: "/img/Icon Container-1.svg",
      title: "Excellence",
      text: "We set the bar high for ourselves. From the properties we list to the services we provide.",
    },
    {
      img: "/img/Icon Container-2.svg",
      title: "Client-Centric",
      text: "Your dreams and needs are at the center of our universe. We listen, understand.",
    },
    {
      img: "/img/Icon Container-3.svg",
      title: "Our Commitment",
      text: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full h-auto gap-x-[80px]  rounded-lg shadow-md overflow-hidden md:flex-row md:h-fit-content px-10 my-3 py-6"> 
      <div className="flex flex-col items-start justify-center ml-9 md:p-8 text-white w-[500px]"> 
        <img src="/img/Abstract Design.png" alt="Abstract Design" className="w-16  mb-4" />
        <h1 className="text-[48px] font-bold mb-2 ">Our Values</h1>
        <p className=" text-[#999999] text-[18px]">
          Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
        </p>
      </div>

      <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-2 mt-6 md:mt-0 border-[5px] border-[#262626] md:w-[1000px]">
        {ourValueData.map((data, index) => (
          <div key={index} className="flex flex-col    rounded-lg shadow-sm p-4 text-white">
           <div className="flex items-center gap-x-2">
           <img src={data.img} alt={data.title} className="w-10 h-10 mb-2" />
           <h1 className="text-xl font-semibold">{data.title}</h1>
           </div>
            <p className="text-sm text-gray-300">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValueComp;