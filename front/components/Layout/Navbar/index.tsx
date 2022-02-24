import { css } from '@emotion/react';

import Logo from './Logo';
import NavLink from './NavLink';
import SignIn from './SignIn';

const wrapper = css`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 100vw;

  .logo {
    margin: 1.5rem 0 1.2rem 2rem;
  }

  .rightItems {
    width: 20vw;
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 8rem auto;
  }
`;

function Navbar() {
  return (
    <div css={wrapper}>
      <div className="logo">
        <Logo />
      </div>
      <div className="rightItems">
        <NavLink text="Explore" />
        <NavLink text="Community" />
        <SignIn />
      </div>
    </div>
  );
}

export default Navbar;
