import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Header = styled.header<{
  $isHide: boolean;
  $isLoading: boolean;
  $isMobile: boolean;
  $isMenuOpen: boolean;
}>`
  position: fixed;
  width: 100%;
  z-index: 80;
  height: ${({ $isLoading, $isMobile, $isMenuOpen }) =>
    $isLoading ? '100vh' : $isMobile ? ($isMenuOpen ? '120vw' : '10vw') : '6vw'};
  padding: 0;
  transform: ${({ $isHide }) => ($isHide ? 'translateY(-150%)' : 'translateY(0)')};
  transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Container = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ $isMobile }) => ($isMobile ? 'flex-start' : 'center')};
  height: 100%;
  background-color: ${({ theme }) => theme.color.black_alpha};
  padding: ${({ $isMobile }) => ($isMobile ? '4.5vw 10vw 0' : '0 5vw')};
  clip-path: ${({ $isMobile }) =>
    $isMobile ? 'inset(2vw 2vw 2vw 2vw round 2vw)' : 'inset(0.5vw 0.5vw 0.5vw 0.5vw round 0.5vw)'};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateY(0);
`;

const heightChange = keyframes`
  0% {
    height: 100%;
  }

  100% {
    height: 0;
  }
`;

export const FakeContainer = styled.div`
  position: absolute;
  z-index: 1000;
  width: 90vw;
  padding: 0 5vw;
  height: 100%;
  animation: 1.5s ${heightChange} ease-in-out 0.5s;
  background-color: ${({ theme }) => theme.color.medium};
  clip-path: inset(0.5vw 0.5vw 0.5vw 0.5vw round 0.5vw);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const FakeLogo = styled(Link)<{ $color: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5vw;
  color: ${({ $color }) => $color};
`;

export const Logo = styled(Link)<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? '5vw' : '2.3vw')};
  height: ${({ $isMobile }) => ($isMobile ? '5vw' : 'auto')};
  color: ${({ theme }) => theme.color.white};
  width: auto;
  text-align: center;
  line-height: 1;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const MainMenu = styled.ul<{ $isMobile?: boolean }>`
  align-items: center;
  margin-right: 0;
  list-style: none;
  display: ${({ $isMobile }) => ($isMobile ? 'block' : 'flex')};
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : '')};
`;

export const Contact = styled.a`
  border: 1px solid;
  border-radius: 1.75vw;
  background-color: transparent;
  padding: 0 1.75vw;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${({ theme }) => theme.color.white};

  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.medium};
  }
`;

export const MobileMainMenu = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  height: 5vw;
  width: 7vw;
  cursor: pointer;

  & > span:first-child {
    top: -1px;
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? 'translate(0, 2.5vw) rotate(-45deg)' : 'none'};
  }

  & > span:nth-child(2) {
    opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '1')};
  }

  & > span:last-child {
    bottom: -1px;
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? 'translate(0, -2.5vw) rotate(45deg)' : 'none'};
  }

  & > span {
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    width: 100%;
    height: 2px;
    display: flex;
    background-color: ${({ theme }) => theme.color.white};
  }
`;
