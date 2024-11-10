import React from 'react'
import { app } from './Firebase'
import {getDatabase,ref,set} from 'firebase/database'
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signOut} from 'firebase/auth' 
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import { useState,useEffect } from 'react'

const db = getDatabase(app)
const auth = getAuth(app)  


// const signUpUser = () => {                // local way to create user 
//   createUserWithEmailAndPassword(auth,'Tilak@123.com','apple@123')
//     .then((value) => console.log(value))
// }

const App = () => {

  // const putData = () => {
  //   set(ref(db,'users/Tilak'),{
  //     id:'1',
  //     name:'Tilak',                          // This is how we set something in realTime Database
  //     age: '20'

  //   })
  // }


  const [user,setUser] = useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        // i.e user is found
        setUser(user)
      }
      else{
        // i.e user is not found and the value of the user is null
        setUser(null)
        console.log('You are logged out')
      }
    })
  },[])

    if(user === null){
      return (
        <>
        <SignIn/>
        <SignUp/>
        </>
      )
    }
  







  return (
    <div>
      {/* <button onClick={putData}>click me </button> */}
      {/* <SignUp/> */}
      {/* <button onClick={signUpUser}>click me </button> */}
      {/* <SignIn/> */}

        {/* yha se How to use firebase with react ka concept hai */ }
        {/* Firebase */}

        <h1>hello {user.email} </h1>
        <button onClick={()=> signOut(auth)}>LOgOut</button>






    </div>
  )
}

export default App
