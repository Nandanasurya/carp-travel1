import Description from '@/components/base/Description/Description';
import Section from '@/components/base/Section/Section';
import Title from '@/components/base/Title/Title';
import data from '@/data/about.json';

const About = () => {
  const {
    title1,
    title2,
    description1,
    description2,
    description3,
    description4,
  } = data;

  return (
    <Section id="about">
      <Title title1={title1} title2={title2} />
      <Description
        text={description1.text}
        bold={description1.bold}
        className="w-[180px] mt-2 mb-5"
      />
      <Description
        text={description2.text}
        bold={description2.bold}
        className="w-[180px] mb-10"
      />
      <div className="w-[180px] ml-auto">
        <p className="text-sm font-normal leading-5 uppercase">
          {description3.text1}
        </p>
        <p className="text-sm font-normal leading-5 uppercase text-right">
          {description3.text2}
        </p>
        <p className="text-sm font-extralight leading-5 tracking-[-0.01em]">
          {description3.text3}
        </p>
      </div>
      <Description
        text={description4.text}
        bold={description4.bold}
        className="mt-10"
      />
    </Section>
  );
};

export default About;
