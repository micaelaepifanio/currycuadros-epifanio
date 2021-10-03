import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDrsgoG8yNlTRSKLLO_A2VrzxtgQJ9FYsI",
  authDomain: "curry-cuadros.firebaseapp.com",
  projectId: "curry-cuadros",
  storageBucket: "curry-cuadros.appspot.com",
  messagingSenderId: "844292473504",
  appId: "1:844292473504:web:07bf8e93d505f1d6ee3fc5",
  measurementId: "G-NBGDR8RW52"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app;
}

export const getDb = getFirestore(app);
