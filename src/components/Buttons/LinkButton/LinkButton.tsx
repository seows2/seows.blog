import { useNavigate } from 'react-router-dom';
import * as S from './styled';

type LinkButtonProps = {
  content: string;
  to: string;
};

const LinkButton = ({ content, to }: LinkButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <S.Button onClick={handleClick}>
      <S.Dot className="dot" />
      <S.Text className="text">{content}</S.Text>
    </S.Button>
  );
};

export default LinkButton;
