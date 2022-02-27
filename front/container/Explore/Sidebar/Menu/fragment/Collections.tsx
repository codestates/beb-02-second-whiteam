import { useState } from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
  IconButton,
} from '@mui/material';

import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  PlaylistAddCheckOutlined,
} from '@mui/icons-material';

interface CollectionsProps {
  open: boolean;
  toggleSidebar: (x: boolean) => () => void;
}

function Collections({ open, toggleSidebar }: CollectionsProps) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={open ? handleClick : toggleSidebar(true)}>
          <ListItemIcon>
            <PlaylistAddCheckOutlined />
          </ListItemIcon>
          <ListItemText primary={'Collection'} />
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open && expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
export default Collections;
