import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7vccuHyQlZ2ffQE7HYJ7Rc7haN6c3tiE",
  authDomain: "ecosadebackend.firebaseapp.com",
  projectId: "ecosadebackend",
  storageBucket: "ecosadebackend.firebasestorage.app",
  messagingSenderId: "270492746411",
  appId: "1:270492746411:web:940cf301155c2a836e6dee"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);