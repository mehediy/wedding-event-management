import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-5xl max-w-3xl font-medium text-center leading-tight">
                Capture the magic of your wedding day with professional
                photography
              </h1>
              <button className="btn">Contact</button>
            </div>
            <img
              className="brightness-[0.2]"
              src="https://i.ibb.co/WPjjKgq/wedding-photography-cover.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-5xl max-w-3xl font-medium text-center leading-tight">
                Get ready for your special day with our expert bride grooming
                services
              </h1>
              <button className="btn">Contact</button>
            </div>
            <img
              className="brightness-[0.2]"
              src="https://i.ibb.co/D9DvtfD/bride-grooming-cover.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-5xl max-w-3xl font-medium text-center leading-tight">
                Create unforgettable and fun-filled birthday parties for
                children
              </h1>
              <button className="btn">Contact</button>
            </div>
            <img
              className="brightness-[0.2]"
              src="https://i.ibb.co/NnyKnjQ/kids-birthday-party-cover.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[700px]">
            <div className="absolute z-10 h-full w-full text-white flex items-center justify-center flex-col gap-6">
              <h1 className="text-5xl max-w-3xl font-medium text-center leading-tight">
                Delicious catering options tailored to your event
              </h1>
              <button className="btn">Contact</button>
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
