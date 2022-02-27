import { useState } from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
} from '@mui/material';

import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

import BuyNow from './fragment/BuyNow';
import Price from './fragment/Price';
import Collections from './fragment/Collections';

interface menuProps {
  open: boolean;
  toggleSidebar: (x: boolean) => () => void;
}

function Menu({ open, toggleSidebar }: menuProps) {
  return (
    <>
      <List>
        <ListItem
          disablePadding
          secondaryAction={
            open && (
              <IconButton onClick={toggleSidebar(false)}>
                <ArrowBackIosNewSharpIcon
                  sx={{
                    color: 'black',
                    fontSize: 'medium',
                    mr: '-0.25rem',
                  }}
                />
              </IconButton>
            )
          }
        >
          <ListItemButton onClick={toggleSidebar(true)}>
            <ListItemIcon>
              <FilterAltSharpIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Filter" />
          </ListItemButton>
        </ListItem>

        <BuyNow open={open} toggleSidebar={toggleSidebar} />

        <Price open={open} toggleSidebar={toggleSidebar} />

        <Collections open={open} toggleSidebar={toggleSidebar} />
      </List>
    </>
  );
}

export default Menu;
