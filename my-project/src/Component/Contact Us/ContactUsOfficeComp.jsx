const ContactUsOfficeComp = () => {
    const contactUsOfficeCompData = [
      {
        type: "Main Headquarters",
        companyName: "123 Estatein Plaza, City Center, Metropolis",
        description:
          "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        email: "info@estatein.com",
        phone: "+1 (123) 456-7890",
        location: "Metropolis",
        btn: "Get Direction ",
      },
      {
        type: "Main Headquarters",
        companyName: "456 Urban Avenue, Downtown District, Metropolis",
        description:
          "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        email: "info@estatein.com",
        phone: "+1 (123) 456-7890",
        location: "Metropolis",
        btn: "Get Direction",
      },
    ];
    return (
      <section className="px-[50px] mt-[50px]">
        <div className="text-center sm:text-left mb-[50px]">
          <img
            src="/img/Abstract Design.png"
            alt="Abstract Design"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 object-contain mx-auto sm:mx-0"
          />
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Discover Our Office Locations
          </h3>
          <p className="text-base sm:text-lg text-[#999]">
            Estatein is here to serve you across multiple locations. Whether youre
            looking to meet our team, discuss real estate opportunities, or simply
            drop by for a chat, we have offices conveniently located to serve your
            needs. Explore the categories below to find the Estatein office
            nearest to you
          </p>
        </div>
  
        <div className="flex gap-[30px]  bg-[#1A1A1A] w-[500px] h-[80px] items-center p-[10px] text-[18px]">
          <div className="bg-[#141414] px-[24px] py-[18px]  w-[150px] text-center rounded-[10px]">
            <h3>All</h3>
          </div>
          <div className=" bg-[#262626] px-[24px] py-[18px]  w-[150px] text-center rounded-[10px]">
            <h3>Regional</h3>
          </div>
          <div className=" bg-[#262626] px-[24px] py-[18px]  w-[150px] text-center rounded-[10px]">
            <h3>International</h3>
          </div>
        </div>
  
        <div className="flex justify-between mt-[50px] gap-[50px] " >
          {contactUsOfficeCompData.map((data, index) => (
            <div key={index} className="border-[2px] border-[#262626] p-[50px]">
              <p className="text-[18px] pb-[10px] ">{data.type}</p>
              <h3 className="text-[30px] font-semibold pb-[14px]">{data.companyName}</h3>
              <p className="text-[18px] text-[#999] pb-[40px]">{data.description}</p>
              <div className="flex gap-2 pb-[40px] ">
                <div className="bg-[#262626] w-[200px] h-[50px] text-[18px] text-center p-[14px] rounded-[10px]" >
                  <p>{data.email}</p>
                </div>
                <div className="bg-[#262626] w-[200px] h-[50px] text-[18px] text-center p-[14px] rounded-[10px]">
                  <p>{data.phone}</p>
                </div>
                <div className="bg-[#262626] w-[200px] h-[50px] text-[18px] text-center p-[14px] rounded-[10px]">
                  <p>{data.location}</p>
                </div>
              </div>
              <button className="px-[24px] py-[18px] bg-[#703BF7] w-[500px]">{data.btn}</button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ContactUsOfficeComp;