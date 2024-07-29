import data from '@/data/career.json';

const Advantages = () => {
  const { subTitle, advantages } = data;

  return (
    <div className="w-full md:w-[221px] xl:w-auto xl:ml-10">
      <h3 className="text-3xl font-extralight leading-normal uppercase mr-[39px] ml-auto my-9 w-fit md:mr-0 md:my-0 md:mb-14 xl:text-4xl xl:leading-[39px] xl:mb-[45px] xl:ml-[84px]">
        {subTitle}
      </h3>
      <ul className="flex flex-col gap-4 w-[181px] md:w-auto md:gap-6 xl:w-auto">
        {advantages.map((item) => (
          <li key={item.title} className="xl:flex xl:gap-6">
            <h4 className="text-sm text-right font-normal leading-5 mb-2 md:text-base xl:text-lg xl:leading-6 xl:text-right xl:w-[253px] xl:mb-0">
              {item.title}
            </h4>
            <p className="text-xs text-right font-extralight leading-5 xl:text-left xl:w-[285px]">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advantages;
