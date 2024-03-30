import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { FEATURES } from "./Constants";

function ImageSwiper() {
  return (
    <>
      <Swiper
        className="mySwiper w-full lg:px-24 py-10"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}>
        {FEATURES.map((feature) => {
          return (
            <SwiperSlide
              key={feature?.id}
              className="flex flex-col bg-center bg-cover w-full h-fit">
              <span className="flex justify-center items-center text-4xl w-full font-bold text-[#ff5f64] mb-8">
                {feature?.title}
              </span>
              <img
                className="block w-full rounded-xl"
                src={feature?.src}
                alt="slide 1"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default ImageSwiper;
