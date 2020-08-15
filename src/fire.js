import firebase from "firebase"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/functions'

export const fire = firebase.initializeApp (
  {
    apiKey: "AIzaSyBn88WS8NNA5Y86OBPaEDq68fRNVFNjqA0",
    authDomain: "firechat-e2927.firebaseapp.com",
    databaseURL: "https://firechat-e2927.firebaseio.com",
    projectId: "firechat-e2927",
    storageBucket: "firechat-e2927.appspot.com",
    messagingSenderId: "738739027133",
    appId: "1:738739027133:web:903972446c23e707eb4bd4",
    measurementId: "G-8LLJ8Z777R"
  }
)
export default fire;

/* {
    apiKey: process.env.VUE_APP_AUTH_FIREBASE_APIKEY,
    authDomain: process.env.VUE_APP_AUTH_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_AUTH_FIREBASE_DATABASEURL,
    projectId: process.env.VUE_APP_AUTH_FIREBASE_PROJECTID,
    storageBucket: process.env.VUE_APP_AUTH_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_AUTH_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_AUTH_FIREBASE_APPID,
    measurementId: process.env.VUE_APP_AUTH_FIREBASE_MEASUREMENT
}

    apiKey: "AIzaSyBn88WS8NNA5Y86OBPaEDq68fRNVFNjqA0",
    authDomain: "firechat-e2927.firebaseapp.com",
    databaseURL: "https://firechat-e2927.firebaseio.com",
    projectId: "firechat-e2927",
    storageBucket: "firechat-e2927.appspot.com",
    messagingSenderId: "738739027133",
    appId: "1:738739027133:web:903972446c23e707eb4bd4",
    measurementId: "G-8LLJ8Z777R"
*/