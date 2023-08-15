import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: process.env.VITE_API_KEY,
//   authDomain: process.env.VITE_APP_AUTH_DOMAIN,
//   projectId: process.env.VITE_APP_PROJECT_ID,
//   storageBucket: process.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId: process.env.VITE_APP_APP_ID,
//   measurementId: process.env.VITE_APP_MEASUREMENT_ID ,
//   databaseURL: process.env.VITE_APP_DATABASE_URL,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC9tExw69VVh3ETgxzETiYfHqphw9OT3aA",
  authDomain: "react-firebase-note-app-e1194.firebaseapp.com",
  databaseURL: "https://react-firebase-note-app-e1194-default-rtdb.firebaseio.com/",
  projectId: "react-firebase-note-app-e1194",
  storageBucket: "react-firebase-note-app-e1194.appspot.com",
  messagingSenderId: "697444039119",
  appId: "697444039119",
  measurementId: "G-SHGJCT1G4X",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

// export const database = getDatabase(app)
// const analytics = getAnalytics(app);