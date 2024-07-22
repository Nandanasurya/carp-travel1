import { Link } from 'react-scroll';
import data from '@/data/common.json';

interface INavigationProps {
  onClick?: () => void;
}

const Navigation = ({ onClick }: INavigationProps) => {
  const { navigation } = data;

  return (
    <nav className="flex flex-col gap-12 my-auto items-center md:flex-row md:gap-14">
      {navigation.map(({ to, title }) => (
        <Link
          key={to}
          activeClass="active"
          to={to}
          href="#"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          ignoreCancelEvents={true}
          onClick={onClick}
          className="flex text-lg tracking-[1.8px] font-normal md:text-sm md:tracking-[1.4px] hover:underline focus:underline focus:outline-white"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
