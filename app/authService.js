import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC7vccuHyQlZ2ffQE7HYJ7Rc7haN6c3tiE",
  authDomain: "ecosadebackend.firebaseapp.com",
  projectId: "ecosadebackend",
  storageBucket: "ecosadebackend.firebasestorage.app",
  messagingSenderId: "270492746411",
  appId: "1:270492746411:web:940cf301155c2a836e6dee"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createAccount = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, user: { email: userCredential.user.email } };
  } catch (error) {
    throw new Error(error.message);
  }
};