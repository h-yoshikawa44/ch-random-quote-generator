import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import RandomButton from '@/components/Header/RandomButton';

type Props = ComponentPropsWithRef<'header'> & {
  onRandom: VoidFunction;
};

const Header: VFC<Props> = ({ onRandom, ...props }) => {
  return (
    <header css={header} {...props}>
      <RandomButton onClick={onRandom} />
    </header>
  );
};

const header = css`
  text-align: right;
`;

export default Header;
