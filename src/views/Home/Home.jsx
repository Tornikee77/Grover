import Header from "../../components/organisms/Header/Header";
import WeServe from "../../components/organisms/WeServe/WeServe";
import DownlaodOurApp from "../../components/DownloadOurApp/DownlaodOurApp";
import Footer from "../../components/organisms/Footer/Footer";
import Delivery from "../../components/organisms/Delivery/Delivery";

const Home = () => {
  return (
    <div>
      {/*Header*/}
      <Header />
      {/*More than Faster*/}
      {/*More than Faster component import here*/}
      {/*What we Serve*/}
      <WeServe />
      {/*WHY CHOOSE US*/}
      {/*WHY CHOOSE US component import here*/}
      {/*HOME DELIVERY*/}
      <Delivery />
      <DownlaodOurApp />
      {/*Download our app component import here*/}
      {/*Footer*/}
      <Footer />
      {/*Footer component import here*/}
    </div>
  );
};
export default Home;
