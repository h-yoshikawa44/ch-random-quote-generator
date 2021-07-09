import { VFC, ComponentPropsWithRef } from 'react';
import { jsx, css, keyframes } from '@emotion/react';

type Props = (
  | (ComponentPropsWithRef<'div'> & {
      component?: 'div';
    })
  | (ComponentPropsWithRef<'span'> & {
      component: 'span';
    })
) & {
  width?: number | string;
  height?: number | string;
};

const Skeleton: VFC<Props> = ({
  component = 'div',
  width = 'auto',
  height = 'auto',
  ...props
}) => {
  return jsx(component, {
    css: skeleton(width, height),
    ...props,
  });
};

const skeleton = (width: number | string, height: number | string) => {
  const convertWidth = typeof width === 'number' ? `${width}px` : width;
  const convertHeight = typeof height === 'number' ? `${height}px` : height;
  return css`
    position: relative;
    width: ${convertWidth};
    height: ${convertHeight};
    overflow: hidden;
    background: #d9d9d9;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      content: '';
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.5),
        transparent
      );
      animation: ${skeletonAnimation} 1.2s linear infinite;
    }
  `;
};

const skeletonAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export default Skeleton;
