import Banner from "../components/Banner/Banner";
import Description from "../components/Description/Description";
import Stepper from "../components/FormStepper/Stepper";
import GreenTecno from "../components/GreenTecno/GreenTecno";
import Hero from "../components/Hero/Hero";
import OurGoals from "../components/OurGoals/OurGoals";
import Services from "../components/Services/Services";

function Home() {
  return (
    <div>
      <Hero />
      {/* <Banner /> */}
      <Services />
      <GreenTecno />
      <OurGoals />
      <Description />
      <Stepper />
    </div>
  );
}

export default Home;
