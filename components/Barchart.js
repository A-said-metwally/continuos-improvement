import React, { useState } from 'react'
import {Bar , Line} from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'

function Barchart({chartdata}) {
  const UserData = [
    {
        id:1,
        year:2016,
        userGain:8000,
        userLost:823,
    },
    {
        id:2,
        year:2017,
        userGain:9500,
        userLost:2500,
    },
    {
        id:3,
        year:2018,
        userGain:20000,
        userLost:8100,
    },
]
const [userData, setuserData] = useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
        label:"Users Gained",
        data:UserData.map((data)=>data.userGain),
        backgroundColor:["green","red","blue","yellow"],
        borderColor:"black",
        borderWidth:2,
    }]
})

  return (
      <div>
        <div className="h-96 w-96">Barchart
            <Bar data={userData} />
        </div>
        <div className="h-96 w-96">Barchart
            <Line data={userData} />
        </div>
      </div>
  )
}

export default Barchart