import { useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import { Title } from '@/components/base/Title';
import { ServicesNav } from '../ServicesNav';

import { dataServices } from '@/data';

interface IServicesSliderProps {
  handleActiveIndex: (index: number) => void;
  device: string;
}

const ServicesSlider = ({
  handleActiveIndex,
  device,
}: IServicesSliderProps) => {
  const refSlider = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { title1, title2, slides } = dataServices;

  const formatNumber = (number: number) => {
    return String(number).padStart(2, '0');
  };

  const handleNavigationClick = (index: number) => {
    if (refSlider.current) {
      refSlider.current.slideTo(index + 5);
      setActiveIndex(index);
      handleActiveIndex(index);
    }
  };

  return (
    <Swiper
      wrapperTag="ul"
      effect={'fade'}
      modules={[EffectFade]}
      slidesPerView={1}
      spaceBetween={24}
      loop={true}
      centeredSlides={true}
      grabCursor={false}
      fadeEffect={{
        crossFade: true,
      }}
      allowTouchMove={false}
      // initialSlide={activeIndex}
      onSwiper={(swiper) => {
        refSlider.current = swiper;
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} tag="li">
          <div className="md:flex md:gap-[170px] md:mb-10 xl:gap-[162px] xl:mb-5">
            <Title title1={title1} title2={title2} />
            <p className="text-[43px] text-right font-thin leading-normal mt-6 mb-4 md:text-[67px] md:m-0 md:leading-[78px] xl:text-[98px] xl:leading-none">
              {formatNumber(activeIndex + 1)}/
              <span className="text-heroBtnHover">
                {formatNumber(slides.length)}
              </span>
            </p>
          </div>
          <div className="md:flex md:gap-5">
            <Image
              src={`/images/slides/services/${activeIndex + 1}/services-0${activeIndex + 1}-${device}@2x.webp`}
              alt={slides[activeIndex]?.subTitle}
              width={280}
              height={213}
              // priority
              className="h-full w-full md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
            />
            <div className="flex flex-col h-[368px] mt-3 md:mt-0  md:w-[221px] md:h-[370px] xl:w-full xl:h-auto">
              <div className="md:flex md:flex-col-reverse xl:flex-row-reverse xl:justify-end xl:gap-[60px]">
                <p
                  className={`text-xs text-right font-extralight leading-6 tracking-[2.4px] md:text-left xl:h-full xl:w-full  ${activeIndex === 1 && 'xl:pt-[48px]'}
                  ${activeIndex === 2 && 'xl:pt-[94px]'}
                  ${activeIndex === 3 && 'xl:pt-[166px]'}
                  ${activeIndex === 4 && 'xl:pt-[216px]'}`}
                >
                  {slides[activeIndex]?.subTitle}
                </p>
                <ServicesNav
                  slides={slides}
                  activeIndex={activeIndex}
                  handleNavigationClick={handleNavigationClick}
                />
              </div>
              <p className="text-sm font-extralight mt-auto md:text-[13px] xl:text-lg xl:leading-6 xl:w-[293px] xl:ml-auto">
                {slides[activeIndex]?.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesSlider;
