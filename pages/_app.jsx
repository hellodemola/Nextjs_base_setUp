import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';

// redux
import { Provider as StoreProvider } from 'react-redux';
import { useStore } from '../store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps && pageProps.initialReduxState);
  const [queryClient] = React.useState(() => new QueryClient());
  const { NEXT_PUBLIC_BASEURL } = process.env;
  axios.defaults.baseURL = NEXT_PUBLIC_BASEURL;

  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient} contextSharing>
        <ChakraProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </ChakraProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
}
export default MyApp;
