import "../styles/globals.css";
import { Provider, createClient } from "urql";
import AppLayout from "../components/AppLayout/AppLayout";

const client = createClient({
  url: "https://shielded-sea-51712.herokuapp.com/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
