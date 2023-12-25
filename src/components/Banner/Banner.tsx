import "./Banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { imagePath } from "../../helpers/constants";

export const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="swiper banner__slider"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src={`${imagePath}images/Banner-1.jpg`}
            alt="Roshel first model"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={`${imagePath}images/Banner-2.jpg`}
            alt="Roshel first model at nigth"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src={`${imagePath}images/Banner-3.jpg`}
            alt="Roshel first model behind"
          />
        </SwiperSlide>
      </Swiper>
      <div className="banner__content">
        <h1 className="banner__title">Roshel</h1>
        <Link className="banner__link" to={"/gallery"}>
          <span className="banner__arrow">&#8594;</span>Look more vehicles
        </Link>
      </div>
    </div>
  );
};
