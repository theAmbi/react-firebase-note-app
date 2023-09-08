import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
//   databaseURL: import.meta.env.VITE_DATABASE_URL,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC9tExw69VVh3ETgxzETiYfHqphw9OT3aA",
  authDomain: "react-firebase-note-app-e1194.firebaseapp.com",
  databaseURL:
    "https://react-firebase-note-app-e1194-default-rtdb.firebaseio.com/",
  projectId: "react-firebase-note-app-e1194",
  storageBucket: "react-firebase-note-app-e1194.appspot.com",
  messagingSenderId: "697444039119",
  appId: "697444039119",
  measurementId: "G-SHGJCT1G4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

// export const database = getDatabase(app)
// const analytics = getAnalytics(app);
