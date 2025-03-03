import  { lazy, Suspense } from "react";
import MainNav from "../MainNavComponent";
import TopNav from "../TopNavComponent";
import Footer from "../FooterComponent";
import { TailSpin } from "react-loader-spinner";

const AboutUsHeroComp = lazy(() => import("../Component/AboutUs/AboutUsHeroComp"));
const AchievementComp = lazy(() => import("../Component/AboutUs/AchievementComp"));
const EstateinExperience = lazy(() => import("../Component/AboutUs/NavigationComp"));
const OurTeam = lazy(() => import("../Component/AboutUs/OurTeam"));
const OurValueComp = lazy(() => import("../Component/AboutUs/OurValueComp"));
const OurValuedClient = lazy(() => import("../Component/AboutUs/OurValuedClient"));
const FindProperties = lazy(() => import("../FindProperties"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <TailSpin color="#703BF7" height={50} width={50} />
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <TopNav />
      <MainNav />
      <Suspense fallback={<Loader />}>
        <AboutUsHeroComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <OurValueComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AchievementComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <EstateinExperience />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <OurTeam />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <OurValuedClient />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FindProperties />
      </Suspense>
      <Footer />
    </div>
  );
};

export default AboutUs;