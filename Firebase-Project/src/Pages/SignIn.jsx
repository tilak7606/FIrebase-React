import React, { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../Firebase'

const auth = getAuth(app)

const SignIn = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const SignInUser = ()=>{
        signInWithEmailAndPassword(auth,email,password)
            .then(value => console.log('successfully sign in'))
            .catch(err => console.log(err))
    }

  return (
    <div>
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

        <button onClick={SignInUser}>Sign in</button>
    </div>
  )
}

export default SignIn
