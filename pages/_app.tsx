
import "../styles/globals.css";
import "../styles/radio.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

import { AuthProvider, UIProvider } from "../context";

import { SeletedTheme, RadioPlayer} from "../components";
import { useLoaded } from "../hooks";

import "jodit/build/jodit.min.css";
import "react-loading-skeleton/dist/skeleton.css";


export default function MyApp({ Component, pageProps }: AppProps) {
  const loadedPage = useLoaded();

  return (
    <SessionProvider>
      <AuthProvider>
        <UIProvider>
          {loadedPage && <RadioPlayer />}
          <SeletedTheme>
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
      </AuthProvider>
    </SessionProvider>
  );
}
