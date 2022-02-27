import React, { useState } from 'react';
import { useAtom } from 'jotai';
import Image from 'next/image';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
  TextField,
  IconButton,
} from '@mui/material';

import { ExpandLess, ExpandMore, AttachMoneySharp } from '@mui/icons-material';

import { priceRangeTo, priceRangeFrom } from '../../../../../stores/atom';

interface menuProps {
  open: boolean;
  toggleSidebar: (x: boolean) => () => void;
}

function Price({ open, toggleSidebar }: menuProps) {
  const [expanded, setExpanded] = useState(false);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const [, setPriceRangeFrom] = useAtom(priceRangeFrom);
  const [, setPriceRangeTo] = useAtom(priceRangeTo);

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /^\d*[.]?\d*$/;
    if (pattern.test(e.target.value)) setPriceFrom(e.target.value);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /^\d*[.]?\d*$/;
    if (pattern.test(e.target.value)) setPriceTo(e.target.value);
  };

  const handleClick = () => {
    setPriceRangeFrom(Number(priceFrom));
    setPriceRangeTo(Number(priceTo));
  };

  const handleExpended = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={open ? handleExpended : toggleSidebar(true)}>
          <ListItemIcon>
            <AttachMoneySharp />
          </ListItemIcon>
          <ListItemText primary={'Price Range'} />
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open && expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ margin: '0 0 1rem 1.5rem' }}>
          <ListItem>
            <TextField
              id="from-input"
              variant="standard"
              label="From"
              color="error"
              value={priceFrom}
              onChange={handleFromChange}
            />
          </ListItem>
          <ListItem>
            <TextField
              id="to-input"
              variant="standard"
              label="To"
              color="error"
              value={priceTo}
              onChange={handleToChange}
            />
            <IconButton
              aria-label="price search"
              sx={{ marginTop: '0.5rem' }}
              onClick={handleClick}
            >
              <Image src="/icons/ethereum.svg" width="24" height="24" />
            </IconButton>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
}

export default Price;
