// 'use client';

import Section from '@/components/base/Section/Section';
import Slider from '@/components/base/Slider/Slider';
import Title from '@/components/base/Title/Title';
import GalleryCard from '@/components/ui-kit/GalleryCard/GalleryCard';
import data from '@/data/gallery.json';

const Gallery = () => {
  const { title1, title2 } = data;

  return (
    <Section id="gallery">
      <Title title1={title1} title2={title2} />
      <Slider />
    </Section>
  );
};

export default Gallery;
