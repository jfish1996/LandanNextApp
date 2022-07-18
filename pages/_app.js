import "../styles/globals.css";
import { Provider, createClient } from "urql";
import AppLayout from "../components/AppLayout/AppLayout";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { StateContext } from "../lib/context";

const client = createClient({
  url: "https://shielded-sea-51712.herokuapp.com/graphql",
});

const MyApp = ({ Component, pageProps }) => {
  const [feedView, setFeedView] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [currentIdInView, setCurrentIdInView] = useState(0);
  return (
    <StateContext>
      <Provider value={client}>
        <AppLayout
          feedView={{ feedViewProp: feedView, setFeedViewProp: setFeedView }}
          currentSection={{ currentSection, setCurrentSection }}
        >
          <Component
            {...pageProps}
            feedView={{ feedViewProp: feedView, setFeedViewProp: setFeedView }}
            currentId={{ currentIdInView, setCurrentIdInView }}
          />
        </AppLayout>
      </Provider>
    </StateContext>
  );
};

const forwardMyApp = React.forwardRef(MyApp);
export default forwardMyApp;
