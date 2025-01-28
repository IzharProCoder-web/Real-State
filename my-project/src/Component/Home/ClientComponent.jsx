import { Link } from "react-router-dom"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

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
  ]

  return (
    <section className="bg-[#1A1A1A] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <div className="md:w-1/2 lg:w-3/5 mb-6 md:mb-0">
            <img src="/img/Abstract Design.png" alt="Abstract Design" className="mb-4" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">What Our Clients Say</h3>
            <p className="text-[#999] text-base sm:text-lg mb-4 md:mb-0">
              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose
              Estatein for their real estate needs.
            </p>
          </div>
          <div className="md:ml-auto">
            <Link to="/about"><button className="w-full md:w-auto bg-[#262626] text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:bg-[#333]">
              View All Testimonials
            </button></Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clientData.map((data) => (
            <div
              key={data.clientName}
              className="border-2 border-[#262626] rounded-lg p-6 shadow-md flex flex-col h-full"
            >
              <div className="mb-4">
                <img src={data.img || "/placeholder.svg"} alt={data.header} className="h-8 object-contain mb-4" />
                <h3 className="text-xl font-medium mb-2">{data.header}</h3>
                <p className="text-[#999] text-base line-clamp-3">{data.text}</p>
              </div>
              <div className="flex items-center mt-auto pt-4">
                <img
                  src={data.clientImg || "/placeholder.svg"}
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

        <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-[#262626] mt-8 pt-4">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p className="text-white text-center sm:text-left">01 of 60</p>
          </div>
          <div className="flex justify-center sm:justify-end gap-4">
            <button className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200">
              <IoIosArrowBack className="w-6 h-6 text-white" />
            </button>
            <button className="rounded-full bg-[#171717] w-12 h-12 flex items-center justify-center hover:bg-[#222] transition-colors duration-200">
              <IoIosArrowForward className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientComponent

