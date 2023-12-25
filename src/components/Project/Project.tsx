import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import "./Project.scss";
import { animationDirection } from "../../helpers/functions";

type Props = {
  projectsItem: {
    title: string;
    description: string;
    slide: { id: number; path: string }[];
  };
  direction: string;
};

export const Project: React.FC<Props> = ({ projectsItem, direction }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="product">
      <div className={direction}>
        <div className="column width-1-1 width-1-2-md">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={2000}
            className="swiper product__slider"
          >
            <SwiperSlide className="product__slide swiper-slide">
              <img
                className="product__img"
                src={projectsItem.slide[0].path}
                alt={projectsItem.title}
              />
            </SwiperSlide>
            <SwiperSlide className="product__slide swiper-slide">
              <img
                className="product__img"
                src={projectsItem.slide[1].path}
                alt="Roshel model vehicle"
              />
            </SwiperSlide>
            <SwiperSlide className="product__slide swiper-slide">
              <img
                className="product__img"
                src={projectsItem.slide[2].path}
                alt="Roshel model vehicle"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="column width-1-1 width-1-2-md"
          data-aos={animationDirection(direction)}
        >
          <h3 className="product__title">{projectsItem.title}</h3>
          <p className="product__description">{projectsItem.description}</p>
        </div>
      </div>
    </div>
  );
};
