import { useEffect, useRef } from 'react';
import { OpenGraph } from '@/components/OpenGraph';
import AboutAnimation from './AboutAnimation';
import * as S from './styled';

const About = () => {
  const ref = useRef<AboutAnimation>();

  useEffect(() => {
    ref.current = new AboutAnimation();

    return () => {
      ref.current?.clear();
    };
  }, []);

  return (
    <>
      <OpenGraph title="석이 | About" />
      <S.Hero className="hero">
        <S.HeroHeading>
          당신의 가장 <span id="hero-heading-key-line">창의적인</span>
          <br />
          개발자를 만나보세요.
        </S.HeroHeading>
        <S.HeroBackgroundWrap>
          <S.HeroBackground id="hero-text-background" />
        </S.HeroBackgroundWrap>
        <S.HeroIndicater id="hero-indicator" />
      </S.Hero>
      <S.Pixel className="pixel-perfect">
        <S.PixelSticky>
          <S.PixelStickyText>
            <p>
              저는 디자인적 완벽을
              <br />
              추구합니다.
            </p>
          </S.PixelStickyText>
          <S.PixelGrid id="pixel-grid" />
        </S.PixelSticky>
      </S.Pixel>
      <S.Animation className="animation">
        <S.AnimationSticky>
          <S.AnimationTextWrap>
            <S.AnimationText className="wrapper">
              <S.AnimationWordWrap className="word-wrap">
                <span className="text">새로운&nbsp;</span>
                <span className="overlay" />
              </S.AnimationWordWrap>
              <S.AnimationWordWrap className="word-wrap">
                <span className="text">도전도&nbsp;</span>
                <span className="overlay" />
              </S.AnimationWordWrap>
              <br />
              <S.AnimationWordWrap className="word-wrap">
                <span className="text">결코&nbsp;</span>
                <span className="overlay" />
              </S.AnimationWordWrap>
              <S.AnimationWordWrap className="word-wrap">
                <span className="text">마다하지&nbsp;</span>
                <span className="overlay" />
              </S.AnimationWordWrap>
              <S.AnimationWordWrap className="word-wrap">
                <span className="text">않죠.</span>
                <span className="overlay" />
              </S.AnimationWordWrap>
              <S.AnimationFlourish className="flourish-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 100">
                  <g stroke="#68BDE7" strokeWidth="8" strokeLinecap="round" fillRule="nonzero">
                    <path className="short" d="M4 24L30 8"></path>
                    <path className="long" d="M4 50H46"></path>
                    <path className="short" d="M4 76L30 92"></path>
                  </g>
                </svg>
              </S.AnimationFlourish>
            </S.AnimationText>
          </S.AnimationTextWrap>
          <S.AnimationMotionPath id="motion-path" />
        </S.AnimationSticky>
      </S.Animation>
      <S.Interactive className="interactive">
        <S.InteractiveSticky>
          <S.InteractiveTextWrap>
            <span>
              모두가 즐거워하는
              <br />
              작품을 좋아해요.
            </span>
          </S.InteractiveTextWrap>
          <S.InteractiveGame id="interactive-game" />
        </S.InteractiveSticky>
      </S.Interactive>
      <S.Photography className="photography">
        <S.PhotographyBackground className="photography--background" />
        <S.PhotographyCollage className="photography--collage">
          <img src="img/suo_photo_main.jpeg" alt="고양이1" />
          <img src="img/ha_photo_main.jpg" alt="고양이2" />
          <img src="img/mak_photo_main.jpeg" alt="고양이3" />
          <img src="img/tung_photo_main.jpg" alt="고양이4" />
          <img src="img/zizon_photo_main.jpeg" alt="고양이5" />
          <img src="img/me.jpeg" alt="서우석 사진" />
        </S.PhotographyCollage>
        <S.PhotographyTextWrap>
          <span>
            고양이를 사랑하고
            <br />
            행복한 모험을 즐깁니다.
          </span>
        </S.PhotographyTextWrap>
      </S.Photography>
      <S.Travel className="travel">
        <S.TravelSticky>
          <S.TravelTextWrap>
            <S.TravelText id="travel-intro">항상 두근거리고 새로운</S.TravelText>
          </S.TravelTextWrap>
          <S.TravelAdventuresMask id="adventures-mask" />
          <S.TravelOverlay className="travel--overlay" />
        </S.TravelSticky>
      </S.Travel>
      <S.Contact className="contact">
        <S.ContactSticky>
          <S.ContactTextWrap className="contact--copy">
            <S.ContactText>
              당신과 함께 이야기
              <br />
              해보고 싶어요.
            </S.ContactText>
            <S.ContactCta className="contact--cta">
              <a href="mailto:seows2@naver.com">Say Hello</a>
            </S.ContactCta>
          </S.ContactTextWrap>
        </S.ContactSticky>
      </S.Contact>
      <S.Work className="work">
        <S.WorkTextWrap>
          <h2>최근 작업과 경험들</h2>
        </S.WorkTextWrap>
        <S.WorkGrid>
          <S.WorkItem $full className="work--item">
            <h3>Tmaxsoft</h3>
            <span>2021 – Present</span>
            <hr />
            <h4>Front End Developer</h4>
            <p>
              디자인 팀과 긴밀하게 협업하며 티맥스 디자인 시스템을 구축하고 있으며 제품 사용자들이
              Jeus 및 SuperFrameMaster 제품을 쉽게 사용할 수 있도록 도와주는 어드민 페이지 개발을
              맡고 있습니다.
            </p>
          </S.WorkItem>
          <S.WorkItem $green className="work--item">
            <div>
              <h3>My Cat</h3>
            </div>
            <span>2021</span>
            <hr />
            <p>
              프론트엔드를 막 공부했을 시절 만들었던 프로젝트입니다. CSS 애니메이션과 자바스크립트를
              배우기 위해 진행했었으며 이쁜 코드는 아니지만 FE의 매력을 알게 해준 소중한 작품입니다.
            </p>
            <a
              href="https://seows2.github.io/Cat-Fansite/html/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Result
            </a>
            <a
              href="https://github.com/seows2/Cat-Fansite"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </S.WorkItem>
          <S.WorkItem $blue className="work--item">
            <div>
              <h3>결혼 축하해</h3>
            </div>
            <span>2022</span>
            <hr />
            <p>
              결혼 당사자에게 추억을 간직할 수 있도록 만들어 본 결혼 축하 사이트입니다. 직접
              디자인도 하면서 짬짬이 만들어 보았으나 바쁜 일정에 쫓겨 전달되지 못했고 붕 떠버린
              프로젝트입니다. 언젠가 다시 사용할 일이 있지 않겠냐는 생각과 함께 남겨놓고 있습니다.
            </p>
            <a
              href="https://seows2.github.io/wedding-demo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Result
            </a>
            <a
              href="https://github.com/seows2/wedding-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </S.WorkItem>
          <S.WorkItem $full $black className="work--item">
            <h3>항상 관심있어하는 분야</h3>
            <hr />
            <div>
              <span>Front End Developer</span>
              <span>UX/UI DESIGN</span>
              <span>MOBX</span>
              <span>REACT QUERY</span>
              <span>TYPE SCRIPT</span>
              <span>ANIMATION</span>
              <span>CYPRESS</span>
              <span>BREAD</span>
              <span>ICE CREAM</span>
            </div>
          </S.WorkItem>
        </S.WorkGrid>
      </S.Work>
    </>
  );
};

export default About;
