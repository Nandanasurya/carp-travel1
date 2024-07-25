'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import data from '@/data/gallery.json';

const GalleryCard = () => {
  const { slides } = data;
  console.log(slides);

  return (
    <div>
      {slides.map((item) => (
        <SwiperSlide key={item.path}>
          <Image
            src={`/images/slides/gallery/gallery-${item.path}-mobile@1x.webp`}
            alt={item.alt}
            width={606}
            height={429}
          />
        </SwiperSlide>
      ))}
    </div>
  );
};

export default GalleryCard;
