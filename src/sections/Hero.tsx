'use client';

import Description from '@/components/base/Description/Description';
import Section from '@/components/base/Section/Section';
import data from '@/data/hero.json';
import { Link } from 'react-scroll';

const Hero = () => {
  const {
    title1,
    title2,
    subTitle1,
    subTitle2,
    subTitle3,
    locations,
    description,
    button,
    to,
  } = data;

  return (
    <Section id="hero">
      <div className="flex flex-col gap-6 pt-[105px]">
        <div className="ml-auto">
          <h2 className="text-[37px] font-medium leading-none">
            {subTitle1}&#32;
            <span className="font-thin tracking-[1.665px]">{subTitle2}</span>
          </h2>
          <p className="text-xs font-light leading-[1.3] tracking-[9.48px]">
            {subTitle3}
          </p>
        </div>
        <h1 className="text-[40px] font-medium leading-[1.4] tracking-[-1.6px] uppercase">
          {title1}&#32;<span className="font-thin">{title2}</span>
        </h1>
        <p className="text-[10px] font-extralight leading-4 w-[157px]">
          {locations}
        </p>
        <Description text={description} className="text-justify" />
        <Link
          to={to}
          href="#"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          ignoreCancelEvents={true}
          className="flex justify-center items-center h-[53px] bg-heroBtn hover:bg-heroBtnHover focus:bg-heroBtnHover focus:outline-white btn-hero relative"
        >
          {button}
        </Link>
      </div>
    </Section>
  );
};

export default Hero;
