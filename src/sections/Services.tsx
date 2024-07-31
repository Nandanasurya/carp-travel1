'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Section } from '@/components/base/Section';
import { ServicesSlider } from '@/components/ui-kit/ServicesSlider';

import { useScreenWidth } from '@/hooks';

const Services = () => {
  const [active, setActive] = useState(1);
  const screen = useScreenWidth();
  const [device, setDevice] = useState('mobile');

  useEffect(() => {
    if (screen === 'mobile') {
      setDevice('mobile');
    } else if (screen === 'tablet') {
      setDevice('tablet');
    } else if (screen === 'desktop') {
      setDevice('desktop');
    }
  }, [screen]);

  const handleActiveIndex = (index: number) => {
    setActive(index + 1);
  };

  return (
    <Section id="services" classNames="relative">
      <Image
        src={`/images/bg/services/${active}/services-bg-${active}-${device}@1x.webp`}
        alt="background image services"
        // priority
        fill
        quality={100}
        sizes="100vw"
        className="absolute -z-[1] object-cover"
      />
      <ServicesSlider handleActiveIndex={handleActiveIndex} device={device} />
    </Section>
  );
};

export default Services;
