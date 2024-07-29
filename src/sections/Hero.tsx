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
      <div className="flex flex-col gap-6 pt-[49px] relative md:pt-[60px] md:flex-row md:gap-0 md:justify-between xl:pt-[26px]">
        <div className="md:flex md:flex-col md:gap-[68px] xl:gap-[148px]">
          <h1 className="mt-[76px] text-[40px] font-medium leading-[1.4] tracking-[-1.6px] uppercase md:mt-0 md:w-[426px] md:text-[67px] md:leading-normal md:tracking-[-2.68px] xl:w-[646px] xl:text-[98px] xl:leading-[1.2]">
            {title1}&#32;<span className="font-thin">{title2}</span>
          </h1>
          <p className="mt-6 text-[10px] font-extralight leading-4 w-[157px] md:mt-0 md:text-sm md:leading-4 md:tracking-[1.26px] md:w-[264px] xl:w-auto xl:text-base">
            {locations}
          </p>
        </div>
        <div className="md:w-[230px] xl:w-[294px] xl:flex xl:flex-col xl:justify-between">
          <div className="absolute top-[49px] right-0 md:relative md:top-auto ">
            <h2 className="text-[37px] font-medium leading-none md:text-[67px] md:leading-normal xl:text-[98px] xl:leading-[1.2]">
              {subTitle1}&#32;
              <span className="font-thin tracking-[1.665px] md:tracking-[8.71px] xl:tracking-normal">
                {subTitle2}
              </span>
            </h2>
            <p className="text-xs font-light leading-[1.3] tracking-[9.48px] md:text-sm md:leading-normal md:tracking-[25.9px] xl:text-base xl:tracking-[36.48px]">
              {subTitle3}
            </p>
          </div>
          <Description
            text={description}
            className="text-justify mb-6 md:mb-7 md:mt-14 xl:mt-auto"
          />
          <Link
            to={to}
            href="#"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            ignoreCancelEvents={true}
            className="flex justify-center items-center h-[53px] bg-heroBtn hover:bg-heroBtnHover focus:bg-heroBtnHover focus:outline-white btn-hero relative text-lg font-bold leading-[48px] md:h-[50px] xl:h-[71px] xl:text-[32px]"
          >
            {button}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
