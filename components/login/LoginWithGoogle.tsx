import React, { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { googleLogin } from "utils/login";

export const LoginWithGoogle: React.VFC = () => {
  const router = useRouter();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      await googleLogin();
      router.push("/");
    },
    [router]
  );
  return <Button onClick={handleSubmit}>Googleでログイン</Button>;
};

const Button = styled.button`
  width: 20rem;
  height: 5rem;
  background-color: ${(p) => p.theme.colors.primary[500]};
`;
