import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { ErrorOutline } from '@emotion-icons/material-rounded/ErrorOutline';

type Props = ComponentPropsWithRef<'div'>;

const Alert: VFC<Props> = ({ ...props }) => {
  return (
    <div css={alert} role="alert" {...props}>
      <ErrorOutline css={alertIcon} size={24} />
      <p css={alertText}>
        Failed to obtain quote data. Please try again in a few minutes.
      </p>
    </div>
  );
};

const alert = css`
  display: inline-flex;
  align-items: center;
  padding: 16px;
  background-color: #fdecea;
  border-radius: 8px;
`;

const alertIcon = css`
  color: #f44336;
`;

const alertText = css`
  margin-left: 16px;
  font-family: Raleway, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
`;

export default Alert;
