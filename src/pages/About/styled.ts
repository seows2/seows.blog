import { css, styled } from 'styled-components';
import { MOBILE_MEDIA_QUERY } from '@/styles';

// Hero
export const Hero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.color.real_black};
`;

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.color.real_white};
  font-size: 8vw;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
  opacity: 0;
  z-index: 1;
  margin-top: calc(50vh - 1.5em);
`;

export const HeroBackgroundWrap = styled.div`
  display: block;
  mix-blend-mode: multiply;
  pointer-events: none;
  position: absolute;
  z-index: 3;
`;

export const HeroBackground = styled.canvas`
  width: 100%;
  height: 100%;
  margin-bottom: 0.5vw;
`;

export const HeroIndicater = styled.canvas`
  display: block;
  margin-top: 2rem;
`;

// Pixel
export const Pixel = styled.section`
  align-items: center;
  display: block;
  height: 300vh;
  opacity: 0;
  justify-content: center;
  overflow: initial;
  position: relative;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const PixelSticky = styled.div`
  height: 100vh;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const PixelStickyText = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;

  & > p {
    color: ${({ theme }) => theme.color.real_white};
    font-size: 8vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    text-shadow: 0 0 0.25em ${({ theme }) => theme.color.real_black};
    opacity: 0;
    transform: translateY(100%);
    will-change: transform;
  }
`;

export const PixelGrid = styled.canvas`
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

// animation
export const Animation = styled.section`
  display: block;
  align-items: center;
  background-color: transparent;
  height: 400vh;
  margin-top: -150vh;
  opacity: 0;
  justify-content: center;
  overflow: initial;
  pointer-events: none;
  position: relative;
  z-index: 3;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const AnimationSticky = styled.div`
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
`;

export const AnimationTextWrap = styled.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;
`;

export const AnimationText = styled.p`
  color: ${({ theme }) => theme.color.real_white};
  display: block;
  font-size: 8vw;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
  margin-top: 0.25em;
  text-align: center;

  & > .word-wrap:nth-of-type(1) > .overlay {
    background-color: #68bde7;
  }

  & > .word-wrap:nth-of-type(2) > .overlay {
    background-color: #d66761;
  }

  & > .word-wrap:nth-of-type(3) > .overlay {
    background-color: #c4c4c4;
  }

  & > .word-wrap:nth-of-type(4) > .overlay {
    background-color: #aee8fa;
  }

  & > .word-wrap:nth-of-type(5) > .overlay {
    background-color: #6bd490;
  }
`;

export const AnimationWordWrap = styled.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;

  & > .text {
    opacity: 0;
  }

  & > .overlay {
    background-color: #68bde7;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-101%);
    width: 100%;
    will-change: transform;
    z-index: 1;
  }
`;

export const AnimationFlourish = styled.span`
  display: inline-block;
  height: 1em;
  position: relative;

  & > svg {
    height: 100%;
    left: 0.25em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    & .short {
      stroke-dasharray: 31;
      stroke-dashoffset: 93;
    }
    & .long {
      stroke-dasharray: 42;
      stroke-dashoffset: 126;
    }
  }
`;

export const AnimationMotionPath = styled.canvas`
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

// interactive
export const Interactive = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.color.real_black};
  display: block;
  height: 300vh;
  margin-top: -250vh;
  justify-content: center;
  opacity: 0;
  overflow: initial;
  pointer-events: none;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 0;
  }
`;

export const InteractiveSticky = styled.div`
  height: 100vh;
  position: sticky;
  left: 0;
  overflow: hidden;
  top: 0;
  width: 100%;

  &::after {
    background-image: linear-gradient(transparent, #000);
    bottom: 0;
    content: '';
    display: block;
    height: 50vh;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 4;
  }
`;

export const InteractiveTextWrap = styled.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;

  span {
    color: ${({ theme }) => theme.color.real_white};
    display: block;
    font-size: 8vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    will-change: transform;

    &:focus {
      outline: none;
    }
  }
`;

export const InteractiveGame = styled.canvas`
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

// photography
export const Photography = styled.section`
  background-color: ${({ theme }) => theme.color.real_black};
  opacity: 0;
  overflow: initial;
  pointer-events: none;
  height: 100vh;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 3;
  }
