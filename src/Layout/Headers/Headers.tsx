import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionLink } from '../TransitionLink';
import { MainMenuItem } from '../TransitionLink/styled';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MOBILE_MEDIA_QUERY } from '@/styles';
import { useBooleanState } from '@/hooks/useBooleanState';
import * as S from './styled';

const MENUS = [
  { text: 'POST', to: '/post' },
  { text: 'RESUME', to: '/resume' },
  { text: 'ABOUT', to: '/about' },
];

const threshhold = 200;

export const Headers = ({ isInit }: { isInit: boolean }) => {
  const location = useLocation();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
  const last = useRef(0);
  const [isHide, setIsHide] = useState(false);
  const [isMenuOpen, , closeMenu, toggleMenu] = useBooleanState(false);

  const [moreHide, , setMoreFalse] = useBooleanState(true);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setMoreFalse();
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', casing);
    return () => window.removeEventListener('scroll', casing);
  }, []);

  const casing = () => {
    const position = window.scrollY;
    const up = position < last.current;
    if (up || last.current === 0) {
      setIsHide(false);
    } else if (position > threshhold) {
      setIsHide(true);
    }
    last.current = position;
  };

  return (
    <S.Header $isHide={isHide} $isLoading={isInit} $isMobile={isMobile} $isMenuOpen={isMenuOpen}>
      {isInit && (
        <S.FakeContainer>
          <S.FakeLogo $color="#1C1C1C" to="/">
            SEOWS
          </S.FakeLogo>
        </S.FakeContainer>
      )}
      <S.Container $isMobile={isMobile}>
        {isInit && (
          <S.FakeLogo $color="#F6EFE2" to="/">
            SEOWS
          </S.FakeLogo>
        )}
        {!isInit && (
          <>
            <S.Logo $isMobile={isMobile} to="/">
              SEOWS
            </S.Logo>
            <S.Nav>
              {isMobile && (
                <>
                  <S.MobileMainMenu $isMenuOpen={isMenuOpen} onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                  </S.MobileMainMenu>
                  {!moreHide && (
                    <nav
                      style={{
                        position: 'absolute',
                        top: '30vw',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'block',
                      }}
                    >
                      <S.MainMenu $isMobile={isMobile}>
                        {MENUS.map(({ text, to }) => (
                          <TransitionLink key={text} text={text} to={to} isMobile={isMobile} />
                        ))}
                        <MainMenuItem $isMobile={isMobile}>
                          <S.Contact href="mailto:seows2@naver.com">CONTACT</S.Contact>
                        </MainMenuItem>
                      </S.MainMenu>
                    </nav>
                  )}
                </>
              )}
              {!isMobile && (
                <S.MainMenu>
                  {MENUS.map(({ text, to }) => (
                    <TransitionLink key={text} text={text} to={to} />
                  ))}
                  <MainMenuItem>
                    <S.Contact href="mailto:seows2@naver.com">CONTACT</S.Contact>
                  </MainMenuItem>
                </S.MainMenu>
              )}
            </S.Nav>
          </>
        )}
      </S.Container>
    </S.Header>
  );
};
