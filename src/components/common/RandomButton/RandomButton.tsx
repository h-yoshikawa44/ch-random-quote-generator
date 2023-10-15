import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { Autorenew } from '@emotion-icons/material-rounded/Autorenew';
import { breakPoint, fonts, colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'button'>;

const RandomButton: FC<Props> = ({ ...props }) => {
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
  font-family: ${fonts.raleway};
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  color: ${colors.grayDarken};
  cursor: pointer;
  background-color: ${colors.white};
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 4%);
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }

  @media (max-width: ${breakPoint.sm - 1}px) {
    font-size: 14px;
  }
`;

const buttonIcon = css`
  margin-left: 8px;
`;

export default RandomButton;
