import {
  Flex, Box, Heading,
} from '@chakra-ui/react';
import SideBar from '../Nav/SideBar';
import Header from '../Nav/Header';

const DashboardLayout = ({ children, title = 'Dashboard' }) => (
  <Flex minH="100vh">
    <SideBar />
    <Box width="82%" bgColor="#f1f2f3">
      <Box
        d="flex"
        flexDir="row"
        width="100%"
        id="heading"
        padding="1.5em 2em"
        bgColor="#fff"
        justifyContent="flex-end"
        alignItems="center"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      >
        <Header />
      </Box>

      <Box padding="2em">
        <Heading fontWeight="300">{title}</Heading>
        <Box marginY="2em">
          {children}
        </Box>
      </Box>
    </Box>
  </Flex>
);

export default DashboardLayout;
