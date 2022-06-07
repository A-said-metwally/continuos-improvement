import React,{useState, useEffect} from 'react'
import {DataCtx} from '../../context/context'
import Login from '../../components/Login'
import DailySection from '../../components/DailySection'
import MonthlySection from '../../components/MonthlySection'
import Kpis from '../../components/Kpis'
import Title from '../../components/Title'

import {FilterIcon , ClipboardListIcon} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Head from 'next/head'
import CiTeam from '../../components/CiTeam'


function Main({code}) {

  // check for session data in set or not
  const [Validation, setValidation] = useState(false)

  useEffect(()=>{
    let userinfo = sessionStorage.getItem('userinfo');
        userinfo = JSON.parse(userinfo)
        
        if(userinfo){
          setValidation(true)
        }        
    },[])

  // if(!Validation) return <Login/>
      

  return (
          <div className=' mt-24'>
            <Head>
                <title>Main Page</title>
            </Head>

            <Header/>

            <Title title={"التقرير اليومى"} Icon={ClipboardListIcon}/>
            <DailySection code={code}/>

            <Title title={"التقرير الشهرى"} Icon={ClipboardListIcon}/>
            <MonthlySection code={code}/>

            <Title title={"مؤشرات الآداء"} Icon={ClipboardListIcon}/>
            <Kpis code={code}/>

            <Title title={"فريق التحسين المستمر"} Icon={ClipboardListIcon}/>
            <CiTeam/>

          </div>
  )
}

export default Main

