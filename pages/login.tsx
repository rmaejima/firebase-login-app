import { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "contexts/Auth";
import { LoginWithGoogle } from "components/login/LoginWithGoogle";
import { LoginWithEmail } from "components/login/LoginWithEmail";
import { SignUpWithEmail } from "components/signup/SignUpWithEmail";

const LoginPage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    user && router.push("/");
  }, [{ user }]);

  return (
    <>
      <h1>Firebaseを用いてログイン</h1>
      <div>
        <LoginWithGoogle />
      </div>
      <div>
        <LoginWithEmail />
      </div>
      <div>
        <SignUpWithEmail />
      </div>
    </>
  );
};

export default LoginPage;
