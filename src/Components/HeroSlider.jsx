// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router';

const HeroSlider = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="w-full bg-[#101214]/20 rounded-lg p-5"
      >
        <SwiperSlide>
          <div className="p-5 flex flex-col-reverse sm:flex-row gap-3 sm:gap-10 items-center justify-center">
            <div className="flex flex-col gap-4 max-w-md">
              <h2 className='text-3xl font-semibold'>Slider text </h2>
              <p className='text-lg font-medium'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minus!</p>
              <Link className='btn btn-primary'>Book Now</Link>
            </div>
            <div className="w-full max-w-sm flex items-center justify-center">
              <img className='w-full rounded-2xl' src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 flex flex-col-reverse sm:flex-row gap-10 items-center justify-center">
            <div className="flex flex-col gap-4 max-w-md">
              <h2 className='text-3xl font-semibold'>Slider text </h2>
              <p className='text-lg font-medium'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minus!</p>
              <Link className='btn btn-primary'>Book Now</Link>
            </div>
            <div className="w-full max-w-sm flex items-center justify-center">
              <img className='w-full rounded-2xl' src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default HeroSlider;
