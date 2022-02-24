import { css } from '@emotion/react';

import MarqueeImages from './MarqueeImages';

const wrapper = css`
  width: 100vw;
  height: 75vh;
  overflow: hidden;
  margin-top: -0.5rem;
`;

function Banner() {
  return (
    <div css={wrapper}>
      <MarqueeImages />
      <MarqueeImages />
      <MarqueeImages />
      <MarqueeImages />
      <MarqueeImages />
    </div>
  );
}

export default Banner;
