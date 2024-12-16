import styled from 'styled-components';
import { MOBILE_MEDIA_QUERY } from '@/styles';

export const Button = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  border: 0;
  line-height: 3.5vw;
  height: 3.5vw;
  padding: 0 2vw 0 4.5vw;
  cursor: pointer;

  &:hover::before {
    width: 100%;
    transform: scale(0.9);
    transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    .dot {
      opacity: 0.0001;
      transform: translateX(100%);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &:hover {
    .dot {
      background-color: ${({ theme }) => theme.color.medium};
      transform: translateY(-50%) translateX(0.5vw) scale(0.3225);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .text {
      color: ${({ theme }) => theme.color.medium};
      transform: translateX(-0.5vw);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 3.5vw;
    box-sizing: border-box;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    transform: scale(1);
    background-color: ${({ theme }) => theme.color.black};
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }
`;

export const Dot = styled.span`
  position: absolute;
  display: inline-block;
  border-radius: 100%;
  will-change: transform;
  overflow: hidden;
  background-color: transparent;
  box-sizing: border-box;
  left: 0.5vw;
  top: 50%;
  width: 2.5vw;
  height: 2.5vw;
  transform: translateY(-50%) translateX(0) scale(1);
  box-shadow: ${({ theme }) => `0 0 0 1px ${theme.color.medium}`};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateX(0);
    background-image: url(img/arrow-right-button-white.svg);
    background-size: 50% auto;
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    will-change: transform;
  }
`;
export const Text = styled.span`
  position: relative;
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  font-size: 2vw;
  transform: translateX(0);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 2.5vw;
  }
`;
