import AboutUsHeroComp from "../Component/AboutUs/AboutUsHeroComp";
import AchievementComp from "../Component/AboutUs/AchievementComp";
import EstateinExperience from "../Component/AboutUs/NavigationComp";
import OurTeam from "../Component/AboutUs/OurTeam";
import OurValueComp from "../Component/AboutUs/OurValueComp";
import OurValuedClient from "../Component/AboutUs/OurValuedClient";
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
import FindProperties from "../FindProperties"
import Footer from "../FooterComponent"
const AboutUs = () => {
  return (
    <div className="max-w-[1530px] mx-auto bg-[#1A1A1A] text-white ">
    <TopNav/>
    <MainNav/>
    <AboutUsHeroComp />
    <OurValueComp />
    <AchievementComp />
    <EstateinExperience />
    <OurTeam />
    <OurValuedClient />
    <FindProperties />
    <Footer />
    

    </div>
  );
};

export default AboutUs;
