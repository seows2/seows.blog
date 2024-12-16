import type { Category, Post } from '@/data/posts';
import * as S from './styled';

type PostCardProps = {
  post: Post;
  onClickCategory(category: Category): void;
};

const PostCard = ({ post, onClickCategory }: PostCardProps) => {
  const { title, link, date, category, briefContents } = post;

  return (
    <S.PostCardWrap>
      <S.PostCard key={title} href={link} target="_blank" rel="noopener noreferrer">
        <S.Title className="title">{title}</S.Title>
        <S.Description>{briefContents}</S.Description>
      </S.PostCard>
      <S.Info>
        <div>{date}</div>
        <S.Category onClick={() => onClickCategory(category)}>{category}</S.Category>
      </S.Info>
    </S.PostCardWrap>
  );
};

export default PostCard;
