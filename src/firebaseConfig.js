import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAS0YaUL61RTww9aFuZytFZ6PqAH0d-IMs",
    authDomain: "lemonade-stand-be2cb.firebaseapp.com",
    databaseURL: "https://lemonade-stand-be2cb.firebaseio.com",
    projectId: "lemonade-stand-be2cb",
    storageBucket: "lemonade-stand-be2cb.appspot.com",
    messagingSenderId: "321968398894",
    appId: "1:321968398894:web:0d21740f0d4c32d92435bf"
});

export default firebaseConfig;