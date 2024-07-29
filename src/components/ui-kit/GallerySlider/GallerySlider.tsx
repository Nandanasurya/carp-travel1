'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { GalleryMobile } from '../GalleryMobile';
import { ButtonSlide } from '../ButtonSlide';

import { useIsMounted } from '@/hooks';

import { dataGallery } from '@/data';

const GallerySlider = () => {
  const refSlider = useRef<SwiperCore | null>(null);
  const isMounted = useIsMounted();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { slides, button } = dataGallery;

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
              1280: {
                coverflowEffect: {
                  depth: 0,
                  modifier: 1,
                  rotate: 0,
                  scale: 0.5,
                  slideShadows: false,
                  stretch: 836,
                },
              },
            }}
            className="mt-[72px] xl:mt-6"
          >
            {slides.map(({ path, alt }, index) => (
              <SwiperSlide key={index} tag="li">
                <div className="relative right-[100px] w-[415px] h-[294px] xl:w-[606px] xl:h-[429px] xl:right-[108px]">
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
          <div className="flex justify-between bottom-4 absolute z-10 left-[45px] right-[48px] xl:left-[202px] xl:right-[210px] xl:bottom-0">
            <ButtonSlide text={button.back} onClick={handlePrev} />
            <ButtonSlide text={button.next} onClick={handleNext} />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySlider;
