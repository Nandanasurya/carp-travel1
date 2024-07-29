import { useMediaQuery } from 'react-responsive';

const useScreenWidth = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const device =
    (isMobile && 'mobile') ||
    (isTablet && 'tablet') ||
    (isDesktop && 'desktop');
  return device;
};

export default useScreenWidth;
