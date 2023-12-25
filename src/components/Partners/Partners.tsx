import "./Partners.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { partners } from "../../helpers/constants";

export const Partners = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="section partners">
      <h2 className="section__title">Our Partners</h2>
      <div className="row">
        {partners.map((partner) => {
          const { name, src } = partner;
          return (
            <div
              className="column width-1-2 width-1-3-md width-1-5-lg"
              data-aos="zoom-in"
            >
              <img className="partners__image" src={src} alt={name} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
