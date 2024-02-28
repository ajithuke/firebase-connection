import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC6kqKOSsbjuvVpfEor8uQ51xpfDeWcziI",
    authDomain: "connection-7a2b0.firebaseapp.com",
    projectId: "connection-7a2b0",
    storageBucket: "connection-7a2b0.appspot.com",
    messagingSenderId: "205589230869",
    appId: "1:205589230869:web:0ec061ef9f6fe56e49251c",
    databaseURL:'https://console.firebase.google.com/u/0/project/connection-7a2b0/database/connection-7a2b0-default-rtdb/data/~2F'
};

export const app = initializeApp(firebaseConfig)
