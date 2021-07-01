import React, { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { emailLogin } from "utils/auth/login";

export const LoginWithEmail: React.VFC = () => {
  const router = useRouter();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      await emailLogin(email.value, password.value);
      router.push("/");
    },
    [router]
  );
  return (
    <>
      <p>ログイン</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="email" type="email" placeholder="Eメール" />
        </div>
        <div>
          <input name="password" type="password" placeholder="パスワード" />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </>
  );
};
