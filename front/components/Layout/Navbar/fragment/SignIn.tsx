import { css } from '@emotion/react';
import { Typography } from '@mui/material';

const wrapper = css`
  position: relative;
  margin-left: -1rem;

  ::after {
    content: '';

    width: 110%;
    position: absolute;
    left: -5%;
    bottom: 0.2rem;
    border-bottom: 3.5px solid rgba(186, 42, 43, 0.7);

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

const buttonCss = css`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
`;

function SignIn() {
  const handleClick = () => {};

  return (
    <div css={wrapper}>
      <button css={buttonCss} type="button" onClick={handleClick}>
        <Typography variant="h6" component="div" gutterBottom>
          Sign <span css={{ color: 'rgba(186, 42, 43, 1)' }}>In</span>
        </Typography>
      </button>
    </div>
  );
}

export default SignIn;
