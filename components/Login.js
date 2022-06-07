import Link from 'next/link'
import React from 'react'


function Login() {
  return (
    <div>
        <div className=' flex flex-col items-center mt-8'>
              <h1 className=' text-red-600 text-2xl font-bold'>لم يتم تسجيل الدخول</h1>
              <Link href='/'>
                <a className=' font-bold
                text-blue-700 cursor-pointer p-2 
                  bg-gradient-to-br from-blue-200 to-yellow-100
                   rounded-md shadow-md mt-3 hover:scale-95'>
                 للدخول اضغط هنا
                </a></Link>
        </div>

    </div>
  )
}

export default Login