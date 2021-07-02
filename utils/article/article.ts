import firebase from "firebase";
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
