'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Section from '@/components/base/Section/Section';
import Title from '@/components/base/Title/Title';
import data from '@/data/career.json';
import Description from '@/components/base/Description/Description';
import Advantages from '@/components/ui-kit/Advantages/Advantages';

const Career = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { title1, title2, description1 } = data;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Section id="career">
        <Title title1={title1} title2={title2} />
        <Description
          text={description1.text}
          className="w-[179px] ml-auto mt-6"
        />
        <Advantages />
      </Section>

      {isMobile && (
        <Section id="career">
          <div>Career</div>
        </Section>
      )}
    </>
  );
};

export default Career;
