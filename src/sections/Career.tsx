'use client';

import { useMediaQuery } from 'react-responsive';
import Section from '@/components/base/Section/Section';
import Title from '@/components/base/Title/Title';
import data from '@/data/career.json';
import Advantages from '@/components/ui-kit/Advantages/Advantages';
import CareerForm from '@/components/ui-kit/CareerForm/CareerForm';
import useIsMounted from '@/hooks/useIsMounted';

const Career = () => {
  const isMounted = useIsMounted();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { title1, title2, description1 } = data;

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Section id="career">
        <div className="md:flex md:justify-between md:mb-3 xl:mb-8">
          <Title title1={title1} title2={title2} />
          <p className="text-sm font-extralight leading-5 w-[179px] ml-auto mt-6 md:m-0 md:text-[13px] xl:text-lg xl:leading-6 xl:w-[293px]">
            {description1.text}
          </p>
        </div>
        <div className="md:flex md:gap-5 xl:gap-6">
          <Advantages />
          {!isMobile && <CareerForm />}
        </div>
      </Section>

      {isMobile && (
        <Section id="career">
          <CareerForm />
        </Section>
      )}
    </>
  );
};

export default Career;
