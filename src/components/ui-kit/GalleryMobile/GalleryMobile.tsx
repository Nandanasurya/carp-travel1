import Image from 'next/image';

interface IGalleryMobileProps {
  slides: { path: string; alt: string }[];
}

const GalleryMobile = ({ slides }: IGalleryMobileProps) => {
  return (
    <ul className="flex flex-col gap-6 mt-6">
      {slides.slice(0, 3).map(({ path, alt }, index) => (
        <li key={index}>
          <Image
            src={`/images/slides/gallery/gallery-${path}@1x.webp`}
            alt={alt}
            width={606}
            height={429}
          />
        </li>
      ))}
    </ul>
  );
};

export default GalleryMobile;
