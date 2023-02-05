import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import {getFirestore} from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk9di09HVA1qy1isABZ6bDsQb6pb8FMaQ",
  authDomain: "ratetrip-production.firebaseapp.com",
  projectId: "ratetrip-production",
  storageBucket: "ratetrip-production.appspot.com",
  messagingSenderId: "751724060389",
  appId: "1:751724060389:web:08f1e5c5363f951ef83e0c"
};
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  export const db = getFirestore(app);