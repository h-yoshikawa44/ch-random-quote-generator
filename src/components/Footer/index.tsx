import { VFC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

const Footer: VFC = () => {
  return (
    <footer css={[footer, footerText]}>
      <span>
        created by <span css={name}>h-yoshikawa44</span> - devChallenges.io
        |&nbsp;
      </span>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span css={logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

const footer = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
`;

const footerText = css`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const name = css`
  font-weight: 700;
`;

const logo = css`
  height: 1em;
  margin-left: 0.5rem;
`;

export default Footer;
