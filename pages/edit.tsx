import Link from "next/link";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { UploadImage } from "components/UploadImage";

import { AuthContext } from "contexts/Auth";

const EditPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    !user && router.push("/login");
  }, []);

  return (
    <>
      <UploadImage />
      <Link href="/">
        <h1>トップへ戻る</h1>
      </Link>
    </>
  );
};

export default EditPage;
