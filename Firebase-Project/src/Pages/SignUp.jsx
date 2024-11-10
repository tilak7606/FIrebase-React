import React, { useState } from 'react'
import {app} from '../Firebase'
import { getAuth , createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

import { useEffect } from 'react'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();  // google signin ke lia hai

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const createUser = () =>{
        createUserWithEmailAndPassword(auth,email,password)
            .then(alert('successfull'))

    }

    const signUpWithGoogle = () => {
      signInWithPopup(auth,googleProvider);              
    }


  return (
    <div className='signup-page'>
       <p>email</p>
       <input type="email" placeholder='Enter your email'  required 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
       
       />
       <p>Password</p>
       <input type="password" placeholder='Enter your password' required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      
        />

        <button onClick={createUser}>create</button>
         
         <button onClick={signUpWithGoogle}>Sign up with Google</button>

      
    </div>
  )
}

export default SignUp
