import {
  Box, Flex,
} from '@chakra-ui/react';

const AuthLayout = ({ children }) => (
  <Flex minw="1440px" h="100vh">
    <Box width="50%" bg="brand.white" d="flex" alignItems="center" justifyContent="center">
      {children}
    </Box>
    <Box
      width="50%"
      bgGradient="linear(to-b, #0683FF 23.44%, #1F01B9 159.11%)"
      backgroundImage="url(https://images.pexels.com/photos/5990270/pexels-photo-5990270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
      backgroundSize="cover"
      backgroundPosition="center"
      d="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    />
  </Flex>
);

export default AuthLayout;
