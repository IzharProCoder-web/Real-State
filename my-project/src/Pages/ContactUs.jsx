import { lazy, Suspense } from "react";
import MainNav from "../MainNavComponent";
import TopNav from "../TopNavComponent";
import Footer from "../FooterComponent";
import { TailSpin } from "react-loader-spinner";

const ContactUsHeroComp = lazy(() => import("../Component/Contact Us/ContactUsHeroComp"));
const ContactUsCardComp = lazy(() => import("../Component/Contact Us/ContactUsCardComp"));
const ContactUsConnectComp = lazy(() => import("../Component/Contact Us/ContactUsConnectComp"));
const ContactUsOfficeComp = lazy(() => import("../Component/Contact Us/ContactUsOfficeComp"));
const ContactUsOfficeMemberComp = lazy(() => import("../Component/Contact Us/ContactUsOfficeMemberComp"));
const FindProperties = lazy(() => import("../FindProperties"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <TailSpin color="#703BF7" height={50} width={50} />
  </div>
);

const ContactUs = () => {
  return (
    <div className="text-white bg-[#141414]">
      <TopNav />
      <MainNav />
      <Suspense fallback={<Loader />}>
        <ContactUsHeroComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ContactUsCardComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ContactUsConnectComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ContactUsOfficeComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ContactUsOfficeMemberComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FindProperties />
      </Suspense>
      <Footer />
    </div>
  );
};

export default ContactUs;