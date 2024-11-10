import React, { useState } from 'react'
import {useFirebase} from './Context/FirebaseContext'

const App = () => {
  const firebase = useFirebase();
  // console.log(firebase)

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const putNewData = () => {
    firebase.putData('father/son/child',{name:'something'})
  }

  return (
    <div>
      <p>email</p>
      <input type="email" placeholder='enter your email' required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
       />
      <p>password</p>
      <input type="password" placeholder='enter your password' required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
       />
       <button onClick={() => { firebase.signUpUSerWithEmailAndPassword(email,password) 
          firebase.putData('web/' + 'Devop', {email,password})
       }
       }>sign Up
       </button>
       <button onClick={putNewData}>Trigger me</button>
    </div>
  )
}

export default App
