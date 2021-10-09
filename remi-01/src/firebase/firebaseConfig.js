import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-F6-nehbEbA3kpF68lrsSb_FDWTpTPEo",
  authDomain: "remi-9a940.firebaseapp.com",
  projectId: "remi-9a940",
  storageBucket: "remi-9a940.appspot.com",
  messagingSenderId: "253960316760",
  appId: "1:253960316760:web:f06afc49620c2bdef8272d",
  measurementId: "G-BYHND2QRXF"
};
 
const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore(app)
 
export{  
    app,
    google,
    db
}