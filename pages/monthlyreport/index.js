import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import InProgress from '../../components/InProgress'

function MonthlyReport() {
  return (
    <div className=' mt-16 '>
      <Head>
        <title>Monthly Report</title>
      </Head>
      <Header/>
      <InProgress/>
    </div>
  )
}

export default MonthlyReport