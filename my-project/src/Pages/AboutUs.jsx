import AboutUsHeroComp from "../Component/AboutUs/AboutUsHeroComp";
import OurValueComp from "../Component/AboutUs/OurValueComp";
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
const AboutUs = () => {
  return (
    <div className="max-w-[1530px] mx-auto">
    <TopNav/>
    <MainNav/>
    <AboutUsHeroComp />
    <OurValueComp />

    </div>
  );
};

export default AboutUs;
