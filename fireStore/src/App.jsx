import React from 'react'
import {getFirestore,collection,addDoc,getDoc,doc,getDocs,where,query,updateDoc,deleteField} from 'firebase/firestore'

import { app } from './Firebase'

const firestore = getFirestore(app)

const App = () => {

  const writeData = async() => {
    const result =  await addDoc(collection(firestore,'cities'), {
      // actual data 
      name: "Delhi",
      pinCode: 1234,
      lat: 123,
      long: 325,

    });
    console.log("result", result)
  }

  const makeSubCollection = async()=>{
    await addDoc(collection(firestore,'cities/ssWrFvhMnNry0l3tQoi4/Places'), {
      name:"This is a place",
      desc: "This is the awsm desc",
      date: Date.now()
    })
  }

  // Reading document from firebase 
  const ref = doc(firestore,'cities','ssWrFvhMnNry0l3tQoi4')  // document ka reference ban gya hai :

  const readData = async() => {
    const snap = await getDoc(ref);
    console.log(snap.data())
  }

  const getdDocByQuery = async() => {
    const collectionRef = collection(firestore,'User') // collection ref ready hai
    const q = query(collectionRef,where('isMale','==',true))     // query ready hai
    const snapShot = await getDocs(q);
     
    // loop lga ke access kar lo :
    snapShot.forEach((data) => console.log(data.data()))
    
  }

  // doc update karna :
  const updateDocument = async() => {
    // ref lelo 
    const docRef = doc(firestore,'cities','ssWrFvhMnNry0l3tQoi4')
    await updateDoc(docRef,{
      name: deleteField(),
      
    })
  }



  return (
    <div>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put sub Data</button>
      <button onClick={readData}>read Data</button>
      <br />
      <button onClick={getdDocByQuery}>Get documents by query</button>
      <button onClick={updateDocument}>Update Document</button>
    </div>
  )
}

export default App
