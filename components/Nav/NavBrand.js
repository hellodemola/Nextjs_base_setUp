import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const NavBrand = () => (

  <Flex
    justifyContent="center"
    alignItems="center"
    padding="1.5em 2em"
    bg="whiteAlpha.500"
  >
    <Image src="vercel.svg" width="12em" />
  </Flex>
);

export default NavBrand;
