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
        btn: "Get Direction",
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
      <section className="px-4 sm:px-8 lg:px-16 xl:px-[50px] mt-8 sm:mt-12 lg:mt-[50px]">
        {/* Header Section */}
        <div className="text-center sm:text-left mb-8 sm:mb-12 lg:mb-[50px]">
          <img
            src="/img/Abstract Design.png"
            alt="Abstract Design"
            className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 object-contain mx-auto sm:mx-0"
          />
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Discover Our Office Locations
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-[#999] max-w-2xl mx-auto sm:mx-0">
            Estatein is here to serve you across multiple locations. Whether you are
            looking to meet our team, discuss real estate opportunities, or simply
            drop by for a chat, we have offices conveniently located to serve your
            needs. Explore the categories below to find the Estatein office nearest
            to you.
          </p>
        </div>
  
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-[30px] bg-[#1A1A1A] p-3 sm:p-4 lg:p-[10px] rounded-lg">
          <div className="bg-[#141414] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] w-full sm:w-auto flex-1 text-center rounded-[10px]">
            <h3 className="text-sm sm:text-base lg:text-lg">All</h3>
          </div>
          <div className="bg-[#262626] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] w-full sm:w-auto flex-1 text-center rounded-[10px]">
            <h3 className="text-sm sm:text-base lg:text-lg">Regional</h3>
          </div>
          <div className="bg-[#262626] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] w-full sm:w-auto flex-1 text-center rounded-[10px]">
            <h3 className="text-sm sm:text-base lg:text-lg">International</h3>
          </div>
        </div>
  
        <div className="flex flex-col lg:flex-row justify-between mt-8 sm:mt-12 lg:mt-[50px] gap-6 sm:gap-8 lg:gap-[30px]">
          {contactUsOfficeCompData.map((data, index) => (
            <div
              key={index}
              className="border-[2px] border-[#262626] p-4 sm:p-6 lg:p-[30px] rounded-lg flex-1"
            >
              <p className="text-sm sm:text-base lg:text-[18px] pb-2 sm:pb-3 lg:pb-[10px]">
                {data.type}
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-3 sm:pb-4 lg:pb-[14px]">
                {data.companyName}
              </h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-[#999] pb-4 sm:pb-6 lg:pb-[40px]">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 pb-4 sm:pb-6 lg:pb-[40px]">
                <div className="bg-[#262626] w-full sm:w-[200px] h-[50px] text-sm sm:text-base lg:text-[18px] text-center p-2 sm:p-3 lg:p-[14px] rounded-[10px]">
                  <p>{data.email}</p>
                </div>
                <div className="bg-[#262626] w-full sm:w-[200px] h-[50px] text-sm sm:text-base lg:text-[18px] text-center p-2 sm:p-3 lg:p-[14px] rounded-[10px]">
                  <p>{data.phone}</p>
                </div>
                <div className="bg-[#262626] w-full sm:w-[200px] h-[50px] text-sm sm:text-base lg:text-[18px] text-center p-2 sm:p-3 lg:p-[14px] rounded-[10px]">
                  <p>{data.location}</p>
                </div>
              </div>
              <button className=" w-[100%] px-4 sm:px-6 lg:px-[24px] py-2 sm:py-3 lg:py-[18px] bg-[#703BF7] text-sm sm:text-base lg:text-[18px] rounded-[10px] hover:bg-[#5c2dc7] transition-colors">
                {data.btn}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ContactUsOfficeComp;