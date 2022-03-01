import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
} from '@mui/material';

import { FilterAltSharp, ArrowBackIosNewSharp } from '@mui/icons-material';

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
                <ArrowBackIosNewSharp
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
              <FilterAltSharp color="error" />
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
