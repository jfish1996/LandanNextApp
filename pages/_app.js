import "../styles/globals.css";
import Script from "next/script";
import { Provider, createClient } from "urql";
import AppLayout from "../components/AppLayout/AppLayout";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { StateContext } from "../lib/context";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/constants";
import { Toaster } from "react-hot-toast";
import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";
import { withUrqlClient } from "next-urql";
import Head from "next/head";
// const client = createClient({
//   url: process.env.NEXT_PUBLIC_BACK_END_URL,
// });

const MyApp = ({ Component, pageProps }) => {
  const [feedView, setFeedView] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [currentIdInView, setCurrentIdInView] = useState(0);
  return (
    <StateContext>
      <Head>
        <link rel="apple-touch-icon" href="/"></link>
        <title>{"landypandyy"}</title>
      </Head>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ThemeProvider theme={theme}>
        {/* <Provider value={client}> */}
        <AppLayout
          feedView={{
            feedViewProp: feedView,
            setFeedViewProp: setFeedView,
          }}
          currentSection={{ currentSection, setCurrentSection }}
        >
          <Component
            {...pageProps}
            feedView={{
              feedViewProp: feedView,
              setFeedViewProp: setFeedView,
            }}
            currentId={{ currentIdInView, setCurrentIdInView }}
          />
        </AppLayout>
        {/* </Provider> */}
      </ThemeProvider>
    </StateContext>
  );
};

export default withUrqlClient(
  (ssrExchange) => ({
    url: process.env.NEXT_PUBLIC_BACK_END_URL,
    exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
  }),
  { ssr: true }
)(MyApp);