`;

export const PhotographyBackground = styled.div`
  background-color: ${({ theme }) => theme.color.gray_black};
  bottom: 0;
  display: block;
  height: calc(100% + 100vh);
  left: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
  will-change: opacity;
  z-index: 1;
`;

export const PhotographyCollage = styled.div`
  height: 200%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 2;

  img {
    border-radius: 2vw;
    position: absolute;
    opacity: 0;
    transition:
      transform 0.8s cubic-bezier(0.5, 1, 0.5, 1),
      opacity 0.2s cubic-bezier(0.5, 0, 1, 1);
    will-change: transform;

    &:nth-of-type(1) {
      bottom: calc(50% + 120px);
      left: -0.2%;
      transform: translate(-50%, -100%) rotate(-30deg);
      width: 28%;
    }
    &:nth-of-type(2) {
      bottom: calc(50% + 68px);
      left: 39.65%;
      transform: translate(25%, -100%) rotate(20deg);
      transition-delay: 0.2s;
      width: 21%;
    }
    &:nth-of-type(3) {
      bottom: calc(50% + 31px);
      left: 74.16%;
      transform: translate(75%, -100%) rotate(30deg);
      transition-delay: 0.15s;
      width: 21%;
    }
    &:nth-of-type(4) {
      left: 7.98%;
      top: calc(50% + 2px);
      transform: translate(-50%, 100%) rotate(15deg);
      transition-delay: 0.1s;
      width: 21%;
    }
    &:nth-of-type(5) {
      left: 35.13%;
      top: calc(50% + 142px);
      transform: translate(12.5%, 100%) rotate(0deg);
      transition-delay: 0.25s;
      width: 28%;
    }
    &:nth-of-type(6) {
      left: 71.87%;
      top: calc(50% + 117px);
      transform: translate(75%, 100%) rotate(-20deg);
      transition-delay: 50ms;
      width: 21%;
    }
  }

  &.enter img {
    opacity: 1;
    transition:
      transform 0.8s cubic-bezier(0.5, 1, 0.5, 1),
      opacity 0.8s cubic-bezier(0.5, 1, 0.5, 1);

    &:nth-of-type(1) {
      transform: translate(0) rotate(-20deg);
    }
    &:nth-of-type(2) {
      transform: translate(0) rotate(10deg);
    }
    &:nth-of-type(3) {
      transform: translate(0) rotate(30deg);
    }
    &:nth-of-type(4) {
      transform: translate(0) rotate(15deg);
    }
    &:nth-of-type(5) {
      transform: translate(0) rotate(-5deg);
    }
    &:nth-of-type(6) {
      transform: translate(0) rotate(-30deg);
    }
  }
`;

export const PhotographyTextWrap = styled.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 3;

  span {
    color: ${({ theme }) => theme.color.real_white};
    display: block;
    font-size: 7vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    will-change: transform;

    &:focus {
      outline: none;
    }
  }
`;

// travel
export const Travel = styled.section`
  background-color: ${({ theme }) => theme.color.gray_black};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300vh;
  pointer-events: auto;
  position: relative;
`;

export const TravelSticky = styled.div`
  left: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const TravelTextWrap = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  left: 0;
  overflow: hidden;
  top: 0;
  z-index: 5;
`;

export const TravelText = styled.span`
  position: absolute;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.color.real_white};
  display: block;
  font-size: 7vw;
  font-weight: 600;
  left: 50%;
  letter-spacing: -1px;
  line-height: 1;
  top: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;

  &:focus {
    outline: none;
  }
`;

export const TravelAdventuresMask = styled.canvas`
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

export const TravelOverlay = styled.div`
  background-color: ${({ theme }) => theme.color.real_white};
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: opacity;
  z-index: 4;
`;

// contact
export const Contact = styled.section`
  background-color: ${({ theme }) => theme.color.real_white};
  height: 125vh;
  margin-top: -100vh;
  opacity: 0;
  pointer-events: none;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 3;
  }
`;

export const ContactSticky = styled.div`
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
`;

export const ContactTextWrap = styled.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;
`;

export const ContactText = styled.p`
  color: ${({ theme }) => theme.color.real_black};
  display: block;
  font-size: 8vw;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  width: 100%;
  will-change: opacity;
  will-change: transform;

  &:focus {
    outline: none;
  }
  & span {
    will-change: transform;
  }
`;

