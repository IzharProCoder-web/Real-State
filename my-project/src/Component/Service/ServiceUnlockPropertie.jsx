const ServiceUnlockProperties = () => {
  const unlockPropertieData = [
    {
      img: "/img/Icon-service-1.svg",
      title: "Valuation Mastery",
      description: "Discover the true worth of your property with our expert valuation services.",
    },
    {
      img: "/img/Icon-service-2.svg",
      title: "Strategic Marketing",
      description: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    },
    {
      img: "/img/Icon-service-3.svg",
      title: "Valuation Mastery",
      description: "Discover the true worth of your property with our expert valuation services.",
    },
    {
      img: "/img/Icon-service-4.svg",
      title: "Valuation Mastery",
      description: "Discover the true worth of your property with our expert valuation services.",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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
            Explore the categories below to see how we can help you at every step of your selling journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] mt-8 sm:mt-10 md:mt-[50px]">
          {unlockPropertieData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col p-6 sm:p-8 md:p-[50px] border-2 border-[#262626] rounded-lg
                hover:border-[#404040] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <img
                  src={data.img || "/placeholder.svg"}
                  alt={data.title}
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain"
                />
                <h3 className="text-xl sm:text-[24px] font-semibold">{data.title}</h3>
              </div>

              <div>
                <p className="text-base sm:text-[18px] text-[#999] leading-relaxed">{data.description}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default ServiceUnlockProperties

