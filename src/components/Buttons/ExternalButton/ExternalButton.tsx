import * as S from './styled';

type ExternalButtonProps = {
  content: string;
  to: string;
};

const ExternalButton = ({ content, to }: ExternalButtonProps) => {
  return (
    <S.ExternalButton href={to} target="_blank" rel="noopener noreferrer">
      <S.Dot className="dot" />
      <S.Text className="text">{content}</S.Text>
    </S.ExternalButton>
  );
};

export default ExternalButton;
