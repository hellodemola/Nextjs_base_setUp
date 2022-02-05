import { Text, Flex, Avatar } from '@chakra-ui/react';
import React from 'react';
import NotificationIcon from '../svg/notification';

const Header = () => (
  <>
    <Text mr="3">{NotificationIcon}</Text>
    <Flex
      justifyContent="center"
      alignItems="center"
      ml="1em"
    >
      <Avatar size="sm" marginY="0.5em" mr="0.5em" />
      <Text fontWeight="900">Admin</Text>
    </Flex>
  </>
);

export default Header;
