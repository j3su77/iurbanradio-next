
import type { AppProps } from "next/app";
import { UIProvider } from '../context';

import "../styles/globals.css";
import "../styles/radio.css";


export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  
  
  
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

