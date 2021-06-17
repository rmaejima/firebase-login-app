import { AppProps } from "next/app";
import "ress";

import "styles/globals.css";
import { ThemeProvider } from "styled-components";
import * as theme from "consts/theme";

import { AuthProvider } from "contexts/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
