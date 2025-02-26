
const ServiceEffortlessComp = () => {
    const unlockPropertieData = [
        {
          img: "/img/Icon-service-1.svg",
          title: "Valuation Mastery",
          description: "Discover the true worth of your property with our expert valuation services.",
          isLongDiv: false,
        },
        {
          img: "/img/Icon-service-2.svg",
          title: "Strategic Marketing",
          description: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
          isLongDiv: false,
        },
        {
          img: "/img/Icon-service-3.svg",
          title: "Negotiation Wizardry",
          description: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
          isLongDiv: false,
        },
        {
          img: "/img/Icon-service-4.svg",
          title: "Closing Success",
          description: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
          isLongDiv: false,
        },
        {
          title: "Unlock the Value of Your Property Today",
          description: "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
          btn: "Learn More",
          isLongDiv: true,
        },
      ];
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14  text-white">
      <div className="max-w-7xl mx-auto">
        <div className="pr-0 sm:pr-[20px] mb-8 sm:mb-10 md:mb-12">
          <img
            src="/img/Abstract Design.png"
            alt="Abstract Design"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mb-4 sm:mb-6 object-contain"
          />
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4">Unlock Property Value</h3>
          <p className="text-[#999] text-sm sm:text-base md:text-lg max-w-3xl">
            Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property
            Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible.
            Explore the categories below to see how we can help you at every step of your selling journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] mt-8 sm:mt-10 md:mt-[50px]">
          {unlockPropertieData.slice(0, 3).map((data, index) => (
            <div
              key={index}
              className="flex flex-col p-6 sm:p-8 md:p-[50px] border-2 border-[#262626] rounded-lg hover:border-[#404040] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain"
                />
                <h3 className="text-xl sm:text-[24px] font-semibold">{data.title}</h3>
              </div>
              <p className="text-base sm:text-[18px] text-[#999] leading-relaxed">{data.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] mt-8 sm:mt-10 md:mt-[50px]">
          {unlockPropertieData.slice(3).map((data, index) => (
            <div
              key={index + 3}
              className={`${data.isLongDiv ? "sm:col-span-2" : ""} flex flex-col p-6 sm:p-8 md:p-[50px] border-2 border-[#262626] rounded-lg hover:border-[#404040] transition-all duration-300 relative`}
              style={{ backgroundImage: data.isLongDiv ? `url('/img/Service-card-bg.svg')` : "none", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <img
                  src={data.img || "/placeholder.svg"}
                  alt={data.title}
                  className={`${data.isLongDiv ? "hidden" : "block"} w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain`}
                />
                <h3 className="text-xl sm:text-[24px] font-semibold">{data.title}</h3>
              </div>
              <p className="text-base sm:text-[18px] text-[#999] leading-relaxed">{data.description}</p>

              {data.isLongDiv && (
                <button className="mt-6 sm:mt-8 md:mt-10 px-6 py-2 sm:px-8 sm:py-3 border-2 border-white text-white rounded-lg text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300">
                  {data.btn}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceEffortlessComp
