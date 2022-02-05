import { Box } from '@chakra-ui/react';
import React from 'react';
import Menu from './Menu';
import NavBrand from './NavBrand';

const SideBar = () => (
  <Box
    id="sideBar"
    background="blue.500"
    minWidth="18%"
    color="white"
      // textAlign="center"
    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
  >
    <NavBrand />
    <Box padding="2em">
      <Menu />
    </Box>
  </Box>
);

export default SideBar;
