// 'use client';

import Section from '@/components/base/Section/Section';
import GallerySlider from '@/components/ui-kit/GallerySlider/GallerySlider';
import Title from '@/components/base/Title/Title';
import data from '@/data/gallery.json';

const Gallery = () => {
  const { title1, title2 } = data;

  return (
    <Section id="gallery">
      <Title
        title1={title1}
        title2={title2}
        className="md:text-center xl:text-start"
      />
      <GallerySlider />
    </Section>
  );
};

export default Gallery;
