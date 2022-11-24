import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDD4BFZFKkIMseA0Gf_skgNK0u9Z4SvkOU",
    authDomain: "contact-abhishek.firebaseapp.com",
    projectId: "contact-abhishek",
    storageBucket: "contact-abhishek.appspot.com",
    messagingSenderId: "1074743733543",
    appId: "1:1074743733543:web:eb68a9d296ad550541cd02"
  
  };

  let appInstance: FirebaseApp;

  const getAppInstance = () => {

    if (!appInstance) {
        appInstance = initializeApp(firebaseConfig);
    }

    return appInstance;
  }

  const getFirestoreInstance = () => getFirestore(getAppInstance());

  export const FirebaseServices = {
    firestore: getFirestoreInstance(),
  }
