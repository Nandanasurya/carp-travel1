interface IServicesNavProps {
  slides: { title: string }[];
  activeIndex: number;
  handleNavigationClick: (index: number) => void;
}

const ServicesNav = ({
  slides,
  handleNavigationClick,
  activeIndex,
}: IServicesNavProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-6 mb-6">
      {slides.map(({ title }, index) => (
        <li
          key={index}
          className={`flex items-center 
          ${activeIndex === index ? 'services-active' : ''}
        `}
        >
          <button
            type="button"
            onClick={() => handleNavigationClick(index)}
            aria-label={title}
            className={`text-xl text-left font-extralight leading-[17px] uppercase  w-[186px] ${activeIndex === index ? 'flex font-medium opacity-100' : 'opacity-50'}`}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesNav;
