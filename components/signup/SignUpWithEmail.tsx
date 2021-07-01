import React, { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { emailSignUp } from "utils/auth/signUp";

export const SignUpWithEmail: React.VFC = () => {
  const router = useRouter();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      await emailSignUp(email.value, password.value);
      router.push("/login");
    },
    [router]
  );
  return (
    <div>
      <p>サインアップ</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="email" type="email" placeholder="Eメール" />
        </div>
        <div>
          <input name="password" type="password" placeholder="パスワード" />
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </div>
  );
};
