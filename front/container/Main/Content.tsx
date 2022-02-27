import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import React from 'react';

const wrapper = css`
  margin: 12rem 0 28rem 10rem;
`;

const gradientCss = css`
  background-image: linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  text-fill-color: transparent;
  animation: hue 10s infinite linear;

  @keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }
`;

function Content() {
  return (
    <div css={wrapper}>
      <Typography variant="h1" component="div" gutterBottom>
        Trade NFTs, Communicate <br /> and Get{' '}
        <span css={gradientCss}>Rewords</span>
      </Typography>
    </div>
  );
}

export default Content;