export const ContactCta = styled.div`
  display: inline-block;
  margin-top: 72px;
  position: relative;
  a {
    display: inline-block;
    background-color: #aee8fa;
    border-radius: 12px;
    color: #0a1e31;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 28px;
    text-decoration: none;
    transition:
      background-color 0.2s cubic-bezier(0.5, 1, 0.5, 1),
      color 0.2s cubic-bezier(0.5, 1, 0.5, 1);
    &:hover {
      background-color: #336484;
      color: #eaf4fe;
    }

    &:focus {
      background-color: #336484;
      color: #eaf4fe;
      box-shadow:
        0 0 0 4px #fff,
        0 0 0 8px #000;
      outline: none;
    }
  }

  &:before {
    border: 2px dashed #242528;
    border-radius: 12px;
    content: '';
    display: block;
    height: calc(100% - 4px);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.9875);
    width: calc(100% - 4px);
    z-index: -1;
  }
`;

// work
export const Work = styled.section`
  background-color: #f9f9f9;
  min-height: 100vh;
  overflow: hidden;
  padding: 128px 20px;

  &:focus {
    outline: none;
  }
`;

export const WorkTextWrap = styled.div`
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.color.gray_black};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin-bottom: 40px;
  }
`;

export const WorkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 764px;
  width: 100%;
`;

const Green = css`
  background-color: red;
  background-color: #a2f6cf;
  color: #0f270c;

  hr {
    background-color: #6bd490;
  }

  a {
    background-color: #0f270c;
    color: #ecfeef;

    &:hover {
      background-color: #417944;
      color: #ecfeef;
    }
    &:focus {
      background-color: #417944;
      color: #ecfeef;
      box-shadow:
        0 0 0 4px #a2f6cf,
        0 0 0 8px #000;
      outline: none;
    }
  }
`;

const Blue = css`
  background-color: red;
  background-color: #aee8fa;
  color: #0a1e31;

  hr {
    background-color: #68bde7;
  }

  a {
    background-color: #0a1e31;
    color: #eaf4fe;

    &:hover {
      background-color: #336484;
      color: #eaf4fe;
    }
    &:focus {
      background-color: #336484;
      color: #eaf4fe;
      box-shadow:
        0 0 0 4px #aee8fa,
        0 0 0 8px #000;
      outline: none;
    }
  }
`;

const Black = css`
  background-color: red;
  background-color: #1b1b1b;
  color: #fff;

  hr {
    background-color: #484848;
  }
  div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    span {
      border: 1px solid #f5eee6;
      border-radius: 24px;
      padding: 0 1rem;
      font-size: 1.2rem;
    }
  }
`;

export const WorkItem = styled.article<{
  $full?: boolean;
  $green?: boolean;
  $blue?: boolean;
  $black?: boolean;
}>`
  width: calc(50% - 72px);
  ${({ $full }) => $full && { ...{ width: '100%' } }}
  align-items: flex-start;
  background-color: #fff;
  border-radius: 32px;
  color: #242424;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 32px 32px 24px;
  will-change: transform;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  hr {
    background-color: #c4c4c4;
    border: none;
    height: 1px;
    margin-bottom: 16px;
    margin-top: 0;
    width: 100%;
  }

  a {
    background-color: #c4c4c4;
    border-radius: 12px;
    color: #242424;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    padding: 14px 28px;
    text-decoration: none;
    transition:
      background-color 0.2s cubic-bezier(0.5, 1, 0.5, 1),
      color 0.2s cubic-bezier(0.5, 1, 0.5, 1);

    &:hover {
      background-color: #242424;
      color: #f9f9f9;
    }
    &:focus {
      background-color: #242424;
      color: #f9f9f9;
      box-shadow:
        0 0 0 4px #000,
        0 0 0 8px #fff;
      outline: none;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: auto;
    width: 100%;

    & + a {
      margin-top: 24px;
    }
  }

  & > :last-child {
    margin-bottom: 8px;
  }

  ${({ $green }) => $green && { ...Green }}
  ${({ $blue }) => $blue && { ...Blue }}
  ${({ $black }) => $black && { ...Black }}

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
  }
`;
