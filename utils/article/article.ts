import { firestore } from "utils/firebase";

import { Article } from "types/articleModel";

export const addArticle = async (collectionName: string, article: Article) => {
  try {
    await firestore.collection(collectionName).add(article);
  } catch (error) {
    alert(error);
  }
};

export const updateArticle = async (
  collectionName: string,
  article: Article
) => {
  try {
    await firestore.collection(collectionName).doc(article.id).set(article);
  } catch (error) {
    alert(error);
  }
};

export const deleteArticle = async (
  collectionName: string,
  article: Article
) => {
  try {
    await firestore.collection(collectionName).doc(article.id).delete();
  } catch (error) {
    alert(error);
  }
};

export const getArticles = async (
  collectionName: string
): Promise<Article[]> => {
  let tmp = [];
  try {
    await firestore
      .collection(collectionName)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("バス");
          console.log(doc.id, " => ", doc.data());
          tmp.push(doc.data());
        });
      });
    const docs: Article[] = tmp;
    return docs;
  } catch (error) {
    alert(error);
  }
};

// export const getArticles = async (collectionName: string) => {
//   let tmp = [];
//   try {
//     await firestore
//       .collection(collectionName)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           // doc.data() is never undefined for query doc snapshots
//           console.log(doc.id, " => ", doc.data());
//           tmp.push(doc.data());
//         });
//       });
//     console.log(tmp);
//   } catch (error) {
//     alert(error);
//   }
// };
