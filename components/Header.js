import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Login from '../pages'


export default function Header() {
    const [Validation, setValidation] = useState(false)
    const [UserInfo, setUserInfo] = useState({Code:"", Name:"" ,Image:"" , Pages:[]})

    useEffect(()=>{
        let UserInfo = sessionStorage.getItem('userinfo')
        UserInfo = JSON.parse(UserInfo)
        if(!UserInfo )return 
        setUserInfo(UserInfo)
    },[])


    const menu = [
        {name:'التقرير اليومى' , link:`/dailyreport`},
        {name:'التقرير الشهرى' , link:"/monthlyreport"},
        {name:'مؤشرات الاداء' , link:"/kpis"},
        {name:'مرتجعات العملاء' , link:"/returns"},
        {name:'اخبار الدواجن' , link:""},
       ]


//   if(!Validation) return null


  return (
    <div className=' relative'>
            <div >
                <Navbar bg="light" expand="lg" fixed="top"  className=" shadow-md" >
                <Container className=' flex-row-reverse space-x-4 items-center'>
                    

                    <h1  href="#home" className=' ml-6 mt- text-xl font-bold text-green-700'>دواجن الوطنية</h1>
                    <Link href={`/userpage/${UserInfo.Code}`}>
                        <img
                        src={UserInfo.Image} alt="user image"
                        className=' w-12 h-12 rounded-full shadow-md hover:scale-110 transition-all duration-150 cursor-pointer '
                        />
                    </Link>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=' justify-center '>
                    <Nav className=" flex-row-reverse w-full mr-8 justify-between text-lg font-semibold items-center" >
                        <Link href={`/main`}>
                            <a className=" hover:border-b hover:scale-110 border-gray-500 no-underline text-gray-500">
                            الرئيسية
                            </a>
                        </Link>
                        {menu.map((m , index)=>{
                        return (
                            <Link  href={m.link} key={index}>
                                <a className=" hover:border-b hover:scale-110 border-gray-500 no-underline text-gray-500">
                                    {m.name}
                                </a>
                            </Link>
                            )
                        })}
                        <NavDropdown title="تسجيل بيانات" id="basic-nav-dropdown" className=' hover:scale-110' >
                            <div className=" text-right flex flex-col  mt-0">
                            {UserInfo.Pages.length !== 0 ? UserInfo.Pages.map((page , index)=>{
                                return (
                                    <Link href={page.ref} className=" " key={index}>
                                        <a className=" hover:bg-gray-200  hover:text-gray-700 p-2 no-underline text-gray-500">
                                            {page.name}
                                        </a>
                                    </Link>
                                    )
                            }): null }
                            </div>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">...</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    </div>
  )
}

