import React, { Suspense } from "react";
import MainNav from "../MainNavComponent";
import TopNav from "../TopNavComponent";
import Footer from "../FooterComponent";
import { TailSpin } from "react-loader-spinner";

const HeroComponent = React.lazy(() => import("../Component/Home/HeroComponent"));
const CardComponent = React.lazy(() => import("../Component/Home/CardComponent"));
const FeaturedComponent = React.lazy(() => import("../Component/Home/FeaturedComponent"));
const ClientComponent = React.lazy(() => import("../Component/Home/ClientComponent"));
const QuestionComponent = React.lazy(() => import("../Component/Home/QuestionComponent"));
const FindProperties = React.lazy(() => import("../FindProperties"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <TailSpin color="#703BF7" height={50} width={50} />
  </div>
);

const Home = () => {
  return (
    <div className="">
      <TopNav />
      <MainNav />
      
      <Suspense fallback={<Loader />}>
        <HeroComponent />
        <CardComponent />
        <FeaturedComponent />
        <ClientComponent />
        <QuestionComponent />    
        <FindProperties />  
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Home;