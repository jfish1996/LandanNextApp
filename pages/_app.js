import "../styles/globals.css";
import Script from "next/script";
import AppLayout from "../components/AppLayout/AppLayout";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { StateContext } from "../lib/context";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/constants";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const [feedView, setFeedView] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [currentIdInView, setCurrentIdInView] = useState(0);
  return (
    <StateContext>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics-config" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </StateContext>
  );
};

export default MyApp;
