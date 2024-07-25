'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import Image from 'next/image';
import data from '@/data/gallery.json';

const GallerySlider = () => {
  const refSlider = useRef(null);
  const { slides } = data;

  //   const handlePrev = () => {
  //     refSlider.current.swiper.slidePrev(300);
  //   };
  //   const handleNext = () => {
  //     refSlider.current.swiper.slideNext(300);
  //   };

  return (
    <Swiper
      direction="vertical"
      slidesPerView={3}
      spaceBetween={24}
      modules={[Navigation]}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      style={{ height: '100vh' }}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`/images/slides/gallery/gallery-${item.path}@1x.webp`}
            alt={item.alt}
            width={606}
            height={429}
            priority
            className="w-full h-full"
            sizes="(min-width: 768px) 415px, (min-width: 1280px) 607px"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
