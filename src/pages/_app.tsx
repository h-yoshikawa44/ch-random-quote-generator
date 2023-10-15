import { useState } from 'react';
import { AppProps } from 'next/app';
import { Global, CacheProvider, EmotionCache } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { globalStyle } from '@/styles/globals';
import { createEmotionCache } from '@/lib/emotionCache';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
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
    <CacheProvider value={emotionCache}>
      <Global styles={globalStyle} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
};

export default MyApp;
