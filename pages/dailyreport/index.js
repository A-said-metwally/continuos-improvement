import React, { useEffect, useState } from "react";
import { dailyRepContent , Weights } from "../../data";
import Login from '../../components/Login'
import {FilterIcon, SearchIcon, PlusIcon,ThumbUpIcon} from '@heroicons/react/outline'
import { Container, Table, Spinner, Anchor } from "react-bootstrap";
import Header from "../../components/Header";
import DataDiscrip from "../../components/DataDiscrip";
import SlideDiscrip from "../../components/SlideDiscrip";
import Collapse  from '../../components/Collapse'
import {Bar , Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Loading from "../../components/Loading";
import Action from "../../components/Action";
import Head from "next/head";
import {doc , collection, getDocs} from 'firebase/firestore'
import { db } from "../../firebase";


function DailyReport({livechicken, uniformity, AllDates , LastDate }) {

  // const AllDates = livechicken.map((d)=>{return d.date})
  const [Date , setDate]= useState(AllDates[AllDates.length - 1])
  // const [AllLiveChkData, setAllLiveChkData] = useState(
  //   livechicken.sort((a,b)=>(a.date>b.date)?1:-1))
  // const [AllUniformity, setAllUniformity] = useState(
  //   uniformity.sort((a,b)=>(a.date>b.date)?1:-1))

  const [LiveChk, setLiveChk] = useState([])
  const [Uniformity, setUniformity] = useState([])
  
  const [LiveChart , setLiveChart] = useState({
    labels:livechicken.map((data)=>data.date),
    // labels:AllLiveChkData.map((data)=>data.date),
    datasets:[{
      label:"Recived Chicken",
      data:livechicken.map((data)=>data.recived_c),
      backgroundColor:["green"],
      borderColor:"Blue",
      borderWidth:1,
    }],
})

const [AvgWeightChart , setAvgWeightChart] = useState({
  labels:livechicken.map((data)=>data.date),
  // labels:AllLiveChkData.map((data)=>data.date),
  datasets:[{
    label:"Avg Weight",
    data:livechicken.map((data)=>(data.recived_w / data.recived_c).toFixed(3)),
    backgroundColor:["#20fb31"],
    borderColor:"green",
    borderWidth:1,
  }],
})

const [UniformityChart , setUniformityChart] = useState({
  labels:uniformity.map((data)=>data.date),
  // labels:AllUniformity.map((data)=>data.date),
  datasets:[{
    label:"Uniformity",
    data:uniformity.map((data)=>(data.uniformity)),
    backgroundColor:"green",
    borderColor:"green",
    borderWidth:1,
  },
  {
    label:"TargetWeight",
    data:uniformity.map((data)=>(data.trgetWeight)),
    backgroundColor:"blue",
    borderColor:"blue",
    borderWidth:1,
  }
]
})

const [Histogram , setHistogram] = useState({
  labels:Weights.map((w)=>w),
  datasets:[{
    label:"Distribution",
    data:uniformity.map((data)=>data.count)[0],
    backgroundColor:["#20fb31"],
    borderColor:"green",
    borderWidth:1,

  }]
})


const CahrtOptions = {
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: true
      }
    },
    y: {
      display: true,
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      // text: "Avg interest by month (days)",
      padding: {
        bottom: 30
      },
      weight: "bold",
      color: "red",
      font: {
        size: 13
      },
      align: "start"
    },
    datalabels: {
      display: true,
      color: "blue",
      anchor: "end",
      font: {
        size: 16,
        weight: "bold"
      },

    }
  }
}



  const [loading , setLoading] = useState(false)
  const [Validation, setValidation] = useState(false)


  useEffect(()=>{
    let userinfo = sessionStorage.getItem('userinfo');
        userinfo = JSON.parse(userinfo)
        
        // check for session data in set or not
        if(userinfo){
          setValidation(true)
        }    
        
        // set Live chk data in state
        const LiveChkData = livechicken.filter(d=>d.date === Date )
        setLiveChk([...LiveChkData])

        // set uniformity data
        const UniformityData = uniformity.filter(d=>d.date === Date )
        setUniformity([...UniformityData])


        },[])

  // if(!Validation) return <Login/>

  const filterData = ()=>{
    const newLiveData = livechicken.filter(d=>d.date === Date )
    const newUniformityData = uniformity.filter(d=>d.date === Date )

    if(newLiveData.length === 0 ) return alert("لايوجد بيانات لهذا التاريخ")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
    setLiveChk([...newLiveData])
    setUniformity([...newUniformityData])

  }
  



  return (
    <div className=" mt-16 ">
      <Head>
          <title>Daily Report</title>
      </Head>
      
      <Header/>
      { loading &&  <Loading/> }

      <Container className=" pt-4">
        <div className=" flex justify-between  mb-3 flex-row-reverse items-center  rtl">
          <div className="flex flex-row-reverse space-x-3 bg-gray-100 p-2 shadow-md rounded-md items-center">
            <b className=" ml-6 text-gray-500 text-lg">تاريخ الاصدار </b>
            <input 
              onChange={(e)=>setDate(e.target.value)} 
              value={Date} type="date" 
              className=" bg-inherit focus:outline-none text-lg  cursor-pointer"/>
            <SearchIcon onClick={filterData} className=" h-8 hover:text-red-600 text-green-700 hover:scale-110 cursor-pointer"/>
          </div>
        </div>

          {/* start of first slide */}
          <Collapse ar="الدجاج الوارد للمجزر" en="SPP Recived Chicken" 
            data={
              <>
                  <div className="  pl-6 mb-8">
                      <DataDiscrip ar="الدجاج الحى المستلم"    en ="Recived Live Chicken"/>
                    <Table striped bordered hover size="sm">
                    <thead className=" text-center text-gray-600">
                      <tr >
                        <th>#</th>
                        <th>جهة التوريد</th>
                        <th>نافق الوصول</th>
                        <th>المعدم الطبى</th>
                        <th>تحت الوزن</th>
                        <th>صافى الوارد</th>
                        <th>إجمالى الوارد</th>
                        <th>متوسط الوزن</th>
                        <th>نسبة المرفوض</th>
                      </tr>
                    </thead>
                    <tbody className=" text-center">
                      {LiveChk.map((d , index)=>{
                        return (
                          <>
                            <tr className=" align-middle"  >
                            <td rowSpan={2}>1</td>
                            <td> #عدد</td>
                            <td>{d.doa_c}</td>
                            <td>{d.con_c}</td>
                            <td>{d.uweight_c}</td>
                            <td>{d.recived_c - d.doa_c - d.con_c - d.uweight_c}</td>
                            <td>{d.recived_c}</td>
                            <td rowSpan={2}>(جم) {(d.recived_w / d.recived_c).toFixed(3)}</td>
                            <td rowSpan={2}>{100 - ((d.recived_c - d.doa_c - d.con_c - d.uweight_c) / d.recived_c).toFixed(2)} %</td>
                          </tr>
                          <tr >
                            <td> وزن(كجم)</td>
                            <td>{d.doa_w}</td>
                            <td>{d.con_w}</td>
                            <td>{d.uweight_w}</td>
                            <td>{d.recived_w - d.doa_w - d.con_w - d.uweight_w}</td>
                            <td>{d.recived_w}</td>
                          </tr>
                          </>
                          )
                      })}
                    </tbody>
                      </Table>
                  <div className=" flex space-x-5 mt-8 ">
                    <div className=" w-2/4  ">
                      <DataDiscrip ar="الدجاج الحى المستلم من بداية الشهر"  en ="MTD Recived Live Chicken"/>
                      {/* chart element */}
                      <div className="h-full w-full mb-8 hover:scale-105">
                        <Line 
                          data={LiveChart}
                          options={CahrtOptions}
                          plugins={[ChartDataLabels]}
                        />
                      </div>
                    </div>

                    <div className=" w-2/4 ">
                      <DataDiscrip ar="متوسط الوزن ونسبة المرفوض من بداية الشهر"  en ="MTD Avg Weight(Kg)"/>
                       <div className="h-full w-full mb-8  hover:scale-105">
                        <Bar 
                          data={AvgWeightChart} 
                          options={CahrtOptions}
                          plugins={[ChartDataLabels]}
                      />
                      </div>
                    </div>
                  </div>
                  <Action id="recivedchk"/>

                </div>
              </>
            }/>        
        {/* end of first slide */}

        {/* start of second slide */}
        <Collapse ar="التجانس والوزن المستهدف" en="SPP Uniformity & Target Weight" 
            data={
              <>
                <div className="  pl-6 mb-8 ">
                  <DataDiscrip ar="توزيع اوزان الدجاج المذبوح"    en ="Slaughtered Chicken Weight Distribution"/>
                  <Table striped bordered hover size="sm" className=" text-center">
                    <thead className="">
                      <tr id="tr" className=" text-gray-600">
                        <th className="">رقم الباتش</th>
                        {Weights.map((w, i)=>{return (<th key={i} className="">{w}</th>)})}
                        <th className="">نسبة الوزن المستهدف</th>
                        <th className="">نسبة التجانس</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Uniformity.map((data , index)=>{
                        return (
                          <>
                            <tr key={index}>
                              <td>{data.batchNo}</td>
                              {data.count.map((d, i)=>{return(<td key={i}>{d}</td>)})}
                              <td>{(data.trgetWeight * 100).toFixed(1)} %</td>
                              <td>{(data.uniformity * 100).toFixed(1)} %</td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </Table>
                  <div className=" flex space-x-5 mt-8 mb-6">
                    <div className=" w-2/4 ">
                      <DataDiscrip ar="نسبة الدجاج المطلوب للذبح"  en ="MTD Target Weight %"/>
                      <div className="h-full w-full hover:scale-105">
                        <Bar 
                          data={UniformityChart} 
                          options={CahrtOptions}
                          plugins={[ChartDataLabels]}
                        />
                      </div>
                    </div>

                    <div className=" w-2/4 ">
                      <DataDiscrip ar="نسبة الدجاج المطلوب للذبح"  en ="MTD Target Weight %"/>
                      <div className="h-full w-full hover:scale-105">
                        <Bar 
                          data={Histogram} 
                          options={CahrtOptions}
                          plugins={[ChartDataLabels]}
                        />
                      </div>
                    </div>
                  </div>
                  <Action id="uniformity"/>

                </div>
              </>
              }
            />

        {/* end of second slide */}

        {/* start of third slide */}

        <Collapse ar="New" en="New" 
            data={
              <>
              
              </>
            }
            />
        {/* end of third slide */}

      </Container>
    </div>
  );
}

export default DailyReport;


export async function getServerSideProps(){
  
let livechicken = [];
let uniformity = [];
let AllDates = ""

const LiveChkref = collection(db , 'liveChkData')
const uniformityref = collection(db , 'uniformity')
// get live chk data
 await getDocs(LiveChkref)
  .then(response=>{     
    let LiveChkData = response.docs.map(doc=>(
      {id:doc.id, data:doc.data()}
    ))
    .map(res =>{return res.data })
    return LiveChkData
    })
    .then((res)=>{
      livechicken = res ,
      AllDates = res.map((d)=>{return d.date})
      AllDates.sort((a,b)=>(a > b)?1:-1)
    } )

// get uniformity data
 await getDocs(uniformityref)
.then(response=>{     
  let uniformityData = response.docs.map(doc=>(
    {id:doc.id, data:doc.data()}
  ))
  .map(res =>{return res.data })
  return uniformityData
  })
  .then((res)=>{uniformity = res} )
  

  
  // const livechicken = dailyRepContent.filter((d)=>d.discrip === "lifechk")
  // const livechicken = dailyRepContent.filter((d)=>d.discrip === "lifechk")
  // const uniformity = dailyRepContent.filter((d)=>d.discrip === "uniformity")
  
  return {
    props:{
      livechicken:livechicken.sort((a,b)=>(a.date>b.date)?1:-1),
      uniformity:uniformity.sort((a,b)=>(a.date>b.date)?1:-1),
      AllDates,
      // LastDate:AllDates[AllDates.length - 1],
    }
  }
}
