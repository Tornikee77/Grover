import Header from "../../components/organisms/Header/HEader";
import WeServe from "../../components/organisms/WeServe/WeServe";
import DownlaodOurApp from "../../components/DownloadOurApp/DownlaodOurApp";
import Footer from "../../components/organisms/Footer/Footer";

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
      {/*HOME DELIVERY component import here*/}
      {/*Download our app*/}
      <DownlaodOurApp />
      {/*Footer*/}
      <Footer />
      {/*Footer component import here*/}
    </div>
  );
};
export default Home;
