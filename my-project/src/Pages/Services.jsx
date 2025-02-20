import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
import ServiceHeroComp from "../Component/Service/ServiceHeroComp"
import CardComponent from "../Component/Home/CardComponent"
import ServiceInvestmentComp from "../Component/Service/ServiceInvestmentComp"
// import ServiceUnlockPropertie from "../Component/Service/ServiceUnlockPropertie"


const services = () => {
  return (
    <div  className="max-w-[1530px] mx-auto bg-[#141414] text-white">
    <TopNav />
    <MainNav/>
    <ServiceHeroComp />
    <CardComponent />
    {/* <ServiceUnlockPropertie /> */}
    <ServiceInvestmentComp />
    
    </div>
  )
}

export default services
