import { useState, useEffect } from "react";
import { galleryImages } from "../../helpers/constants";
import "./Gallery.scss";
import { GalleryModal } from "../../components/GalleryModal";
import AOS from "aos";
import "aos/dist/aos.css";

export const Gallery = () => {
  const [selectedImagePath, setSelectedImagePath] = useState("");

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <main className="main">
        <section className="section gallery">
          <h2 className="section__title">Gallery</h2>
          <div className="row">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="column width-1-2-md width-1-5-lg"
                data-aos="zoom-in"
              >
                <img
                  className="gallery__item"
                  src={image.path}
                  alt="Roshel image"
                  onClick={() => {
                    setSelectedImagePath(image.path);
                    setModalActive(true);
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <GalleryModal active={modalActive} setActive={setModalActive}>
        <img
          className="gallery__item"
          src={selectedImagePath}
          alt="Roshel vehicle"
        />
      </GalleryModal>
    </div>
  );
};
