import  { lazy, Suspense } from "react";
import MainNav from "../MainNavComponent";
import TopNav from "../TopNavComponent";
import Footer from "../FooterComponent";
import { TailSpin } from "react-loader-spinner";

const ServiceHeroComp = lazy(() => import("../Component/Service/ServiceHeroComp"));
const CardComponent = lazy(() => import("../Component/Home/CardComponent"));
const ServiceUnlockPropertie = lazy(() => import("../Component/Service/ServiceUnlockPropertie"));
const ServiceEffortlessComp = lazy(() => import("../Component/Service/ServiceEffortlessComp"));
const ServiceInvestmentComp = lazy(() => import("../Component/Service/ServiceInvestmentComp"));
const FindProperties = lazy(() => import("../FindProperties"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <TailSpin color="#703BF7" height={50} width={50} />
  </div>
);

const Services = () => {
  return (
    <div className="bg-[#141414] text-white">
      <TopNav />
      <MainNav />
      <Suspense fallback={<Loader />}>
        <ServiceHeroComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <CardComponent />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ServiceUnlockPropertie />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ServiceEffortlessComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ServiceInvestmentComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FindProperties />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Services;