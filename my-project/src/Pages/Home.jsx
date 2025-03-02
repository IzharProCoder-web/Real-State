import FeaturedComponent from "../Component/Home/FeaturedComponent"
import CardComponent from "../Component/Home/CardComponent"
import HeroComponent from "../Component/Home/HeroComponent"
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"
import ClientComponent from "../Component/Home/ClientComponent"
import QuestionComponent from "../Component/Home/QuestionComponent"
import FindProperties from "../FindProperties"
import Footer from "../FooterComponent"

const Home = () => {
  return (
    
    <div className="">
      <TopNav />
      <MainNav />
      <HeroComponent />
      <CardComponent />
      <FeaturedComponent />
      <ClientComponent />
    <QuestionComponent />    
    <FindProperties />  
    <Footer />
    </div>
  )
}

export default Home
