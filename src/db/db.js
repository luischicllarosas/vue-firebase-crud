let config = {
  apiKey: "AIzaSyDWUgpLbmy_zQup-B2TbslsCm8i_bkGKFw",
  authDomain: "platos-abafb.firebaseapp.com",
  databaseURL: "https://platos-abafb.firebaseio.com",
  projectId: "platos-abafb",
  storageBucket: "platos-abafb.appspot.com",
  messagingSenderId: "199171139",
  appId: "1:199171139:web:7e254dd11c12a3cb2f08f6"
};
// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase.initializeApp(config).database()