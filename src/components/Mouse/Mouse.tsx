import { animated } from '@react-spring/web';
import { useTrailMouse } from './useTrailMouse';
import * as S from './styled';

export type MousePos = { x: number; y: number; opacity: number };

const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Mouse = () => {
  const [trail] = useTrailMouse();

  return (
    <S.MouseWrapper>
      {trail.map(({ xy, opacity }, idx) => (
        <animated.div className="mouse" key={idx} style={{ transform: xy.to(trans), opacity }} />
      ))}
    </S.MouseWrapper>
  );
};

export default Mouse;
