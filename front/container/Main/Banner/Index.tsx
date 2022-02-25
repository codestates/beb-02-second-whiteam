import { css } from '@emotion/react';

import MarqueeImages from './MarqueeImages';

const wrapper = css`
  width: 100vw;
  height: 65vh;
  overflow: hidden;
  margin-top: -0.5rem;
  /* border-bottom: 1px solid; */
`;

function Banner() {
  return (
    <div css={wrapper}>
      <MarqueeImages />
      <MarqueeImages />
      <MarqueeImages />
      <MarqueeImages />
    </div>
  );
}

export default Banner;
