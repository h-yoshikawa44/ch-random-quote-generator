import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import QuoteBlock from '@/components/QuoteBlock';

const data = [
  {
    _id: '5eb17aaeb69dc744b4e72a58',
    quoteText:
      "Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without the talking about the other.",
  },
  {
    _id: '5eb17aaeb69dc744b4e72a4a',
    quoteText:
      'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
  },
  {
    _id: '5eb17aaeb69dc744b4e72a70',
    quoteText:
      "In this business, by the time you realize you're in trouble, it's too late to save yourself. Unless you're running scared all the time, you're gone.",
  },
];

const AuthorQuotes = () => {
  const router = useRouter();
  const authorName = (router.query.author as string)?.replace('_', ' ');
  return (
    <Layout>
      <main css={main}>
        <h2 css={authorNameText}>{authorName}</h2>
        {data.map((quote) => {
          return <QuoteBlock key={quote._id}>{quote.quoteText}</QuoteBlock>;
        })}
      </main>
    </Layout>
  );
};

const main = css`
  display: grid;
  grid-row-gap: 136px;
  justify-content: center;
  padding: 160px 0;
`;

const authorNameText = css`
  font-family: Raleway, sans-serif;
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  text-align: left;
`;

export default AuthorQuotes;
