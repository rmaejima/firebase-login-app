import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

import { auth } from "utils/firebase";

interface AuthContextType {
  user: firebase.User | null;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <div>ローディング中...</div>;
  }
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
