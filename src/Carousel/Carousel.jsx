import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay,Pagination,Navigation } from "swiper";
import Locations from './Locations'
import './Carousel.css'




function Carrusel() {
    return (
      <>
        <Swiper
        slidesPerGroup={4}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}

          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Locations.map(Location => 
            <SwiperSlide id='Cards'>
              <img id='CardsImage' src={Location.image} alt="" />
              <p>{Location.name}</p>
          </SwiperSlide>
)}
;
        </Swiper>
      </>
    );
};
export default Carrusel

