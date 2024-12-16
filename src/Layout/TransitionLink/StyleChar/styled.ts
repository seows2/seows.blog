import styled, { keyframes } from 'styled-components';

const bouncingCharAnimationFront = keyframes`
    0% { transform: translateY(0%); }
    100% { transform: translateY(-100%); }
`;

const bouncingCharAnimationBack = keyframes`
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0%); }
`;

export const StyleChar = styled.span<{
  $active: boolean;
  $delay: number;
  $duration: number;
}>`
  display: inline-block;

  animation-name: ${({ $active }) =>
    $active ? bouncingCharAnimationFront : bouncingCharAnimationBack};
  animation-timing-function: ease-in-out;
  animation-delay: ${({ $delay }) => $delay}ms;
  animation-duration: ${({ $duration }) => $duration}ms;
`;
