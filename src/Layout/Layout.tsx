import { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { Headers } from './Headers';
import { useLocation } from 'react-router-dom';
import { useBooleanState } from '../hooks/useBooleanState';

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const location = useLocation();
  const $isAboutPage = location.pathname === '/about';
  const [isInit, , setInitFalse] = useBooleanState(true);
  const [animationEnd, setAnimationEndTrue] = useBooleanState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitFalse();
    }, 1900);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimationEndTrue();
    }, 3000);
  }, []);

  return (
    <Wrap>
      <Headers isInit={isInit} />
      {animationEnd && (
        <Inner $isAboutPage={$isAboutPage}>
          <Component>{children}</Component>
        </Inner>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Inner = styled.div<{ $isAboutPage: boolean }>`
  background-color: ${({ $isAboutPage }) => ($isAboutPage ? 'black' : 'unset')};
  width: ${({ $isAboutPage }) => ($isAboutPage ? '100%' : '70vw')};
  margin: auto;
`;

const Component = styled.section`
  position: relative;
  width: 100%;
  padding-top: 10vw;
`;
