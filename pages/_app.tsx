import { AppProps } from "next/app";
import "ress";

import "styles/globals.css";
import { ThemeProvider } from "styled-components";
import * as theme from "consts/theme";

import { FirebaseProvider } from "utils/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FirebaseProvider>
  );
}

export default MyApp;
