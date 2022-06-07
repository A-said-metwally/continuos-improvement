import React,{useEffect, useState } from 'react'
import {Table} from "react-bootstrap";


function LivechkData({LiveChk}) {


  return (
    <div className='mt-8 livetable overflow-scrolly'>
        <Table striped bordered hover size="sm  ">
            <thead className=" text-center text-gray-600">
                <tr className=' '>
                <th>التاريخ</th>
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
            <tbody className=" text-center rtl ">
                {LiveChk.map((d , index)=>{
                return (
                    <>
                    <tr className=" align-middle  " key={index}>
                    <td rowSpan={2}>{d.data.date}</td>
                    <td rowSpan={2}>{d.data.patchno}</td>
                    <td> #عدد</td>
                    <td>{d.data.doa_c}</td>
                    <td>{d.data.con_c}</td>
                    <td>{d.data.uweight_c}</td>
                    <td>{d.data.recived_c - d.data.doa_c - d.data.con_c - d.data.uweight_c}</td>
                    <td>{d.data.recived_c}</td>
                    <td rowSpan={2}>(جم) {(d.data.recived_w / d.data.recived_c).toFixed(3)}</td>
                    <td rowSpan={2}>{100 - ((d.data.recived_c - d.data.doa_c - d.data.con_c - d.data.uweight_c) / d.data.recived_c).toFixed(2)} %</td>
                    <td rowSpan={2} >
                        <button 
                            onClick={()=>console.log(d.id)} 
                            className=' bg-blue-600 p-1 rounded-md text-white ml-3'>تعديل</button>
                        <button className=' bg-red-600 p-1 rounded-md text-white'>حذف</button>
                    </td>
                    </tr>
                    <tr>
                    <td> وزن(كجم)</td>
                    <td>{d.data.doa_w}</td>
                    <td>{d.data.con_w}</td>
                    <td>{d.data.uweight_w}</td>
                    <td>{d.data.recived_w - d.data.doa_w - d.data.con_w - d.data.uweight_w}</td>
                    <td>{d.data.recived_w}</td>
                    </tr>
                    </>
                    )
                })}
            </tbody>
        </Table>
    </div>
  )
}

export default LivechkData

