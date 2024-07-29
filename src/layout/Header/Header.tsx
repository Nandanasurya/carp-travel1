'use client';

import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import { BtnMenu } from '@/components/ui-kit/BtnMenu';
import { Logo } from '@/components/ui-kit/Logo';
import { Menu } from '@/components/ui-kit/Menu';
import { Navigation } from '@/components/ui-kit/Navigation';

import { useIsMounted } from '@/hooks';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMounted = useIsMounted();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <header className="absolute w-full">
      <div className="flex justify-between max-w-[480px] px-5 py-9 mx-auto md:max-w-[704px] md:px-0 md:py-6 xl:max-w-[1232px]">
        <Logo />
        {isMobile ? (
          <>
            <BtnMenu text="menu" onClick={toggleMenu} />
            {showMenu && <Menu onClose={toggleMenu} showMenu={showMenu} />}
          </>
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
};

export default Header;
