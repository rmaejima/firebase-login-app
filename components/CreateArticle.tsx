import React, { useState, useContext, useCallback } from "react";
import firebase from "firebase";

import { addArticle } from "utils/article/article";
import { AuthContext } from "contexts/Auth";
import { collectionName } from "consts/collectionName";

export const CreateArticle: React.VFC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { user } = useContext(AuthContext); // 何度も定義するのは良くないかも

  const onCreate = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await addArticle(collectionName.articles, {
        title: title,
        body: body,
        creater: user ? user.email : null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
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
              placeholder="内容を入力してください。"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="送信" disabled={!title || !body} />
      </form>
      {/* <div>
        <textarea
          placeholder="内容を入力してください。"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={onCreate} disabled={!body}>
          追加
        </button>
      </div> */}
    </div>
  );
};
