import Artmake from "../../assets/brand-artmake.png";
import Neoxam from "../../assets/brand-neoxam.png";
import Utosia from "../../assets/brand-utosia.png";
import Circle from "../../assets/brand-circle.png";
import Goldline from "../../assets/brand-goldline.png";
import { Swiper, SwiperSlide } from "swiper/react";

function BrandSection() {
  const brand = [Artmake, Neoxam, Utosia, Circle, Goldline, Artmake];
  return (
    <div className="container pt-40">
      <Swiper
        className="mySwiper container"
        slidesPerView={5}
        spaceBetween={99}
      >
        {brand.map((item) => {
          return (
            <SwiperSlide>
              <img className="max-w-[159px] w-[100%]" src={item} alt="image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default BrandSection;
