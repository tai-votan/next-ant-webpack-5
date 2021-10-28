import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import store from "@/redux/store";
require("styles/global.less");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
