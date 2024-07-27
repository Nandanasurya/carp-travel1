import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import data from '@/data/services.json';
import Title from '@/components/base/Title/Title';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import ServicesNav from '../ServicesNav/ServicesNav';

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
  const { title1, title2, slides } = data;

  const formatNumber = (number: number) => {
    return String(number).padStart(2, '0');
  };

  const handleNavigationClick = (index: number) => {
    if (refSlider.current) {
      refSlider.current.slideTo(index);
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
      initialSlide={activeIndex}
      onSwiper={(swiper) => {
        refSlider.current = swiper;
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} tag="li">
          <div>
            <Title title1={title1} title2={title2} />
            <p className="text-[43px] text-right font-thin leading-normal mt-6 mb-4">
              {formatNumber(activeIndex + 1)}/
              <span className="text-heroBtnHover">
                {formatNumber(slides.length)}
              </span>
            </p>
          </div>
          <Image
            src={`/images/slides/services/${activeIndex + 1}/services-0${activeIndex + 1}-${device}@2x.webp`}
            alt={slide.subTitle}
            width={280}
            height={213}
            priority
            className="h-full w-full"
          />
          <div className="flex flex-col h-[368px] mt-3">
            <p className="text-xs text-right font-extralight leading-6 tracking-[2.4px] ">
              {slides[activeIndex]?.subTitle}
            </p>
            <ServicesNav
              slides={slides}
              activeIndex={activeIndex}
              handleNavigationClick={handleNavigationClick}
            />
            <p className="text-sm font-extralight mt-auto">
              {slides[activeIndex]?.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesSlider;
