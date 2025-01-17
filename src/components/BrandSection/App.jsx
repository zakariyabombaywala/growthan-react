import Artmake from "../../assets/brand-artmake.png";
import Neoxam from "../../assets/brand-neoxam.png";
import Utosia from "../../assets/brand-utosia.png";
import Circle from "../../assets/brand-circle.png";
import Goldline from "../../assets/brand-goldline.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BrandSection() {
  const brand = [
    Artmake,
    Neoxam,
    Utosia,
    Circle,
    Goldline,
    Artmake,
    Neoxam,
    Utosia,
    Circle,
    Goldline,
  ];
  return (
    <div className="container pt-20 lg:pt-40">
      <Swiper
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2.1,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {brand.map((item) => {
          return (
            <SwiperSlide>
              <img className="" src={item} alt="image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default BrandSection;
