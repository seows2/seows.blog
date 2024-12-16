import ReactRotatingText from 'react-rotating-text';
import { useState } from 'react';
import * as S from './styled';

type PropsType = {
  author: {
    name: string;
    nickname: string;
    stack: string[];
    social: Array<{ name: string; url: string }>;
  };
  button?: JSX.Element;
};

const MainBanner = ({ author, button: Button }: PropsType) => {
  const { name, nickname, stack, social } = author;
  const [index, setIndex] = useState(3);

  const src = ['me.png', 'me2.png', 'me3.png'][index % 3];

  const handleClick = () => {
    setIndex((v) => v + 1);
  };

  return (
    <S.Wrapper>
      <S.IntroWrapper>
        <S.Title>
          <span>안녕하세요!</span>
          <br />
          <strong>
            <ReactRotatingText items={stack} />
          </strong>
          <span>를 좋아하는</span>
          <br />
          <span>개발자 </span>
          <strong>
            <ReactRotatingText items={[name, nickname]} />
          </strong>
          <span>입니다.</span>
        </S.Title>
        <S.SocialWrapper>
          {social.map(({ name, url }) => (
            <S.SocialButton href={url} target="_blank" rel="noopener noreferrer" key={name}>
              <S.Icon className="icon" name={name} />
              <S.Mask className="mask">{name}</S.Mask>
            </S.SocialButton>
          ))}
        </S.SocialWrapper>
        {Button}
      </S.IntroWrapper>
      <S.Image alt="me" src={src} onClick={handleClick} />
    </S.Wrapper>
  );
};

export default MainBanner;
