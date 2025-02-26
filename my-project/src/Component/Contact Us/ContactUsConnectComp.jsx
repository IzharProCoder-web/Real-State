const ContactUsConnectComp = () => {
  const contactUsCardCompData = [
      {
          label: "First Name",
          placeHolder: "Enter First Name",
          isLogo: false,
      },
      {
          label: "Last Name",
          placeHolder: "Enter Last Name",
          isLogo: false,
      },
      {
          label: "Email",
          placeHolder: "Enter Email",
          isLogo: false,
      },
      {
          label: "Phone",
          placeHolder: "Enter Phone Number",
          isLogo: false,
      },
      {
          label: "Inquiry Type",
          placeHolder: "Select Inquiry Type",
          isLogo: true,
      },
      {
          label: "How Did You Hear About Us?",
          placeHolder: "Select",
          isLogo: true,
      },
  ];

  return (
      <section className="p-4 sm:p-[50px]">
          <div className="text-center sm:text-left">
              <img
                  src="/img/Abstract Design.png"
                  alt="Abstract Design"
                  className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 object-contain mx-auto sm:mx-0"
              />
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Let&rsquo;s Connect
              </h3>
              <p className="text-base sm:text-lg text-[#999]">
                  We are excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you are a prospective client, partner, or simply curious about our services, we are here to answer your questions and provide the assistance you need.
              </p>
          </div>

          <div className="border-[3px] border-[#1A1A1A] rounded-[10px] p-4 sm:p-[80px] mt-8 sm:mt-[50px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[50px]">
                  {contactUsCardCompData.map((data, index) => (
                      <div key={index} className="w-full">
                          <h3 className="text-[18px] sm:text-[20px] pb-[16px]">{data.label}</h3>
                          <input
                              placeholder={data.placeHolder}
                              className="w-full h-[50px] sm:h-[60px] bg-[#1A1A1A] px-4 sm:px-[20px] py-2 sm:py-[24px] rounded-lg"
                          />
                      </div>
                  ))}
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

export default ContactUsConnectComp;