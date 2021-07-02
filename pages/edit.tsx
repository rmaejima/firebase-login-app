import Link from "next/link";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { AuthContext } from "contexts/Auth";
import { UploadImage } from "components/edit/UploadImage";
import { CreateArticle } from "components/CreateArticle";

// import { storage } from "utils/firebase";

const EditPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    !user && router.push("/login");
  }, []);

  return (
    <>
      {/* <UploadImage /> */}
      <CreateArticle />
      <Link href="/">
        <h1>トップへ戻る</h1>
      </Link>
    </>
  );
};

export default EditPage;
