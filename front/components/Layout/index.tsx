import { css } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from './Navbar/index';
import Footer from './Footer';
import lightTheme from '../../styles/theme/lightTheme';

interface LayoutProps {
  children?: React.ReactNode;
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .children {
    flex: 1;
  }
`;

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <div css={wrapper}>
        <Navbar />
        <div className="children">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
