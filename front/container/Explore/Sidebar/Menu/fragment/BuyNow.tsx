import { useState } from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Switch,
} from '@mui/material';

import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

import Collections from './Collections';

interface menuProps {
  open: boolean;
  toggleSidebar: (x: boolean) => () => void;
}

function BuyNow({ open, toggleSidebar }: menuProps) {
  const [buyNow, setBuyNow] = useState(false);

  const toggleBuyNow = () => {
    setBuyNow(!buyNow);
  };

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

        <ListItem disablePadding>
          <ListItemButton onClick={open ? toggleBuyNow : toggleSidebar(true)}>
            <ListItemIcon>
              <ShoppingBasketSharpIcon />
            </ListItemIcon>
            <ListItemText primary={'Buy Now'} />
            <Switch
              size="small"
              edge="end"
              color="error"
              onChange={toggleBuyNow}
              checked={buyNow}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={open ? toggleBuyNow : toggleSidebar(true)}>
            <ListItemIcon>
              <AttachMoneySharpIcon />
            </ListItemIcon>
            <ListItemText primary={'Price Range'} />
          </ListItemButton>
        </ListItem>

        <Collections open={open} toggleSidebar={toggleSidebar} />
      </List>
    </>
  );
}

export default BuyNow;
