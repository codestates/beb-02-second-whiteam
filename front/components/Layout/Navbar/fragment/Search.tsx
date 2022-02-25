import { css } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const iconCss = css`
  color: black;
  margin-top: -0.5rem;

  :hover {
    color: rgb(186, 42, 43);
    transition: color 250ms ease-out;
  }
`;

function Search() {
  return (
    <IconButton css={iconCss} aria-label="search" size="large" disableRipple>
      <SearchIcon fontSize="inherit" />
    </IconButton>
  );
}

export default Search;
