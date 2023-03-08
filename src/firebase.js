import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxb272xYyt8uZCzIdVcIcHFRKBPenJmyE",
  authDomain: "netflix-clone-bbf4e.firebaseapp.com",
  projectId: "netflix-clone-bbf4e",
  storageBucket: "netflix-clone-bbf4e.appspot.com",
  messagingSenderId: "1024260226526",
  appId: "1:1024260226526:web:c0da0c2e04082163c9314f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;