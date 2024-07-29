import Link from 'next/link';
import Image from 'next/image';

import { dataCommon } from '@/data';

const Logo = () => {
  const { src, alt } = dataCommon.logo;

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
