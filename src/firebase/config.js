import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuU74LrKYkPv6dRBQdg42siFWwSPWKuBo",
  authDomain: "reactnativeauth-64965.firebaseapp.com",
  databaseURL: "https://reactnativeauth-64965.firebaseio.com",
  projectId: "reactnativeauth-64965",
  storageBucket: "reactnativeauth-64965.appspot.com",
  messagingSenderId: "988338379143",
  appId: "1:988338379143:web:aedddf63e350fa289f5b22",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export { firebase };
export default firebase;
