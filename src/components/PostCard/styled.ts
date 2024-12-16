import { MOBILE_MEDIA_QUERY } from '@/styles';
import { styled } from 'styled-components';

export const PostCardWrap = styled.div`
  min-height: 130px;
  width: 100%;
  position: relative;
`;

export const PostCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: 70vw;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.medium};
    @media ${MOBILE_MEDIA_QUERY} {
      background-color: transparent;
    }
  }
  @media ${MOBILE_MEDIA_QUERY} {
    &:active {
      background-color: ${({ theme }) => theme.color.medium};
    }
  }
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.4;
`;

export const Description = styled.p`
  font-size: 13px;
  margin-bottom: 20px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  width: 100%;
  padding: 0 15px;
  color: ${({ theme }) => theme.color.black_alpha2};
  position: absolute;
  bottom: 10px;
`;

export const Category = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.color.black_alpha2};
`;
