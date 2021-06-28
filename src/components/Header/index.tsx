import { VFC } from 'react';
import { css } from '@emotion/react';
import RandomButton from '@/components/Header/RandomButton';

const Header: VFC = () => {
  return (
    <header css={header}>
      <RandomButton />
    </header>
  );
};

const header = css`
  text-align: right;
`;

export default Header;
