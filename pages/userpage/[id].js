import { async } from '@firebase/util'
import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header'

function UserPage() {
const auth = ['الدجاج الحى','انتاج المجزر','انتاج المصنعات','مرتجعات العملاء',]
const [userData, setuserData] = useState()
const [PassForm, setPassForm] = useState(false)
const [UserImg, setUserImg] = useState(null)
const [ImageUpload, setImageUpload] = useState(null)
const [ShowSaveBtn, setShowSaveBtn] = useState(false)



function SellectImg(){
    let imgSelector = document.getElementById("imgPicker")
    imgSelector.click()
}

const addImage = (e)=>{
    const reader = new FileReader
    if(e.target.files[0]){
        setImageUpload(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
        setUserImg(readerEvent.target.result)
        setShowSaveBtn(true)
    }
}


useEffect(()=>{
    const myPromis = new Promise((resolve, reject)=>{
        const userData = JSON.parse(sessionStorage.getItem('userinfo'))
            resolve(userData)
        }).then((userData)=>{
            setuserData(userData),
            setUserImg(userData.Image)})
},[])

  return (
    <div>
        <Container className=' bg-gray-100 p-4 rounded-md shadow-md mt-20'>
            <Head>
                <title>{userData?.Name}</title>
            </Head>

            <Header/>
            <div className='flex flex-col justify-end items-end '>
                <div className='flex space-x-8 justify-end'>
                    <div className=' text-right'>
                        <h1 className=' p-2 text-gray-500 text-xl font-bold'>{userData?.Name}</h1>
                        <h2 className=' p-2 text-blue-600 text-md font-bold'>مبرمج</h2>
                        <h2 className=' p-2 text-gray-500 text-md font-bold'>إدارة التحسين المستمر</h2>
                        <h2 className=' p-2 text-gray-500 text-md font-bold'>الصلاحيات المتاحة : 
                            <span className=" text-blue-500">( {userData?.Pages.map(page => page.name).join(" - ")} )</span> </h2>
                        <div className='flex justify-end mt-6 space-x-8 '>
                        <button 
                            className=' bg-gray-100 rounded-md shadow-md 
                            hover:bg-blue-600 hover:text-white cursor-pointer
                            p-2 text-lg'
                            onClick={()=>{setPassForm(false) , SellectImg()}}
                            >
                        تغيير الصورة الشخصية
                        </button>
                        <button 
                            className=' bg-gray-100 rounded-md shadow-md 
                            hover:bg-blue-600 hover:text-white cursor-pointer
                            p-2 text-lg'
                            onClick={()=>setPassForm(true)}
                            >
                        تغيير الرقم السرى
                        </button>
                        
                        </div>
                        <input 
                            onChange={addImage}
                            type="file" 
                            className=' hidden' 
                            placeholder='اختر الصورة' 
                            id="imgPicker" 
                        />
                        {/* {UserImg && <img src={UserImg} 
                            className=" h-50 w-50 "
                        />} */}
                        
                        
                        <form 
                            className= {`${PassForm ? "flex transition-all duration-100"
                                : " hidden"} 
                                border-gray-400 shadow-md rounded-md p-2 flex-col mt-12 border-2`}>
                            <lable className=" text-md text-blue-600 font-semibold">الرقم السرى الحالى</lable>
                            <input 
                                className='p-1 mt-1 mb-2 text-right text-lg
                                focus:outline-none focus:border-green-300 
                                border-4 rounded-md ' 
                                type="password" 
                                placeholder='ادخل الرقم السرى الحالى' />
                            
                            <lable className=" text-md text-blue-600 font-semibold">الرقم السرى الحالى</lable>
                            <input 
                                className='p-1 mt-1 mb-2 text-right text-lg
                                focus:outline-none focus:border-green-300 
                                border-4 rounded-md ' 
                                type="password" 
                                placeholder='ادخل الرقم السرى الجديد' />
                            
                            <lable className=" text-md text-blue-600 font-semibold">الرقم السرى الحالى</lable>
                            <input 
                                className='p-1 mt-1 mb-2 text-right text-lg
                                focus:outline-none focus:border-green-300 
                                border-4 rounded-md ' 
                                type="password" 
                                placeholder='إعادة إدخال الرقم الجديد' />
                               
                            <button 
                                className=' text-lg text-blue-600 rounded-lg mt-2
                                font-bold p-2 cursor-pointer hover:bg-blue-500 hover:text-white '
                                >
                                حفظ التغييرات
                            </button>
                        </form>

                    </div>
                    <div className='flex flex-col'>
                        <img className='w-52 h-52 rounded-full shadow-md' src={UserImg}/>
                        {ShowSaveBtn && 
                            <button className=' text-blue-700 font-semibold
                            cursor-pointer mt-2 p-2 rounded-md hover:bg-gray-200'>
                                حفظ التغييرات
                            </button>
                       }
                    </div>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default UserPage

// export async function getServerSideProps(context){
//     const UserCode = context.params.id

//     const usersRef = collection(db , 'users')
//     getDocs(usersRef)
//     .then(response=>{     
//       let usersData = response.docs.map(doc=>(
//         { id:doc.id, data:doc.data()}
//       ))
//       return usersData
//     })
//     // .then((res)=>{
//     //   let usersInfo = res.map(res =>{ return {id , data} })
//     //   return usersInfo
//     // })
//     .then((usersInfo)=>{
//       let CurrentUser = usersInfo.find((user)=>user.data.Code === UserCode)
//       return {CurrentUser}
//     }).then((res)=>console.log(res))
//     // .then((CurrentUser)=>{
//     //   if(UserPass === CurrentUser.Pass){
//     //   let userinfo = {
//     //    Code:CurrentUser.Code,
//     //    Name:CurrentUser.Name,
//     //    Image:CurrentUser.Image ,
//     //    Pages:CurrentUser.Pages }
//     //     }
//     // })
//     .catch(error => console.log(error.message))    
  

    
//     return {
//         props:{
//             data:"ahmed"
//         }
//     }
// }