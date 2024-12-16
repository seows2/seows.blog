import { useLocation, useNavigate } from 'react-router-dom';
import { StyleChar } from './StyleChar';
import { useBooleanState } from '@/hooks/useBooleanState';
import * as S from './styled';

type PropsType = {
  text: string;
  to: string;
  isMobile?: boolean;
};

const delay = 15;
const duration = 230;

export const TransitionLink = ({ text, to, isMobile }: PropsType) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMouseEnter, handleMouseEnter, handleMouseOut] = useBooleanState();
  const $isSelected = to === pathname;

  const handleClick = () => {
    navigate(to);
  };

  const chars = () =>
    text
      .split('')
      .map((char, i) => (
        <StyleChar
          key={i}
          char={char}
          delay={delay * i}
          duration={duration}
          active={isMouseEnter}
        />
      ));

  return (
    <S.MainMenuItem $isMobile={isMobile}>
      <S.Links
        onClick={handleClick}
        $isMobile={isMobile}
        $isSelected={$isSelected}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseOut}
      >
        <>{chars()}</>
      </S.Links>
    </S.MainMenuItem>
  );
};
