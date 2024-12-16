import { groupBy } from '@/utils/groupBy';
import { OpenGraph } from '../../components/OpenGraph';
import * as S from './styled';
import { Category, POSTS } from '@/data/posts';
import { useState } from 'react';
import PostCard from '@/components/PostCard';

type PostCategory = Category | 'All';

const CATEGORY: PostCategory[] = ['All', 'React', '잡담', '회고'];

const Post = () => {
  const [curCategory, setCurCategory] = useState<PostCategory>('All');

  const groupPost = groupBy(POSTS, ({ category }) => category);

  const posts = curCategory === 'All' ? POSTS : groupPost[curCategory];

  const handleClickCategory = (category: PostCategory) => {
    setCurCategory(category);
  };

  return (
    <>
      <OpenGraph title="석이 | Post" />
      <S.PostMain>
        <S.PostTitleWrap>
          <S.PostTitle>{curCategory}</S.PostTitle>
          <S.PostSubTitle>{posts.length} posts</S.PostSubTitle>
        </S.PostTitleWrap>
        <S.TabWrap>
          <S.Tabs>
            {CATEGORY.map((category, idx) => (
              <S.Tab
                key={idx}
                onClick={() => handleClickCategory(category)}
                $isSelected={category === curCategory}
              >
                {category}
              </S.Tab>
            ))}
          </S.Tabs>
        </S.TabWrap>
        <S.PostCardsWrapper>
          {posts.map((post) => (
            <PostCard
              key={post.title}
              post={post}
              onClickCategory={(category) => handleClickCategory(category)}
            />
          ))}
        </S.PostCardsWrapper>
      </S.PostMain>
    </>
  );
};

export default Post;
