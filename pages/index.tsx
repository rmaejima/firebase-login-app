import { Login, Logout, auth } from "utils/firebase";

const IndexPage = () => {
  return (
    <>
      <h1>Firebaseを用いてログイン</h1>
      <div>
        <button onClick={() => Login()}>ログイン</button>
        <button onClick={() => Logout()}>ログアウト</button>
      </div>
      <div>
        <pre>
          {auth.currentUser
            ? auth.currentUser.displayName + "でログインしています"
            : "ログインしていません"}
        </pre>
      </div>
    </>
  );
};

export default IndexPage;
