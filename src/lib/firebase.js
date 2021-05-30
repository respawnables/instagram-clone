import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCt5sB92Y49b5OH_EZYUNmOBe0JZFCiigw',
  authDomain: 'instagram-clone-6ec6a.firebaseapp.com',
  projectId: 'instagram-clone-6ec6a',
  storageBucket: 'instagram-clone-6ec6a.appspot.com',
  messagingSenderId: '467709952626',
  appId: '1:467709952626:web:c103f4937e873d7cb678eb',
  measurementId: 'G-MYMR7LX720'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
