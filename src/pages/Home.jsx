import Banner from "../components/Banner/Banner";
import Description from "../components/Description/Description";
import Stepper from "../components/FormStepper/Stepper";
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
      {/* <Banner /> */}
      <Social />
      <Services />
      <GreenTecno />
      <OurGoals />
      <Nature />
      <Description />
      <Pricing />
      <Stepper />
    </div>
  );
}

export default Home;
