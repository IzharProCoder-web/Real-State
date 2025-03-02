import BuyPropertieComp from "../Component/Properties/BuyPropertieComp";
import PropertiesDiscoverComp from "../Component/Properties/PropertiesDiscoverComp";
import PropertiesHeroComp from "../Component/Properties/PropertiesHeroComp";
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
import FindProperties from "../FindProperties"
import Footer from "../FooterComponent"

const Properties = () => {
  return (
    <div className="bg-[#141414] text-white">
    <TopNav />
    <MainNav />
    <PropertiesHeroComp />
    <PropertiesDiscoverComp />
    <BuyPropertieComp />
    <FindProperties/>
    <Footer />

    
    
    </div>
    
  );
};

export default Properties;
