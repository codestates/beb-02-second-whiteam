import { css } from '@emotion/react';

import Logo from './fragment/Logo';
import NavLink from './fragment/NavLink';
import SignIn from './fragment/SignIn';

const wrapper = css`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(30px);

  z-index: 10;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  width: 100vw;

  .logo {
    margin: 1.5rem 0 1.2rem 4rem;
  }

  .rightItems {
    width: 20vw;
    display: flex;
    justify-content: space-between;
    margin: 1.4rem 8rem auto;
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
