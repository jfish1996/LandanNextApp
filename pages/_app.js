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
const client = createClient({
  url: process.env.NEXT_PUBLIC_BACK_END_URL,
});
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

const MyApp = ({ Component, pageProps }) => {
  const [feedView, setFeedView] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [currentIdInView, setCurrentIdInView] = useState(0);

  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <AppLayout />
      </StyleSheetManager>
    );
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }
  return (
    <StateContext>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ThemeProvider theme={theme}>
        <Provider value={client}>
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
        </Provider>
      </ThemeProvider>
    </StateContext>
  );
};

export default MyApp;
