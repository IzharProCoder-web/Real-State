import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
import ServiceHeroComp from "../Component/Service/ServiceHeroComp"
import CardComponent from "../Component/Home/CardComponent"
import ServiceInvestmentComp from "../Component/Service/ServiceInvestmentComp"
import ServiceUnlockPropertie from "../Component/Service/ServiceUnlockPropertie"
import ServiceEffortlessComp from "../Component/Service/ServiceEffortlessComp"
import FindProperties from "../FindProperties"
import Footer from "../FooterComponent"


const services = () => {
  return (
    <div  className="max-w-[1530px] mx-auto bg-[#141414] text-white">
    <TopNav />
    <MainNav/>
    <ServiceHeroComp />
    <CardComponent />
    <ServiceUnlockPropertie />
    <ServiceEffortlessComp />
    <ServiceInvestmentComp />
    <FindProperties />
    <Footer />
    </div>
  )
}

export default services
