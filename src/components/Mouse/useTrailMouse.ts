import { useEffect } from 'react';
import { useTrail } from '@react-spring/web';

const fastPointer = { tension: 1200, friction: 40 };
const slowPointer = { mass: 10, tension: 200, friction: 50 };

export const useTrailMouse = () => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    from: { opacity: 0, xy: [0, 0] },
    config: i === 0 ? fastPointer : slowPointer,
  }));

  const handleMouseMove = (e: MouseEvent) => {
    if (
      e.clientX < 10 ||
      e.clientX > window.innerWidth - 10 ||
      e.clientY < 10 ||
      e.clientY > window.innerHeight - 10
    ) {
      handleMouseOut();
    } else {
      api.start({ xy: [e.clientX - 5, e.clientY - 5], opacity: 1 });
    }
  };

  const handleMouseOut = () => {
    api.set({ opacity: 0 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return [trail];
};
