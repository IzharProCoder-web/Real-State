const NavigationComp = () => {
  const navigationData = [
    {
      title: "Step 01",
      heading: "Discover a World of Possibilities",
      text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      title: "Step 02",
      heading: "Narrowing Down Your Choices",
      text: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      title: "Step 03",
      heading: "Personalized Guidance",
      text: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      title: "Step 04",
      heading: "See It for Yourself",
      text: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      title: "Step 05",
      heading: "Making Informed Decisions",
      text: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
    {
      title: "Step 06",
      heading: "Getting the Best Deal",
      text: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ]

  return (
    <section className="p-4 sm:p-6 md:p-8 bg-[#1A1A1A] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-center mb-8 md:mb-12">
          <img src="/img/Abstract Design.png" alt="Abstract Design" className="w-12 sm:w-16 mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Navigating the Estatein Experience</h1>
          <p className="text-[#999999] text-base sm:text-lg">
            At Estatein, we have designed a straightforward process to help you find and purchase your dream property
            with ease. Here is a step-by-step guide to how it all works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {navigationData.map((data, index) => (
            <div key={index} className="p-4 sm:p-6 bg-[#262626] rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#999999]">{data.title}</h3>
              <div className="border-l-2 border-[#444] pl-3 sm:pl-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{data.heading}</h3>
                <p className="text-[#999] text-sm sm:text-base md:text-lg">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NavigationComp

