import React from 'react'



function User({id, Code , Name, Pass, Image , Pages}) {
  return (
    <div className='flex flex-col bg-gray-100
        // lg:flex-row lg:justify-center 
        sm:flex-col sm:justify-center 
      items-center p-6 mb-3  rounded-md shadow-md'>
        <img src={Image} alt="Name" 
            className=' h-16 w-16 rounded-full 
            shadow-md mr-6  ' 
        />
        <div className=' flex flex-col w-full justify-between items-center mt-6
        lg:flex-row lg:justify-center lg:items-center lg:mt-0
        sm:flex-col sm:mt-6'>
            <div className=' flexl w-full  lg:w-1/6 sm:w-full p-2'>
                <h1 className=' text-lg text-gray-500 font-bold capitalize '>
                    <span className='text-blue-500'>Code : </span>{Code}
                </h1>
            </div>
            <div className=' flexl w-full  lg:w-1/6 sm:w-full p-2'>
                <h1 className=' text-lg text-gray-500 font-bold capitalize '>
                    <span className='text-blue-500'>Name : </span>{Name}
                </h1>
            </div>
            <div className=' flexl w-full  lg:w-1/6 sm:w-full p-2'>
                <h1 className=' text-lg text-gray-500 font-bold capitalize '>
                    <span className='text-blue-500'>Pass : </span>{Pass}
                </h1>
            </div>
            <div className=' flexl w-full  lg:w-2/6 sm:w-full p-2'>
                <h1 className=' text-lg text-gray-500 font-bold capitalize '>
                    <span className='text-blue-500'>Pages : </span>
                        {Pages.map(page => { return page.name}).join(" - ")}
                </h1>
            </div>
            <div className=' flexl w-full  lg:w-1/6 sm:w-full p-2 space-x-8'>
                <button 
                onClick={()=>console.log(id)}
                className=' bg-blue-600 text-white p-2 cursor-pointer
                 text-sm rounded-md border-1 hover:border-orange-500'
                >Edit Pages</button>
            <button 
                className=' bg-red-600 text-white p-2 cursor-pointer
                 text-sm rounded-md border-1 hover:border-orange-500'
                >Del</button>
            </div>
        </div>        
    </div>
  )
}

export default User