import React, { useState } from "react";
import { Firebase, storage } from "utils/firebase";

interface Props {}

export const UploadImage: React.VFC = () => {
  const [image, setImage] = useState<File>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const img = event.target.files[0];
    setImage(img);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image === null) {
      alert("ファイルが選択されていません");
    }
    //アップロード処理
    const uploadImage = storage.ref(`/images/${image.name}`).put(image);
    uploadImage.on(
      Firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };

  const next = (snapshot) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error) => {
    // エラーハンドリング
    console.log(error);
  };
  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref("images")
      .child(image.name)
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
      {/* <img src={imageUrl} alt="uploaded" /> */}
    </div>
  );
};
