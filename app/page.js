import Featured from "./ui/landingpage/featured";
import HeroSection from "./ui/landingpage/hero_section";
import ProductList from "./ui/landingpage/productList";
import StorePage from "./store/page";
import SocialMediaPosts from "./ui/landingpage/socialMediaPosts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <ProductList />
      <StorePage />
      <SocialMediaPosts />
    </>
  )
}
