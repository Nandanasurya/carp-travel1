import { Section } from '@/components/base/Section';
import { Title } from '@/components/base/Title';
import { GallerySlider } from '@/components/ui-kit/GallerySlider';

import { dataGallery } from '@/data';

const Gallery = () => {
  const { title1, title2 } = dataGallery;

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
