import FeaturedComponent from "../Component/Home/FeaturedComponent"
import CardComponent from "../Component/Home/CardComponent"
import HeroComponent from "../Component/Home/HeroComponent"
import MainNav from "../MainNavComponent"
import TopNav from "../TopNavComponent"

const Home = () => {
  return (
    
    <div className="max-w-[1530px] mx-auto">
      <TopNav />
      <MainNav />
      <HeroComponent />
      <CardComponent />
      <FeaturedComponent />
    </div>
  )
}

export default Home
