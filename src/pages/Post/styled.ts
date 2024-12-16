import { styled } from 'styled-components';
import { MOBILE_MEDIA_QUERY } from '../../styles';

export const PostMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 100px;
`;

export const PostTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const PostTitle = styled.div`
  margin-bottom: 15px;
  font-size: 30px;
  text-align: center;
`;

export const PostSubTitle = styled.div`
  padding-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;

export const TabWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  top: 0;
  width: '100%';
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 70vw;
  margin-bottom: 12px;
  gap: 24px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 0 15px;

  @media ${MOBILE_MEDIA_QUERY} {
    justify-content: flex-start;
  }
`;

export const Tab = styled.div<{ $isSelected: boolean }>`
  line-height: 50px;
  font-size: 17px;
  cursor: pointer;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.color.black : theme.color.black_alpha2};
`;

export const PostCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
