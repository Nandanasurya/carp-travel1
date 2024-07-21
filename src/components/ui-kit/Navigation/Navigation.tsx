'use client';

import { Link } from 'react-scroll';
import data from '@/data/common.json';

const Navigation: React.FC = () => {
  const { navigation } = data;

  return (
    <nav>
      {navigation.map((nav) => (
        <Link
          key={nav.to}
          activeClass="active"
          to={nav.to}
          href="#"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          ignoreCancelEvents={true}
          //   onSetActive={handleSetActive}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
