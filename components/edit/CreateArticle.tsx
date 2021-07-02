import React, { useState, useContext, useCallback } from "react";
import firebase from "firebase";
import { storage } from "utils/firebase";

import { addArticle } from "utils/article/article";
import { AuthContext } from "contexts/Auth";
import { collectionName } from "consts/collectionName";

export const CreateArticle: React.VFC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { user } = useContext(AuthContext); // 何度も定義するのは良くないかも

  const [file, setFile] = useState<File>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const img = event.target.files[0];
    setFile(img);
  };

  ///strageにアップロードするための関数群
  const next = (snapshot: firebase.storage.UploadTaskSnapshot) => {
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error: firebase.storage.FirebaseStorageError) => {
    console.log(error);
  };
  const complete = () => {
    storage
      .ref()
      .child(`images/${file.name}`)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImageUrl(fireBaseUrl);
        console.log(imageUrl);
      });
  };
  const aploadImage = () => {
    const storageRef = storage.ref();
    const uploadTask = storageRef.child(`/images/${file.name}`).put(file);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, //event
      next,
      error,
      complete
    );
    setFile(null);
  };

  const onCreate = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      aploadImage();
      if (file === null) {
        alert("ファイルが選択されていません");
      } else {
        await addArticle(collectionName.articles, {
          title: title,
          body: body,
          imageUrl: imageUrl,
          creater: user ? user.email : null,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
      setTitle("");
      setBody("");
    },
    [title, body]
  );

  return (
    <div className="wrap-create-memo">
      <form onSubmit={onCreate}>
        <div>
          <label>
            タイトル:
            <input
              type="text"
              placeholder="タイトルを入力してください。"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            内容:
            <input
              type="text"
              placeholder="内容を入力してください。"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            画像:
            <input
              type="file"
              placeholder="ファイルをアップロード"
              // onChange={(e) => setFile(e.target.files[0])}
              onChange={handleImage}
            />
          </label>
        </div>
        <button type="submit" disabled={!title || !body}>
          送信
        </button>
        {imageUrl && <img src={imageUrl} />}
      </form>
    </div>
  );
};
