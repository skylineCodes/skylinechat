import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAwjO4KHWEBTZpuFgIFU6cwYtZxWSnH83c',
  authDomain: 'whatsapp-2-483ed.firebaseapp.com',
  projectId: 'whatsapp-2-483ed',
  storageBucket: 'whatsapp-2-483ed.appspot.com',
  messagingSenderId: '1093123053492',
  appId: '1:1093123053492:web:6832a8d61f71c6d57e44e1',
};

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };