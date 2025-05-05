import Header from "../../components/organisms/Header/Header";
import WeServe from "../../components/organisms/WeServe/WeServe";
import DownlaodOurApp from "../../components/DownloadOurApp/DownlaodOurApp";
import Footer from "../../components/organisms/Footer/Footer";
import Delivery from "../../components/organisms/Delivery/Delivery";
import WhyChooseUs from "../../components/organisms/WhyChooseUs/WhyChooseUs";
import Hero from "../../components/organisms/Hero/Hero";

const Home = () => {
  return (
    <div>
      {/*More than Faster*/}
      <Hero/>
      {/*What we Serve*/}
      <WeServe />
      {/*WHY CHOOSE US*/}
      <WhyChooseUs />
      {/*HOME DELIVERY*/}
      <Delivery />
      {/*Download App*/}
      <DownlaodOurApp />
      {/*Footer*/}
      <Footer />
      {/*Footer component import here*/}
    </div>
  );
};
export default Home;
