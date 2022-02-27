import { useState } from 'react';
import { useAtom } from 'jotai';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Drawer as MuiDrawer, Button, IconButton } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Menu from './Menu';

const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'hidden',
  // maxHeight: 'calc(100% - 8.5rem - 1px)',
  marginTop: 'calc(4.5rem + 1px)',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'hidden',
  // maxHeight: 'calc(100% - 8.5rem - 1px)',
  marginTop: 'calc(4.5rem + 1px)',
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  whiteSpace: 'nowrap',

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = (open: boolean) => () => {
    setOpen(open);
    console.log();
  };

  return (
    <>
      <Drawer variant="permanent" open={open} onClose={toggleSidebar(false)}>
        <Menu open={open} toggleSidebar={toggleSidebar} />
      </Drawer>
    </>
  );
}

export default Sidebar;
