import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC6kqKOSsbjuvVpfEor8uQ51xpfDeWcziI",
    authDomain: "connection-7a2b0.firebaseapp.com",
    databaseURL: "https://connection-7a2b0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "connection-7a2b0",
    storageBucket: "connection-7a2b0.appspot.com",
    messagingSenderId: "205589230869",
    appId: "1:205589230869:web:0ec061ef9f6fe56e49251c"
  };

export const app = initializeApp(firebaseConfig)
