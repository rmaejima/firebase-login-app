import React, { useState } from "react";
import firebase from "firebase";
import { storage } from "utils/firebase";

interface Props {}

export const UploadImage: React.VFC = () => {
  const [file, setFile] = useState<File>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const img = event.target.files[0];
    setFile(img);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file === null) {
      alert("ファイルが選択されていません");
    }
    //アップロード処理
    const storageRef = storage.ref();
    const uploadTask = storageRef.child(`/images/${file.name}`).put(file);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, //event
      next,
      error,
      complete
    );
  };

  // アップロードの進行度を表示
  const next = (snapshot: firebase.storage.UploadTaskSnapshot) => {
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error: firebase.storage.FirebaseStorageError) => {
    console.log(error);
  };
  // 完了後の処理
  const complete = () => {
    storage
      .ref()
      .child(`images/${file.name}`)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImageUrl(fireBaseUrl);
      });
  };

  return (
    <div className="App">
      <h1>画像アップロード</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImage} />
        <button type="submit">Upload</button>
      </form>
      {imageUrl !== "" && <img src={imageUrl} alt="uploaded" />}
    </div>
  );
};
