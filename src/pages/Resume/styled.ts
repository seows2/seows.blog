import { styled } from 'styled-components';
import { MOBILE_MEDIA_QUERY } from '../../styles';

export const ResumeIntro = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 130px;

  & > h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
  }

  & > p {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 48px;
    margin-top: 48px;
    max-width: 800px;
    white-space: pre-line;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    & > h1 {
      font-size: 36px;
      margin-bottom: 8px;
    }

    & > div > a {
      font-size: 18px;
    }

    & > p {
      font-size: 18px;
    }
  }
`;

export const ResumeLink = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.color.gray_black};
  font-weight: 500;
  position: relative;
  text-decoration: none;
  z-index: 1;
  margin-bottom: 10px;

  & > a {
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.black_alpha2};
  }

  & > a::before {
    background-color: rgba(36, 36, 36, 0.1);
    border-radius: 12px;
    display: block;
    height: 44px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease;
    width: calc(100% + 28px);
    will-change: opacity;
    z-index: -1;
    content: '';
  }

  & > a:hover::before {
    opacity: 1;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    & > a {
      font-size: 14px;
    }
  }
`;

export const ResumeSkill = styled.section`
  margin-bottom: 48px;

  & > h2 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`;

export const ResumeSkillGroup = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.color.gray_black}`};
  display: flex;
  padding-top: 48px;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-wrap: wrap;
    padding-top: 24px;
  }
`;

export const ResumeSkillGroupItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.333%;

  & > h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 2px;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    padding: 0;

    & > li {
      font-size: 16px;
      font-weight: 400;
      line-height: 2;
    }
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const ResumeEducation = styled.section`
  margin-bottom: 48px;

  & > h2 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`;

export const ResumeWork = styled.section`
  margin-bottom: 48px;

  & > h2 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`;

export const ResumeWorkRows = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeWorkRowsItem = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.color.gray_black}`};
  display: flex;
  margin-bottom: 48px;
  padding-top: 48px;
  width: 100%;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-wrap: wrap;
    margin-bottom: 24px;
    padding-top: 24px;
  }
`;

export const ResumeWorkRowsItemTitle = styled.div`
  width: 33.333%;
  position: sticky;
  top: 100px;
  height: 100%;

  & > h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  & > span {
    font-size: 16px;
    font-weight: 500;
  }
  @media ${MOBILE_MEDIA_QUERY} {
    position: relative;
    width: 100%;
    top: auto;
  }
`;

export const ResumeWorkRowsItemDescription = styled.div`
  width: 66.666%;
  @media ${MOBILE_MEDIA_QUERY} {
    margin-top: 16px;
    width: 100%;
  }
`;

export const ResumeWorkRowsItemDescriptionContents = styled.div`
  margin-bottom: 24px;

  & > h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 2;
    margin-bottom: 18px;
  }

  & > h5 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 2;
    margin-bottom: 4px;
  }
`;

export const ResumeWorkRowsItemPlaceholder = styled.div`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.black_alpha2};
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin: 24px 0;
  background: ${({ theme }) => theme.color.black_alpha2};
`;

export const Improve = styled.span`
  display: inline-block;
`;
