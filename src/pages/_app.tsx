// pages/_app.tsx
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '../styles/GlobalStyles';
import { JsonDataProvider } from '../context/JsonDataContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const repositionInShadowDom = () => {
      const portal = document.querySelector('nextjs-portal') as HTMLElement;
      if (portal?.shadowRoot) {
        const toast = portal.shadowRoot.querySelector('[data-nextjs-toast]') as HTMLElement;
        if (toast) {
          toast.style.top = '0';
          toast.style.marginTop = '16px';
          toast.style.left = '16px';
          toast.style.bottom = 'auto';
          toast.style.right = 'auto';
          toast.style.position = 'fixed';
          toast.style.zIndex = '100';
        }
      }
    };

    repositionInShadowDom();
    const observer = new MutationObserver(() => repositionInShadowDom());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <JsonDataProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </JsonDataProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
