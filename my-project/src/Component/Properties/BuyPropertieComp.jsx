const BuyPropertieComp = () => {
  const buyerInfo = [
    { title: "First Name", placeHolder: "Enter Your First Name" },
    { title: "Last Name", placeHolder: "Enter Your Last Name" },
    { title: "Email", placeHolder: "Enter Your Email" },
    { title: "Phone", placeHolder: "Enter Phone Number" },
    { title: "Preferred Location", placeHolder: "Select Location", location: "car" },
    { title: "Property Type", placeHolder: "Select Property Type" },
    { title: "No. of Bathrooms", placeHolder: "Select no. of Bedrooms" },
    { title: "No. of Bedrooms", placeHolder: "Select no. of Bedrooms" },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="pr-[20px] mb-6 md:mb-0">
        <img src="/img/Abstract Design.png" alt="Abstract Design" className="mb-4" />
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">
          Discover a World of Possibilities
        </h3>
        <p className="text-[#999] text-base sm:text-lg mb-4 md:mb-0">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click View Details for more information.
        </p>
      </div>

      <div className="border-2 border-[#262626] rounded-[10px] p-6 sm:p-[50px] mt-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-[50px]">
          {buyerInfo.map((data, index) => (
            <div key={index} className="flex flex-col gap-4">
              <label className="text-lg sm:text-[20px] font-semibold">{data.title}</label>
              <input
                placeholder={data.placeHolder}
                className="outline-none py-3 sm:py-[24px] px-4 sm:px-[20px] h-12 sm:h-[68px] w-full bg-[#1a1a1a] text-[#999] rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-[50px] mt-6 sm:mt-[50px]">
          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            <label className="text-lg sm:text-[20px] font-semibold">Budget</label>
            <input
              placeholder="Select Budget"
              className="bg-[#1a1a1a] py-3 sm:py-[22px] px-4 sm:px-[20px] h-12 sm:h-[68px] w-full rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            <label className="text-lg sm:text-[20px] font-semibold">Preferred Contact Method</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                placeholder="Enter Your Number"
                className="bg-[#1a1a1a] py-3 sm:py-[22px] px-4 sm:px-[20px] h-12 sm:h-[68px] w-full sm:w-1/2 rounded-lg"
              />
              <input
                placeholder="Enter Your Email"
                className="bg-[#1a1a1a] py-3 sm:py-[22px] px-4 sm:px-[20px] h-12 sm:h-[68px] w-full sm:w-1/2 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6 sm:mt-[50px]">
          <label className="text-lg sm:text-[20px] font-semibold">Message</label>
          <textarea
            placeholder="Enter your Message here.."
            className="bg-[#1A1A1A] py-3 sm:py-[24px] px-4 sm:px-[20px] w-full h-32 sm:h-[170px] rounded-lg"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 sm:mt-[50px]">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="bg-[#1A1A1A] text-[#1A1A1A]" />
            <p className="text-sm sm:text-base">
              I agree with <a href="#" className="text-purple-600">Terms</a> of Use and{" "}
              <a href="#" className="text-purple-600">Privacy Policy</a>
            </p>
          </div>
          <button className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200">
            Send Your Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyPropertieComp;