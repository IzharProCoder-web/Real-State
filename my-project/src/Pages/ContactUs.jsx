import ContactUsCardComp from "../Component/Contact Us/ContactUsCardComp"
import ContactUsConnectComp from "../Component/Contact Us/ContactUsConnectComp"
import ContactUsHeroComp from "../Component/Contact Us/ContactUsHeroComp"
import ContactUsOfficeComp from "../Component/Contact Us/ContactUsOfficeComp"
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"

const ContactUs = () => {
  return (
    <div className="max-w-[1530px] mx-auto text-white bg-[#141414]">
  <TopNav/>
  <MainNav />
  <ContactUsHeroComp />
  <ContactUsCardComp />
  <ContactUsConnectComp />
  <ContactUsOfficeComp />
    </div>
  )
}

export default ContactUs
