const OurTeam = () => {
    const teamData = [
      {
        img: "/img/Team-1.svg",
        name: "Max Mitchell",
        post: "Founder",
        chat: "Say Hello 👋",
        logo: "/img/Tiweeter-logo.svg",
        btn: "/img/SendBtn.svg",
      },
      {
        img: "/img/Team-2.svg",
        name: "Sarah Johnson",
        post: "Chief Real Estate Officer",
        chat: "Say Hello 👋",
        logo: "/img/Tiweeter-logo.svg",
        btn: "/img/SendBtn.svg",
      },
      {
        img: "/img/Team-3.svg",
        name: "David Brown",
        post: "Head of Property Management",
        chat: "Say Hello 👋",
        logo: "/img/Tiweeter-logo.svg",
        btn: "/img/SendBtn.svg",
      },
      {
        img: "/img/Team-4.svg",
        name: "Michael Turner",
        post: "Legal Counsel",
        chat: "Say Hello 👋",
        logo: "/img/Tiweeter-logo.svg",
        btn: "/img/SendBtn.svg",
      },
    ]
  
    return (
      <section className="p-4 sm:p-6 md:p-8 bg-[#1A1A1A] text-white">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-start justify-center mb-8 sm:mb-12">
            <img src="/img/Abstract Design.png" alt="Abstract Design" className="w-12 sm:w-16 mb-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Meet the Estatein Team</h1>
            <p className="text-[#999999] text-base sm:text-lg max-w-3xl">
              At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people
              behind our mission to make your real estate dreams a reality.
            </p>
          </div>
  
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {teamData.map((data, index) => (
              <div key={index} className="p-4 bg-[#262626] rounded-lg relative">
                <img src={data.img || "/placeholder.svg"} alt={data.name} className="w-full h-auto mb-4 rounded-lg" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{data.name}</h3>
                <p className="text-[#999999] text-sm sm:text-base mb-4">{data.post}</p>
                <div className="flex items-center justify-between bg-[#141414] rounded-[15px] p-2">
                  <p className="text-[#999999] text-sm sm:text-base">{data.chat}</p>
                  <img src={data.btn || "/placeholder.svg"} alt="Send Button" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <img
                  src={data.logo }
                  alt="Logo"
                  className="absolute top-[60%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-8 sm:w-10 md:w-12"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default OurTeam
  
  