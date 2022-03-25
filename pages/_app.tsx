import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import { UIProvider } from "../context";
import { SeletedTheme } from '../components/layouts';
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
        <Component {...pageProps} />
    </SWRConfig>
    </SeletedTheme>

      </UIProvider>
  );
}
