import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ClientComponent = () => {
  const clientData = [
    {
      img: "/img/Stars.svg",
      header: "Exceptional Service!",
      text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      clientImg: "/img/Profile.svg",
      clientName: "John Doe",
      clientAddress: "USA, California",
    },
    {
      img: "/img/Stars.svg",
      header: "Efficient and Reliable",
      text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      clientImg: "/img/Profile-1.svg",
      clientName: "Emelie Thomson",
      clientAddress: "USA, California",
    },
    {
      img: "/img/Stars.svg",
      header: "Trusted Advisors",
      text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      clientImg: "/img/Profile-2.svg",
      clientName: "John Mans",
      clientAddress: "USA, Nevada",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] text-white p-14 ">
   <div className="container mx-auto px-4">
   <div className="flex flex-col md:flex-row  md:items-center justify-between  ">
        <div className="md:w-1/2 lg:w-2/5">
          <img src="/img/Abstract Design.png" />
          <h3 className="xl:text-[48px] font-normal mb-4">
            What Our Clients Say
          </h3>
          <p className="text-[#999] text-[18px] mb-4 md:mb-0">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>
        <div className="md:ml-auto">
          <button className="bg-[#262626]  text-white font-medium py-2 px-6 rounded-md transition duration-300">
            View All Testimonials
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
          {clientData.map((data, index) => (
            <div
              key={data.clientName}
              className={`border-2 border-[#262626] mt-5 rounded-lg p-6 shadow-md flex flex-col h-full ${index > 0 ? 'hidden md:block' : ''}`}
            >
              <div>
                <img
                  src={data.img}
                  alt={data.header}
                  className="w-full object-cover mb-4"
                  style={{ maxHeight: "50px" }}
                />
                <h3 className="text-xl font-medium mb-2">{data.header}</h3>
                <p className="text-[#999] text-base line-clamp-3">
                  {data.text}
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <img
                  src={data.clientImg}
                  alt={data.clientName}
                  className="w-10 h-10 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-medium">{data.clientName}</h4>
                  <p className="text-[#999] text-sm">{data.clientAddress}</p>
                </div>
              </div>
            </div>
          ))}
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
  );
};

export default ClientComponent;
