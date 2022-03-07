import { css } from '@emotion/react';

import Logo from './fragment/Logo';
import NavLink from './fragment/NavLink';
import SignIn from './fragment/SignIn';
import Search from './fragment/Search';

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
`;

const rightItemsCss = css`
  width: 33rem;
  display: flex;
  justify-content: space-between;
  margin: 1.4rem 6rem auto;
`;

function Navbar() {
  return (
    <div css={wrapper}>
      <div className="logo">
        <Logo />
      </div>
      <div css={rightItemsCss}>
        <Search />
        <NavLink text="Explore" />
        <NavLink text="Community" />
        <SignIn />
      </div>
    </div>
  );
}

export default Navbar;
