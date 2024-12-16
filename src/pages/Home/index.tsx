import LinkButton from '@/components/Buttons/LinkButton';
import FeaturePostColumn from '@/components/FeaturePostColumn';
import MainBanner from '@/components/MainBanner';
import { OpenGraph } from '@/components/OpenGraph';
import { AUTHOR } from '@/data/author';
import { POSTS } from '@/data/posts';
import { groupBy } from '@/utils/groupBy';

const Home = () => {
  const recentPosts = POSTS.slice(0, 3);
  const {
    React: reactPosts,
    잡담: talkPosts,
    회고: livePosts,
  } = groupBy(POSTS, ({ category }) => category);

  return (
    <>
      <OpenGraph title="석이 | Home" />
      <MainBanner author={AUTHOR} button={<LinkButton content="조금 더 알아보기" to="/about" />} />
      <FeaturePostColumn title="Recent Post" posts={recentPosts} />
      <FeaturePostColumn title="공부" posts={reactPosts.slice(0, 3)} />
      <FeaturePostColumn title="회고" posts={livePosts.slice(0, 3)} />
      <FeaturePostColumn title="잡담" posts={talkPosts.slice(0, 3)} />
    </>
  );
};

export default Home;
