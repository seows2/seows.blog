import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const PostCard = styled.a`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  gap: 15px;
  align-items: center;
  padding: 8px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.color.medium};
  }
`;

export const Title = styled.div`
  font-size: 18px;
  word-break: break-all;
  line-height: 120%;
  padding: 4px;
`;

export const Date = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.color.black_alpha};
  font-weight: lighter;
  margin-top: 3px;
`;
