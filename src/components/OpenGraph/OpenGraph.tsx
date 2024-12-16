import { Helmet } from 'react-helmet';

type OpenGraphProps = {
  title: string;
};

export const OpenGraph = (props: OpenGraphProps) => {
  const { title } = props;
  return (
    <Helmet
      htmlAttributes={{ lang: 'ko' }}
      title={title}
      meta={[
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: `og:description`,
          content: '개발자 석이의 포트폴리오',
        },
      ]}
    />
  );
};
