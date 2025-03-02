import ContactUsCardComp from "../Component/Contact Us/ContactUsCardComp"
import ContactUsConnectComp from "../Component/Contact Us/ContactUsConnectComp"
import ContactUsHeroComp from "../Component/Contact Us/ContactUsHeroComp"
import ContactUsOfficeComp from "../Component/Contact Us/ContactUsOfficeComp"
import ContactUsOfficeMemberComp from "../Component/Contact Us/ContactUsOfficeMemberComp"
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
import FindProperties from "../FindProperties"
import Footer from "../FooterComponent"

const ContactUs = () => {
  return (
    <div className=" text-white bg-[#141414]">
  <TopNav/>
  <MainNav />
  <ContactUsHeroComp />
  <ContactUsCardComp />
  <ContactUsConnectComp />
  <ContactUsOfficeComp />
  <ContactUsOfficeMemberComp />
  <FindProperties />
  <Footer />
    </div>
  )
}

export default ContactUs
