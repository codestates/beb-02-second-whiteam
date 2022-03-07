import Link from 'next/link';

import { css } from '@emotion/react';
import { Typography } from '@mui/material';

interface NavLinkProps {
  text: string;
}

const wrapper = css`
  position: relative;

  ::after {
    content: '';

    width: 110%;
    position: absolute;
    left: -5%;
    bottom: 0.2rem;
    border-bottom: 3.5px solid rgba(186, 42, 43, 0.8);

    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
    transform-origin: 0% 50%;
  }
  :hover {
    ::after {
      transform: scaleX(1);
    }
  }
`;

function NavLink({ text }: NavLinkProps) {
  const url = '/' + text.toLowerCase();

  return (
    <div css={wrapper}>
      <Link href={url}>
        <a>
          <Typography variant="h6" component="div" gutterBottom>
            {text}
          </Typography>
        </a>
      </Link>
    </div>
  );
}

export default NavLink;
