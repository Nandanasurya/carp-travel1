'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { GalleryMobile } from '../GalleryMobile';
import { ButtonSlide } from '../ButtonSlide';

import { useIsMounted, useScreenWidth } from '@/hooks';

import { dataGallery } from '@/data';

const GallerySlider = () => {
  const refSlider = useRef<SwiperCore | null>(null);
  const isMounted = useIsMounted();
  const screen = useScreenWidth();
  const isMobile = screen === 'mobile';
  const isTablet = screen === 'tablet';

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

  const coverflowEffectSettings = {
    depth: 0,
    modifier: 1,
    rotate: 0,
    scale: isTablet ? 0.335 : 0.5335,
    slideShadows: false,
    stretch: isTablet ? 134 : 153,
  };

  return (
    <>
      {isMobile ? (
        <GalleryMobile slides={slides} />
      ) : (
        <div className="relative overflow-visible">
          <Swiper
            onSwiper={(swiper) => {
              refSlider.current = swiper;
            }}
            wrapperTag="ul"
            effect={'coverflow'}
            modules={[EffectCoverflow, Navigation]}
            slidesPerView={'auto'}
            spaceBetween={24}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={coverflowEffectSettings}
            className="mt-[72px] p-0 xl:mt-6 w-full h-[294px] xl:h-[429px]"
          >
            {slides.map(({ path, alt }, index) => (
              <SwiperSlide
                key={index}
                tag="li"
                className="h-[294px] !w-[415px] xl:h-[429px] xl:!w-[606px] "
              >
                <Image
                  src={`/images/slides/gallery/gallery-${path}@1x.webp`}
                  alt={alt}
                  width={606}
                  height={429}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between bottom-4 absolute z-10 left-[32px] right-[32px] xl:left-[202px] xl:right-[210px] xl:bottom-0">
            <ButtonSlide text={button.back} onClick={handleNext} />
            <ButtonSlide text={button.next} onClick={handlePrev} />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySlider;
