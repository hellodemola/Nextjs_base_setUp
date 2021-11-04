import {
  Box, Text, Flex,
} from '@chakra-ui/react';
import getCurrentTime from '../utilis/time';

export default function Home() {
  const { minutes, hour } = getCurrentTime();
  return (
    <Flex justifyContent="center" textAlign="center" minH="100vh" alignItems="center">
      <Box>
        <Text decoration="underline">Project setup</Text>
        <Text fontWeight="800" fontSize="3em" color="#1a2a3a">hello world</Text>
        <Text fontSize="2em">
          The time is
          {' '}
          { `${hour}:${minutes}` }
          {' '}
        </Text>
      </Box>
    </Flex>
  );
}
