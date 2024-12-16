import { Post } from '@/data/posts';
import * as S from './styled';

type FeaturePostCardProps = {
  post: Post;
};

const FeaturePostCard = ({ post }: FeaturePostCardProps) => {
  const { title, link, date } = post;
  return (
    <S.Wrapper>
      <S.PostCard role="link" href={link} target="_blank" rel="noopener noreferrer">
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.PostCard>
    </S.Wrapper>
  );
};

export default FeaturePostCard;
