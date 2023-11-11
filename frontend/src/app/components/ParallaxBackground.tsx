import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  imageUrl: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ imageUrl }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;

    const handleScroll = () => {
      if (parallaxElement) {
        const scrollPosition = window.scrollY;
        parallaxElement.style.backgroundPositionY = `${-scrollPosition * 0.5}px`;
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="parallax-background"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
};

export default ParallaxBackground;