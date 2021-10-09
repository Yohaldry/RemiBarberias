import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider } from '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBBkvkjG7A-LLypx9m6eDvKuwSayvwSyO4",
  authDomain: "fir-day-b3f25.firebaseapp.com",
  projectId: "fir-day-b3f25",
  storageBucket: "fir-day-b3f25.appspot.com",
  messagingSenderId: "696120666830",
  appId: "1:696120666830:web:793bb86b7829684e04fe9f",
  measurementId: "G-24XB16J6FS"
};
 
const app = initializeApp(firebaseConfig);
const facebook = new FacebookAuthProvider()
const google =  new GoogleAuthProvider();
const db = getFirestore(app)

 
export{  
    app,
    google,
    db,
    facebook
}