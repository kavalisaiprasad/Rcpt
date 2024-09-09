import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAE7iHIEhc3Eh-in9tjfOLbmBfmKqKarMQ",
  authDomain: "rcptnew-b3782.firebaseapp.com",
  projectId: "rcptnew-b3782",
  storageBucket: "rcptnew-b3782.appspot.com",
  messagingSenderId: "8105670913",
  appId: "1:8105670913:web:bf60bd8d4cd4063a588300",
  measurementId: "G-1X7R4S2BMM"


};

export const app = initializeApp(firebaseConfig);
export const FirebaseToken = getMessaging(app);