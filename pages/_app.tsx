import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";

import { UIProvider } from "../context";
import { SeletedTheme } from "../components/layouts";
import { RadioPlayer } from "../components/radio";



import "../styles/globals.css";
import "../styles/radio.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UIProvider>
      <SeletedTheme>
        <RadioPlayer />
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
        </SWRConfig>
      </SeletedTheme>
    </UIProvider>
  );
}
