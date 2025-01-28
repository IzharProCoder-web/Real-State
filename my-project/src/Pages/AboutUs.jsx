import AboutUsHeroComp from "../Component/AboutUs/AboutUsHeroComp";
import OurValueComp from "../Component/AboutUs/OurValueComp";
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
const AboutUs = () => {
  return (
    <div className="max-w-[1530px] mx-auto bg-[#1A1A1A] text-white ">
    <TopNav/>
    <MainNav/>
    <AboutUsHeroComp />
    <OurValueComp />

    </div>
  );
};

export default AboutUs;
