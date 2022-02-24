import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import RandomButton from '@/components/common/RandomButton';

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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 64px;
  padding: 0 4%;
  text-align: right;
`;

export default Header;
