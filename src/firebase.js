import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDz9MeokG8Xew28un6QZ0nCMgRso36VcAQ",
  authDomain: "highcharts-e5f73.firebaseapp.com",
  projectId: "highcharts-e5f73",
  storageBucket: "highcharts-e5f73.appspot.com",
  messagingSenderId: "287787854926",
  appId: "1:287787854926:web:a7d1d3a10ba63658e0e71f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporting db is fine, but you might need additional functions from Firestore
export { db, collection, getDocs, addDoc };
