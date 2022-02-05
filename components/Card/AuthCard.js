import { Box } from '@chakra-ui/react';

const AuthCard = ({ children }) => (
  <Box
    border="1px solid blue.500"
    padding="4em 3em"
    width="30em"
    borderRadius="1em"
    bgColor="brand.white"
    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
  >
    {children}
  </Box>
);

export default AuthCard;
