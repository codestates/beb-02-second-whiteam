import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  position: relative;
  width: 9rem;
  height: 1.8rem;
`;

function Logo() {
  return (
    <div css={wrapper}>
      <Link href="/">
        <a>
          <Image
            src="/image/logo.png"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
