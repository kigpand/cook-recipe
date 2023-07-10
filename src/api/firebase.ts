import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, set, getDatabase } from "firebase/database";
import { IRecipe } from "../interface/IRecipe";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

export function login(func: any): any {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return;
      const user = result.user;
      func(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.error(errorCode);
    });
}

export function logout(): any {
  return signOut(auth).then(() => null);
}

export function getUser(func: Function) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      func(user);
    } else {
      func(null);
    }
  });
}

export async function addContent(recipe: IRecipe) {
  set(ref(database, `contents/${recipe.uuid}`), recipe);
}
