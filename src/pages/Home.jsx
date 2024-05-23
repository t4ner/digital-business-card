import Description from "../components/Description/Description";
import Footer from "../components/Footer/Footer";
import GreenTecno from "../components/GreenTecno/GreenTecno";
import Hero from "../components/Hero/Hero";
import Nature from "../components/Nature/Nature";
import Navbar from "../components/Navbar/Navbar";
import OurGoals from "../components/OurGoals/OurGoals";
import Pricing from "../components/Pricing/Pricing";
import Services from "../components/Services/Services";
import Social from "../components/Social/Social";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Social />
      <Services />
      <GreenTecno />
      <OurGoals />
      <Nature />
      <Description />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
