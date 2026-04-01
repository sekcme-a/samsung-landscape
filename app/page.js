import About from "./zz_components/About";
import About2 from "./zz_components/About2";
import Banner from "./zz_components/Banner";
import OurMission from "./zz_components/OurMission";
import WhyChooseUs from "./zz_components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner />
      <main>
        <About />
        <WhyChooseUs />
        <About2 />
        <OurMission />
      </main>
    </>
  );
}
