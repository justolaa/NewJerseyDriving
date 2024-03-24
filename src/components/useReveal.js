import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useReveal = (element, config) => {
  useEffect(() => {
    gsap.fromTo(
      element.current,
      { y: 100, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        delay: config.delay,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: {
          trigger: element.current,
          start: config.start,
          markers: false,
        },
      }
    );
  }, [element, config]);
};

export default useReveal;