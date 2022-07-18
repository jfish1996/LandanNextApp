import "../styles/globals.css";
import { Provider, createClient } from "urql";
import AppLayout from "../components/AppLayout/AppLayout";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { StateContext } from "../lib/context";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/constants";
console.log(theme);
const client = createClient({
  url: "https://shielded-sea-51712.herokuapp.com/graphql",
});

const MyApp = ({ Component, pageProps }) => {
  const [feedView, setFeedView] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [currentIdInView, setCurrentIdInView] = useState(0);
  return (
    <StateContext>
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
