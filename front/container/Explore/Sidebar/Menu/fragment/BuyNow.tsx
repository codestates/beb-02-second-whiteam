import { useState } from 'react';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Switch,
} from '@mui/material';

import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';

interface buyNowProps {
  open: boolean;
  toggleSidebar: (x: boolean) => () => void;
}

function BuyNow({ open, toggleSidebar }: buyNowProps) {
  const [buyNow, setBuyNow] = useState(false);

  const toggleBuyNow = () => {
    setBuyNow(!buyNow);
  };

  return (
    <>
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
    </>
  );
}

export default BuyNow;
