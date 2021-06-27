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
`;

const quoteText = css`
  max-width: 616px;
  font-family: Raleway, sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 120%;
`;

export default QuoteBlock;
