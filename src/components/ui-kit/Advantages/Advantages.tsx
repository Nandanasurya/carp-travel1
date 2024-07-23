import data from '@/data/career.json';

const Advantages = () => {
  const { subTitle, advantages } = data;

  return (
    <div className="w-full">
      <h3 className="text-3xl font-extralight leading-normal uppercase mr-[39px] ml-auto my-9 w-fit">
        {subTitle}
      </h3>
      <ul className="flex flex-col gap-4 w-[181px]">
        {advantages.map((item) => (
          <li key={item.title}>
            <h4 className="text-sm text-right font-normal leading-5 mb-2">
              {item.title}
            </h4>
            <p className="text-xs text-right font-extralight leading-5">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advantages;
