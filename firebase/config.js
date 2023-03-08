import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBH11H_epQDagiW29_c77bV7CEGJS0zd1U",
  authDomain: "verdantpath-c429b.firebaseapp.com",
  projectId: "verdantpath-c429b",
  storageBucket: "verdantpath-c429b.appspot.com",
  messagingSenderId: "44640881207",
  appId: "1:44640881207:web:d9071ad48603555a858db2"
};

// init firebase app
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()

export { projectFirestore }