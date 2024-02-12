import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "@/styles/globals.css";
import "@/styles/multiRangeSlider.css";
import "@/styles/swiper.css";
import EmptyLayout from "@/components/layout/EmptyLayout";
import LayoutContainer from "@/components/layout/LayoutContainer";
import LayoutWithFilter from "@/components/layout/LayoutWithFilter";
import ErrorBoundary from "@/components/ErrorHandling/ErrorBoundary";

const layouts = {
  L1: LayoutContainer,
  L2: EmptyLayout,
  L3: LayoutWithFilter,
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  const Layout =
    layouts[Component.layout] || (({ children }) => <>{children}</>);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <Head>
              <title>سامانه عرضه کالا</title>
            </Head>
            <ErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorBoundary>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
