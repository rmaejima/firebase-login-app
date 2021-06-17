import React, { useReducer, useEffect } from "react";
import { AppProps } from "next/app";
import "ress";

import "styles/globals.css";
import { ThemeProvider } from "styled-components";
import * as theme from "consts/theme";

import AuthContext from "lib/AuthContext";
import authReducer from "lib/authReducer";
import { listenAuthState } from "utils/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  );
  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);
  return (
    <AuthContext.Provider value={state}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
