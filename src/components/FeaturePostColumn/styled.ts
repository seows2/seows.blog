import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  width: fit-content;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.black_alpha};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 25px;
`;
