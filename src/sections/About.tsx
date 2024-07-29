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
      <div className="md:flex md:justify-between md:relative xl:justify-start xl:gap-6">
        <Title title1={title1} title2={title2} />
        <div className="w-[180px] mt-2 mb-10 md:mb-0 md:w-[220px] md:mt-2 xl:w-[292px]">
          <Description
            text={description1.text}
            bold={description1.bold}
            className="mb-5 md:mb-4 xl:mb-6"
          />
          <Description text={description2.text} bold={description2.bold} />
        </div>
      </div>
      <div className="xl:flex xl:flex-row-reverse xl:justify-between">
        <div className="w-[180px] ml-auto md:ml-0 md:absolute md:left-[32px] md:bottom-[-202px] md:w-[221px] xl:mt-auto xl:w-[296px] xl:relative xl:top-0 xl:bottom-0 xl:left-0">
          <p className="text-sm font-normal leading-5 uppercase md:text-base xl:text-lg">
            {description3.text1}
          </p>
          <p className="text-sm font-normal leading-5 uppercase text-right md:text-base xl:text-lg">
            {description3.text2}
          </p>
          <p className="text-sm font-extralight leading-5 tracking-[-0.01em] md:text-base xl:text-lg">
            {description3.text3}
          </p>
        </div>
        <Description
          text={description4.text}
          bold={description4.bold}
          className="mt-10 md:w-[463px] md:ml-auto md:mt-16 xl:mt-[72px] xl:ml-0 xl:w-[605px]"
        />
      </div>
    </Section>
  );
};

export default About;
