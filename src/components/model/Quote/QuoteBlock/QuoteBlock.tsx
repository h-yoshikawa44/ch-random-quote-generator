import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import Skeleton from '@/components/common/Skeleton';
import { breakPoint, colors } from '@/styles/constants';
import { raleway } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'blockquote'> & {
  isLoading?: boolean;
};

const QuoteBlock: FC<Props> = ({ isLoading = false, children, ...props }) => {
  if (isLoading) {
    return (
      <blockquote css={[quoteBlock, quoteSkeletonBox]} {...props}>
        <Skeleton css={quoteSkeleton} width="100%" />
        <Skeleton css={quoteSkeleton} width="100%" />
        <Skeleton css={quoteSkeleton} width="100%" />
      </blockquote>
    );
  }

  return (
    <blockquote css={quoteBlock} {...props}>
      <p css={quoteText}>{`“${children}”`}</p>
    </blockquote>
  );
};

const quoteBlock = css`
  padding-left: 96px;
  border-left: 8px solid ${colors.borderQuote};

  @media (width < ${breakPoint.sm}px) {
    padding-left: 40px;
    border-width: 4px;
  }
`;

const quoteSkeletonBox = css`
  display: grid;
  grid-row-gap: 16px;

  @media (width < ${breakPoint.sm}px) {
    grid-row-gap: 8px;
  }
`;

const quoteSkeleton = css`
  max-width: 616px;
  height: 36px;

  @media (width < ${breakPoint.lg}px) {
    height: 32px;
  }

  @media (width < ${breakPoint.sm}px) {
    height: 20px;
  }
`;

const quoteText = css`
  max-width: 616px;
  font-family: ${raleway.style.fontFamily};
  font-size: 36px;
  font-weight: 500;
  line-height: 120%;

  @media (width < ${breakPoint.lg}px) {
    font-size: 32px;
  }

  @media (width < ${breakPoint.sm}px) {
    font-size: 20px;
  }
`;

export default QuoteBlock;
