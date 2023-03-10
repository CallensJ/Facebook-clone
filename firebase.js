import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ95tndtNPB3v7PNr5xnGviaXjue1q5dE",
  authDomain: "facebook-clone-fec0c.firebaseapp.com",
  projectId: "facebook-clone-fec0c",
  storageBucket: "facebook-clone-fec0c.appspot.com",
  messagingSenderId: "173264099160",
  appId: "1:173264099160:web:3f385d67056609eb8ef72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
const storage = getStorage();
const storageRef = ref(storage);
