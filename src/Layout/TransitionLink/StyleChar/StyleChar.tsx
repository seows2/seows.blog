import * as S from './styled';

type PropsType = {
  char: string;
  delay: number;
  duration: number;
  active: boolean;
};

export const StyleChar = ({ char, delay, duration, active }: PropsType) => {
  return (
    <S.StyleChar $delay={delay} $duration={duration} $active={active}>
      {char}
    </S.StyleChar>
  );
};
