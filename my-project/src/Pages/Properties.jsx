import { lazy, Suspense } from "react";
import MainNav from "../MainNavComponent";
import TopNav from "../TopNavComponent";
import Footer from "../FooterComponent";
import { TailSpin } from "react-loader-spinner";

const PropertiesHeroComp = lazy(() => import("../Component/Properties/PropertiesHeroComp"));
const PropertiesDiscoverComp = lazy(() => import("../Component/Properties/PropertiesDiscoverComp"));
const BuyPropertieComp = lazy(() => import("../Component/Properties/BuyPropertieComp"));
const FindProperties = lazy(() => import("../FindProperties"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <TailSpin color="#703BF7" height={50} width={50} />
  </div>
);

const Properties = () => {
  return (
    <div className="bg-[#141414] text-white">
      <TopNav />
      <MainNav />
      <Suspense fallback={<Loader />}>
        <PropertiesHeroComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <PropertiesDiscoverComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BuyPropertieComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FindProperties />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Properties;