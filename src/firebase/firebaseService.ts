import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  
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
