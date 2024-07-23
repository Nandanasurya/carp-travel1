'use client';

import { useState, useEffect } from 'react';
import BtnMenu from '@/components/ui-kit/BtnMenu/BtnMenu';
import Logo from '@/components/ui-kit/Logo/Logo';
import Menu from '@/components/ui-kit/Menu/Menu';
import Navigation from '@/components/ui-kit/Navigation/Navigation';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <header className="absolute w-full">
      <div className="flex justify-between max-w-[480px] px-5 py-9 mx-auto">
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
