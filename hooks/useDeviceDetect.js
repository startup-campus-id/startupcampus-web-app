import { useEffect, useState } from 'react';

export const mobileType = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
};

const getDeviceDetect = (width) => {
  if (width < 768) {
    return mobileType.mobile;
  } else if (width < 1024) {
    return mobileType.tablet;
  } else {
    return mobileType.desktop;
  }
};

const useDeviceDetect = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [device, setDevice] = useState(getDeviceDetect(window.innerWidth));

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const d = getDeviceDetect(window.innerWidth);
      setDevice(d);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return { device, windowSize };
};

export default useDeviceDetect;
