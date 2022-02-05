import React from 'react';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';

const Menu = () => {
  const menu = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      path: '/dashboard',
    },
    {
      name: 'Users',
      icon: 'users',
      path: '/users',
    },
    {
      name: 'Settings',
      icon: 'settings',
      path: '/settings',
    },
  ];

  return (
    <Box d="flex" flexDir="column">
      {menu.map((item) => (
        <Link href={item.path}>
          {/* eslint-disable-next-line */}
          <a>
            <Text
              fontSize="1.25em"
              marginY="0.5em"
              letterSpacing="0.5px"
            >
              {item.name}

            </Text>
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default Menu;
