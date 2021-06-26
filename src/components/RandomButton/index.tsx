import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Autorenew } from '@emotion-icons/material-rounded/Autorenew';

type Props = ComponentPropsWithRef<'button'>;

const RandomButton: VFC<Props> = ({ ...props }) => {
  return (
    <button css={randomButton} {...props}>
      random
      <Autorenew css={buttonIcon} size={16} />
    </button>
  );
};

const randomButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  font-family: Raleway, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  color: #4f4f4f;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const buttonIcon = css`
  margin-left: 8px;
`;

export default RandomButton;
