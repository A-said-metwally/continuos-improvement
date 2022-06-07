import React,{ useEffect, useState}from 'react'
import {dailyRepContent} from '../data';
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import LivechkData from '../components/LivechkData'
import LivechkInput from '../components/LivechkInput'
import {collection , addDoc, getDocs} from 'firebase/firestore'
import { db } from '../firebase';

function Livechkinput() {

    // const [Validation, setValidation] = useState(false)
    const [LiveChk, setLiveChk] = useState([])


  const getLiveChk = async (e) => {
    const LiveChkref = collection(db , 'liveChkData')
    await getDocs(LiveChkref)
    .then(response=>{     
      let LiveChkData = response.docs.map(doc=>(
        {id:doc.id, data:doc.data()}
      ))
      return LiveChkData.sort((a,b)=>(a.data.date>b.data.date)?1:-1)
      })
      .then((LiveChkData)=>{ 
        setLiveChk([...LiveChkData])
        console.log(LiveChkData)
      })
    }

    useEffect(()=>{
        let userinfo =sessionStorage.getItem("userinfo")
        userinfo = JSON.parse(userinfo)

        // check for session data in set or not
        // if(userinfo){
        //     setValidation(true)
        //     }    

        // set Live chk data in state
        getLiveChk()
          
    },[])

    return (
    <div className=' mt-28'>
        <Head>
            <title>Recieved Chicken</title>
        </Head>
        <Header/>
        <Container>
            <LivechkInput getData={getLiveChk}/>
            <LivechkData LiveChk={LiveChk}/>
        </Container>

    </div>
  )
}

export default Livechkinput

