import { Fragment, useState } from 'react';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'focus-visible';
import { globalStyle } from '@/styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
          },
        },
      }),
  );

  return (
    <Fragment>
      <Global styles={globalStyle} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </Hydrate>
      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
