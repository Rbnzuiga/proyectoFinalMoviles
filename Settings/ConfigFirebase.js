import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyByG_l3XRlVBx80RN7ans-Cic48uVMyVO4",
    authDomain: "proyectofinaldnd.firebaseapp.com",
    databaseURL: "https://proyectofinaldnd-default-rtdb.firebaseio.com",
    projectId: "proyectofinaldnd",
    storageBucket: "proyectofinaldnd.appspot.com",
    messagingSenderId: "821049181440",
    appId: "1:821049181440:web:9e1b99e7fb45de7ff59fe5"
  };


  const fb = !firebase.apps.length ? firebase.initializeApp(config):firebase.app()

  export default fb;