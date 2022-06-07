import React, { useState } from 'react'
import { Spinner ,Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import {collection , addDoc, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebase';


function LivechkInput({getData}) {

    const [Data, setData]=useState({
        date:null,
        patchno:null,
        recived_c:null,
        doa_c:null,
        uweight_c:null,
        con_c:null,
        recived_w:null,
        doa_w:null,
        uweight_w:null,
        con_w:null,
        // time:serverTimestamp()

    })

    const {recived_c , doa_c , uweight_c , con_c,
           recived_w , doa_w , uweight_w , con_w} = {...Data}
   
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true)
        alert("من فضلك اكمل البيانات المطلوبة")
        return
      }
        // upload data
        const LiveChkref = collection(db , 'liveChkData')
        addDoc(LiveChkref , Data)
        .then(()=>{
            // refresh data
            getData()
            // reset form
            setData({
            date:"",
            patchno:"",
            recived_c:"",
            doa_c:"",
            uweight_c:"",
            con_c:"",
            recived_w:"",
            doa_w:"",
            uweight_w:"",
            con_w:"",
            })
        })
        .then(res =>{
            alert("تم اضافة البيانات بنجاح")
            setValidated(false)
         })


    };



  return (
    <div className=' rtl '>
    <Form noValidate validated={validated} onSubmit={handleSubmit}
     className=" relative flex flex-col items-end text-right
        p-4 border border-b-purple-500 rounded-lg shadow-md">

        <div className='flex flex-row-reverse items-center'>
        <Form.Group as={Col} md="6" controlId="validationCustom01" className=' mb-6 ml-8'>
            <Form.Label className='text-xl font-bold text-gray-700'>التاريخ</Form.Label>
            <Form.Control
                required
                type="date"
                placeholder=""
                value= {Data.date}
                onChange={(e)=>setData({...Data , date : e.target.value})}
                className=" text-center text-gray-700 text-lg shadow-md"
            />
            <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom01" className=' mb-6'>
            <Form.Label className='text-xl font-bold text-gray-700'>رقم الباتش</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder=""
                value= {Data.patchno}
                onChange={(e)=>setData({...Data , patchno : e.target.value})}
                className=" text-center text-gray-700 text-lg shadow-md"
            />
            <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
        </Form.Group>
        </div>
        {/* start first row count */}
        <div className='flex  items-center  flex-row-reverse '> 
            <span className=' flex mt-7 bg-gray-300 shadow-md pt-2 pb-2 pr-6 pl-6
             text-xl font-bold text-gray-700 rounded-md'>
                العدد
            </span>
            <div>
            <Row className="flex flex-row-reverse  justify-start mb-2 text-center font-semibold text-lg text-gray-700 mr-6">
                <Form.Group as={Col} md="2" controlId="validationCustom02">
                <Form.Label>إجمالى الوارد</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder=""
                    value= {Data.recived_c}
                    onChange={(e)=>setData({...Data, recived_c : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <Form.Label>نافق الطريق</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value= {Data.doa_c}
                    onChange={(e)=>setData({...Data, doa_c : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <Form.Label>دجاج تحت الوزن</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value= {Data.uweight_c}
                    onChange={(e)=>setData({...Data, uweight_c : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <Form.Label>المعدم الطبى</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value= {Data.con_c}
                    onChange={(e)=>setData({...Data, con_c : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <Form.Label>الدجاج الصافى</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"    
                    disabled
                    readOnly
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value={recived_c - doa_c - uweight_c - con_c}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
            </Row>
            </div>
        </div>

        {/* start second row weight */}
        <div className='flex  items-center  flex-row-reverse mt-8'> 
            <span className=' flex items-center bg-gray-300 shadow-md pt-2 pb-2 pr-6 pl-6
             text-xl font-bold text-gray-700 rounded-md'>
                الوزن
            </span>
            <div>
            <Row className="mb-2 flex-row-reverse  justify-start text-center font-semibold text-lg text-gray-700 mr-6">

                <Form.Group as={Col} md="2" controlId="validationCustom02">
                <Form.Control
                    required
                    type="number"                    placeholder=""
                    value= {Data.recived_w}
                    onChange={(e)=>setData({...Data, recived_w : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value= {Data.doa_w}
                    onChange={(e)=>setData({...Data, doa_w : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value= {Data.uweight_w}
                    onChange={(e)=>setData({...Data, uweight_w : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value= {Data.con_w}
                    onChange={(e)=>setData({...Data, con_w : parseInt(e.target.value)})}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <InputGroup hasValidation>
                    <Form.Control
                    type="number"    
                    disabled
                    readOnly
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    value={recived_w - doa_w - uweight_w - con_w}
                    className=" text-center text-gray-700 text-lg shadow-md"
                    />
                    <Form.Control.Feedback type="invalid">بيانات مطلوبة</Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
            </Row>
            </div>

        </div>

        <Button className=" absolute bottom-8 left-4 p-3 bg-blue-400 " type="submit">Submit form</Button>
        </Form>
        
    </div>
  )
}

export default LivechkInput