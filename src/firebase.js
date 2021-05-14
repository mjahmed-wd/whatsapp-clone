import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNNhVC0egrSY1Xd-M97A3mcP_cGnR9mRo",
  authDomain: "whatsapp-clone-mj.firebaseapp.com",
  projectId: "whatsapp-clone-mj",
  storageBucket: "whatsapp-clone-mj.appspot.com",
  messagingSenderId: "672150278981",
  appId: "1:672150278981:web:7552d8a23bd20b0f47242c",
  measurementId: "G-8L5G7FG89K"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()
export { auth , provider}
export default db;