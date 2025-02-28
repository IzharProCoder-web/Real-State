const ContactUsOfficeMemberComp = () => {
  return (
    <section className="px-4 md:px-[50px] mt-[50px] md:mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px]">
      <div className="w-full">
        <img src="/img/Contact-img-1.svg" alt="Contact 1" className="w-full h-auto" />
      </div>

      <div className="w-full">
        <img src="/img/Contact-img-2.svg" alt="Contact 2" className="w-full h-auto" />
      </div>

      <div className="w-full">
        <img src="/img/Contact-img-6.svg" alt="Contact 6" className="w-full h-auto" />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-[20px]">
        <img src="/img/Contact-img-3.svg" alt="Contact 3" className="w-full md:w-1/2 h-auto" />
        <img src="/img/Contact-img-4.svg" alt="Contact 4" className="w-full md:w-1/2 h-auto" />
      </div>

      <div className="w-full">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold pt-10 md:pt-20">
          Explore Estateins World
        </h3>
        <p className="text-[#999] text-sm sm:text-base md:text-[18px] mt-4">
          Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
        </p>
      </div>

      <div className="w-full">
        <img src="/img/Contact-img-5.svg" alt="Contact 5" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default ContactUsOfficeMemberComp;