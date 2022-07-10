import "../styles/globals.css";
import { Provider, createClient } from "urql";

const client = createClient({
  url: "https://shielded-sea-51712.herokuapp.com/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
