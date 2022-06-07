import React from 'react'
import { dailyRepContent } from '../data'
import {users} from '../data'
import { Weights } from '../data'
import {doc,addDoc ,getDocs,  collection , onSnapshot , deleteDoc} from 'firebase/firestore'
import { db } from '../firebase'


function Upload() {
    // const data = {Weights}
    const data = dailyRepContent.filter(data => data.discrip === "production")

    // console.log(data[0].data)

    function handleSubmit(e){
        e.preventDefault()
        const dataRef = collection(db , 'production')
        for(let i = 0; i < data[0].data.length; i++){
            addDoc(dataRef , data[0].data[i])
            .then(response => {
                console.log(response)
            }).catch(error => {console.log(error.message)})}
    
        }

  return (
    <div>
        <button
        onClick={handleSubmit}
        className='bg-green-200 p-2'>Upload data</button>
        {/* {livechk[0].forEach(element => {
            <h1></h1>
        })}; */}
    </div>
  )
}

export default Upload