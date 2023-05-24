import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
