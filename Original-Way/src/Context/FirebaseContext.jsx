import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {getDatabase,set,ref,get,child,onValue} from 'firebase/database'




const firebaseConfig = {
    apiKey: "AIzaSyCTkVgQPKZuA7uGCp-yqs_jeej81x429pw",
    authDomain: "fir-project-1dc31.firebaseapp.com",
    databaseURL: "https://fir-project-1dc31-default-rtdb.firebaseio.com",
    projectId: "fir-project-1dc31",
    storageBucket: "fir-project-1dc31.firebasestorage.app",
    messagingSenderId: "77787488271",
    appId: "1:77787488271:web:609beb2b1cd2695792c37a"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {

    const signUpUSerWithEmailAndPassword = (email,password) => {
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }

    const putData = (key,data) =>{
        set(ref(database,key),data);
    }

    onValue(ref(database,"father"),(snapShot)=>{
        console.log(snapShot.val())
    })

    // get(child(ref(database),"father/son/child")).then((snapShot) => console.log(snapShot.val()) )

    return (
        <FirebaseContext.Provider value={{signUpUSerWithEmailAndPassword , putData}}>
        {props.children}
    </FirebaseContext.Provider>
    )
} 