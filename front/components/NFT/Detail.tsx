import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface detailProps {
  id?: string | string[];
  tokenId?: string | string[];
}

const imageCss = css`
  position: relative;
  height: 70vh;
  width: 100%;
`;

const contentCss = css`
  margin: 5vh auto 30vh auto;
  padding: 0 5rem 0 5rem;
  width: 50rem;

  a:hover {
    color: rgb(186, 42, 43);
    transition: all 0.2s;
  }
`;

const titleCss = css`
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ownerCss = css`
  margin: auto 1.5rem 0 0;
  font-size: 1.1rem;
`;

function Detail({ id, tokenId }: detailProps) {
  // TODO: id, tokenId로 전체 collection에서 nft 정보
  return (
    <Box sx={{ width: '100%', marginTop: '7vh' }}>
      <Grid container rowSpacing="5rem">
        <Grid item xs={12} lg={6}>
          <div css={imageCss}>
            <Image
              src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Grid>
        <Divider sx={{ marginTop: '7vh' }} orientation="vertical" flexItem />
        <Grid item xs={12} lg={5.5}>
          <div css={contentCss}>
            <div css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="/explore">
                <a>
                  <span css={{ fontSize: '1.5rem' }}>collection name</span>
                </a>
              </Link>
              <div css={ownerCss}>
                Owner : &nbsp;
                <Link href="/">
                  <a>0x00000000000000</a>
                </Link>
              </div>
            </div>
            <Typography
              css={titleCss}
              variant="h2"
              gutterBottom
              component="div"
            >
              NFT name
            </Typography>
            <Typography
              sx={{ marginTop: '-0.5rem' }}
              variant="h4"
              gutterBottom
              component="div"
            >
              # 77
            </Typography>
            <Typography sx={{ marginTop: '4rem' }} variant="body1" gutterBottom>
              lorem ipsum dolor sit amet, consectetur adipis ac tur turpis diam
              nonum et justo euismod tempor incididunt ut labore et dolore magna
              aliqulorem ipsum dolor sit amet, consectetur adipis ac tur turpis
              diam nonum et justo euismod tempor incididunt ut labore et dolore
              magna aliqulorem ipsum dolor sit amet, consectetur adipis ac tur
              turpis diam nonum et justo euismod tempor incididunt ut labore et
              dolore magna aliqu
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Detail;
