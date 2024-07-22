import Link from 'next/link';
import Image from 'next/image';
import data from '@/data/common.json';

const Logo = () => {
  const { src, alt } = data.logo;

  return (
    <Link href="/" aria-label={alt}>
      <Image
        src={src}
        alt={alt}
        width={61}
        height={34}
        priority
        className="h-[34px] w-[61px]"
      />
    </Link>
  );
};

export default Logo;
