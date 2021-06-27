import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'blockquote'>;

const QuoteBlock: FC<Props> = ({ children, ...props }) => {
  return (
    <blockquote css={quoteBlock} {...props}>
      <p css={quoteText}>{`“${children}”`}</p>
    </blockquote>
  );
};

const quoteBlock = css`
  position: relative;

  &::before {
    position: absolute;
    left: -96px;
    width: 8px;
    height: 100%;
    content: '';
    background-color: #f7df94;
  }

  @media (max-width: 600px) {
    &::before {
      left: -40px;
      width: 4px;
    }
  }
`;

const quoteText = css`
  max-width: 616px;
  font-family: Raleway, sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 120%;

  @media (max-width: 1280px) {
    font-size: 32px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export default QuoteBlock;
