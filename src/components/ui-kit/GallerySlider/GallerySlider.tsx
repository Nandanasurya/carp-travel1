'use client';

import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import data from '@/data/gallery.json';
import useIsMounted from '@/hooks/useIsMounted';
import GalleryMobile from '../GalleryMobile/GalleryMobile';
import SwiperCore from 'swiper';

const GallerySlider = () => {
  const refSlider = useRef<SwiperCore | null>(null);
  const isMounted = useIsMounted();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { slides } = data;

  const handlePrev = () => {
    if (refSlider.current) {
      refSlider.current.slidePrev(300);
    }
  };

  const handleNext = () => {
    if (refSlider.current) {
      refSlider.current.slideNext(300);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isMobile ? (
        <GalleryMobile slides={slides} />
      ) : (
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              refSlider.current = swiper;
            }}
            wrapperTag="ul"
            effect={'coverflow'}
            modules={[EffectCoverflow, Navigation]}
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            breakpoints={{
              768: {
                coverflowEffect: {
                  depth: 0,
                  modifier: 1,
                  rotate: 0,
                  scale: 0.37,
                  slideShadows: false,
                  stretch: 475,
                },
              },
            }}
            className="mt-[72px]"
          >
            {slides.map(({ path, alt }, index) => (
              <SwiperSlide key={index} tag="li">
                <div className="relative right-[100px] w-[415px] h-[294px]">
                  <Image
                    src={`/images/slides/gallery/gallery-${path}@1x.webp`}
                    alt={alt}
                    width={606}
                    height={429}
                    priority
                    sizes="(min-width: 1280px) 606px, (min-width: 768px) 415px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between bottom-4 absolute z-10 left-[45px] right-[48px] xl:left-[211px] xl:right-[184px]">
            <button
              type="button"
              onClick={handlePrev}
              className="text-[33px] font-thin leading-normal uppercase hover:underline focus:underline focus:outline-white"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="text-[33px] font-thin leading-normal uppercase hover:underline focus:underline focus:outline-white"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySlider;
