import * as firebase from 'firebase';
import {getAuth} from 'firebase/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDZ0ALlY3WhXZIopdD--5rk37yXpXGXuk",
  authDomain: "react-firebase-50729.firebaseapp.com",
  projectId: "react-firebase-50729",
  storageBucket: "react-firebase-50729.appspot.com",
  messagingSenderId: "273365764249",
  appId: "1:273365764249:web:df00f400301efdf5b39008",
  measurementId: "G-KV049EPZD1"

  };
 const app = firebase.initializeApp(firebaseConfig)
 export const firebaseApp=getAuth(app)

  

 
  