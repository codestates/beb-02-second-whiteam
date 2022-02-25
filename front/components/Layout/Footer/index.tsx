import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  max-width: 100vw;
  margin: 0 5rem 1rem 5rem;
  vertical-align: middle;
`;

const iconCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5rem;

  img {
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <div css={wrapper}>
      <Typography
        css={{ lineHeight: '3rem' }}
        variant="h6"
        component="div"
        gutterBottom
      >
        ©2022 whiteam. All Rights Reserved.
      </Typography>
      <div css={iconCss}>
        <a
          href="https://github.com/codestates/beb-02-second-whiteam"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Image src="/icons/github.svg" width="24" height="24" />
        </a>
        <a
          href="https://2-now.notion.site/whiteam-e62696777adc4f328af96e6f9ea07537"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Image src="/icons/notion.svg" width="24" height="24" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
