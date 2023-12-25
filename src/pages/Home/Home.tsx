import { Banner } from "../../components/Banner";
import "./Home.scss";
import "../../utils/utils.scss";
import { Products } from "../../components/Products";
import { AboutUs } from "../../components/AboutUs";
import { Partners } from "../../components/Partners";

export const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <main className="main">
          <Products />
          <AboutUs />
          <Partners />
        </main>
      </div>
    </>
  );
};
