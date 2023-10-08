import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-3xl !leading-tight md:text-5xl px-4 max-w-3xl text-center ">
                Cherish wedding magic with pro photography
              </h1>
            </div>
            <img
              className="brightness-[0.2]"
              src="https://i.ibb.co/WPjjKgq/wedding-photography-cover.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-3xl md:text-5xl px-4 max-w-3xl text-center !leading-tight">
                Embrace bridal beauty for your day.
              </h1>
            </div>
            <img
              className="brightness-[0.2]"
              src="https://i.ibb.co/D9DvtfD/bride-grooming-cover.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-3xl md:text-5xl px-4 max-w-3xl text-center !leading-tight">
                Craft joyful kids' birthday celebrations
              </h1>
            </div>
            <img
              className="brightness-[0.2]"
              src="https://i.ibb.co/NnyKnjQ/kids-birthday-party-cover.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-3xl md:text-5xl px-4 max-w-3xl text-center !leading-tight">
                Delicious catering options tailored to your event
              </h1>
            </div>
            <img
              className="brightness-[0.2]"
              src="https://i.ibb.co/brF6V6Y/catering-services-cover.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
