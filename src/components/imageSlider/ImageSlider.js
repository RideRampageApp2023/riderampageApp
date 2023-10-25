import * as React from "react";
import { useTheme } from "@mui/material/styles";
import "./ImageSliderStyles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";

import image1 from "../../utils/images/slider/Imagen 1.jpg";
import image2 from "../../utils/images/slider/Imagen 2.jpg";
import image3 from "../../utils/images/slider/Imagen 3.jpg";
import image4 from "../../utils/images/slider/Imagen 4.jpg";
import image5 from "../../utils/images/slider/Imagen 5.jpg";
import image6 from "../../utils/images/slider/Imagen 6.jpg";
import image7 from "../../utils/images/slider/Imagen 7.jpg";
import image8 from "../../utils/images/slider/Imagen 8.jpg";
import image9 from "../../utils/images/slider/Imagen 9.jpg";
import image10 from "../../utils/images/slider/Imagen 10.jpg";
import image11 from "../../utils/images/slider/Imagen 11.jpg";
import image12 from "../../utils/images/slider/Imagen 12.jpg";
import image13 from "../../utils/images/slider/Imagen 13.jpg";
import image14 from "../../utils/images/slider/Imagen 14.jpg";
import image15 from "../../utils/images/slider/Imagen 15.jpg";
import image16 from "../../utils/images/slider/Imagen 16.jpg";
import image17 from "../../utils/images/slider/Imagen 17.jpg";
import image18 from "../../utils/images/slider/Imagen 18.jpg";
import image19 from "../../utils/images/slider/Imagen 19.jpg";
import image20 from "../../utils/images/slider/Imagen 20.jpg";
import image21 from "../../utils/images/slider/Imagen 21.jpg";

function SwipeableTextMobileStepper() {
  return (
    <div className="sliderBackground">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        //modules={[Autoplay]}
        className="mySwiper sliderBackground"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="swiper-slide swiper">
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image6} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image7} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image8} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image9} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image10} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image11} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image12} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper">
          <img src={image13} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image14} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image15} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image16} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image17} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image18} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image19} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image20} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide swiper">
          <img src={image21} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwipeableTextMobileStepper;
