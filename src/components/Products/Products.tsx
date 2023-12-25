import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.scss";

export const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="section-products section" data-aos="fade-up">
      <h2 className="section__title">Our products</h2>
      <div className="row">
        <div className="column width-1-1 width-1-2-md width-1-3-lg">
          <iframe
            max-width="450"
            src="https://www.youtube.com/embed/gmf-uy7zQqo?si=ltYpJKyrVKz-4L9C"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="column width-1-2-md width-1-1 width-1-3-lg">
          <iframe
            max-width="400"
            src="https://www.youtube.com/embed/0s8_ucJ2sNc?si=h6pUAfeBHomfKz0i"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="column width-1-2-md width-1-1 width-1-3-lg">
          <iframe
            max-width="400"
            src="https://www.youtube.com/embed/46tWETz4-Ao?si=WLhJFPLVIMGFz5Dj"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
