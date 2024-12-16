import * as S from './styled';
import { Post } from '../../data/posts';
import FeaturePostCard from '../FeaturePostCard';

type FeaturePostColumnProps = {
  title: string;
  posts: Post[];
};

const FeaturePostColumn = ({ title, posts }: FeaturePostColumnProps) => {
  return (
    <S.Wrapper>
      <S.Title aria-label={title}>{title}</S.Title>
      {posts.map((post, idx) => (
        <FeaturePostCard key={idx} post={post} />
      ))}
    </S.Wrapper>
  );
};

export default FeaturePostColumn;
