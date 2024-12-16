import styled, { keyframes } from 'styled-components';

const blinkingCursor = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  margin: 130px 0;
`;

export const IntroWrapper = styled.div`
  position: relative;
  font-size: 3.75vw;

  .react-rotating-text-cursor {
    animation: ${blinkingCursor} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s infinite;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 4vw;
`;

export const Image = styled.img`
  width: 30vw;
  max-width: 230px;
  position: absolute;
  right: 0vw;
  top: 20vw;
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 5vw;
  font-size: 4vw;
  margin-bottom: 2vw;
`;

export const SocialButton = styled.a`
  position: relative;
  display: block;
  width: fit-content;
  cursor: pointer;

  &:hover {
    .mask {
      color: ${({ theme }) => theme.color.white};
      width: 100%;
      background-color: ${({ theme }) => theme.color.black};
    }

    .icon {
      z-index: 10;
      width: 8vw;
      height: 8vw;
      transform: translate(-3vw, -3.5vw) rotate(-20deg);
    }
  }
`;

export const Mask = styled.div`
  padding: 1vw 0 1vw 1vw;
  color: ${({ theme }) => theme.color.black};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 0.5vw;
  width: 0%;
`;

export const Icon = styled.div<{ name: string }>`
  position: absolute;
  box-sizing: border-box;
  background-image: ${({ name }) =>
    name === 'Github' ? 'url(img/github-mark.svg)' : 'url(img/naver-mark.png)'};
  background-size: 50% auto;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`;
