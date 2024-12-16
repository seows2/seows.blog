import styled from 'styled-components';

export const MainMenuItem = styled.li<{ $isMobile?: boolean }>`
  display: ${({ $isMobile }) => ($isMobile ? 'block' : 'inline-block')};
  margin-left: ${({ $isMobile }) => ($isMobile ? '0' : '2.5vw')};
  margin-bottom: ${({ $isMobile }) => ($isMobile ? '4vw' : '0')};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  border-bottom: 1px solid transparent;
  font-size: ${({ $isMobile }) => ($isMobile ? '5.4vw' : '1.4vw')};
`;

export const Links = styled('div')<{
  $isSelected: boolean;
  $isMobile?: boolean;
}>`
  border-bottom: ${({ $isSelected, theme }) =>
    $isSelected ? `1px solid ${theme.color.white}` : 'none'};
  position: relative;
  color: ${({ theme }) => theme.color.white};
  display: inline-block;
  text-shadow: ${({ theme, $isMobile }) =>
    $isMobile ? `0 6vw ${theme.color.white}` : `0 2vw ${theme.color.white}`};
  height: ${({ $isMobile }) => ($isMobile ? '5.6vw' : '1.6vw')};
  overflow: hidden;
  cursor: pointer;
  margin-bottom: ${({ $isSelected }) => ($isSelected ? '0px' : '1px')};
`;

export const Text = styled.div`
  position: relative;
  display: inline-block;
`;
