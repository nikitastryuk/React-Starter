import { QueryClient, QueryClientProvider as ReqctQueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PropTypes from 'prop-types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function QueryClientProvider({ children }) {
  return (
    <ReqctQueryClientProvider client={queryClient}>
      <>
        {children}
        <ReactQueryDevtools />
      </>
    </ReqctQueryClientProvider>
  );
}

QueryClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
