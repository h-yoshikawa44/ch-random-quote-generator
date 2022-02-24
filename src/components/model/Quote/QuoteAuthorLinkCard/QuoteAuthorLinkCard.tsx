import { VFC } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { ArrowRightAlt } from '@emotion-icons/material-rounded/ArrowRightAlt';

type Props = {
  author: string;
  genre: string;
};

const QuoteAuthorLinkCard: VFC<Props> = ({ author, genre }) => {
  const authorName = author.replace(' ', '_');
  return (
    <Link href={`/${authorName}`}>
      <a css={authorCard} href={`/${authorName}`}>
        <div>
          <p css={authorText}>{author}</p>
          <span css={genreText}>{genre}</span>
        </div>
        <ArrowRightAlt size={24} />
      </a>
    </Link>
  );
};

const authorCard = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 48px 32px;
  color: #4f4f4f;
  background-color: #fff;

  &:hover,
  &:focus {
    color: #f2f2f2;
    background-color: #333;
  }
`;

const authorText = css`
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: inherit;
  transition: color 0.3s;
`;

const genreText = css`
  font-family: Raleway, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #828282;
`;

export default QuoteAuthorLinkCard;
