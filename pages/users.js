import Head from 'next/head'
import { Container } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import User from '../components/User'
import {PlusCircleIcon} from '@heroicons/react/outline'
import {collection , getDocs} from 'firebase/firestore'
import { db } from '../firebase'


function UsersPage() {

const [Users, setUsers] = useState([])

const getUsers = async () => {
    const usersCollection = collection(db , 'users')
    const users = await getDocs(usersCollection)
    .then(response=>{     
        let usersData = response.docs.map(doc=>(
          {
            id:doc.id,
            data:doc.data()
        }
        ))
        return usersData
      })
      .then((usersData)=>setUsers(usersData))
    }
  


  useEffect(() => {
    getUsers()
  },[])
    

  return (
    <div className=' mt-24'>
        <Container>
            <Head>
                <title>User Page</title>
            </Head>

            <Header/>
            <div className=' flex justify-between p-2'>
                <h1 className=' text-green-600 text-3xl font-bold'>Users Information</h1>
                <PlusCircleIcon className=' h-10 w-10 text-green-600 cursor-pointer hover:scale-105'/>
            </div>
           {Users.map( user => {
               return (
                <User key={user.id} id={user.id} {...user.data}/>
               )
           })}
            
        </Container>
    </div>
  )
}

export default UsersPage

