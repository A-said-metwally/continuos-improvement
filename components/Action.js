import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

function Action({id}) {
    const [Like, setLike] = useState(true)
    const [Comment, setComment] = useState("")
    
  return (
    <div>
    <div className="flex justify-start items-center bg-gray-100 rounded-lg shadow-md w-2/4">
        <div 
            className="  flex w-1/4 justify-center p-1 cursor-pointer hover:bg-gray-300 rounded-md"
            onClick={()=>setLike(!Like)}
            >
            {Like?<ThumbUpIcon className="h-8 text-green-600"/> : <ThumbDownIcon className="h-8 text-red-500"/>}
        </div>
        <div className=" flex w-3/4  space-x-3 justify-start items-center p-1 cursor-pointer  rounded-md">
            <form className=" flex w-full space-x-3">
                <input 
                    type="text"
                    placeholder='اترك تعليقك هنا' 
                    value={Comment}
                    className="p-2 w-full
                        text-right focus:outline-none rounded-md border border-gray-200"
                    />
                    <button className=' pl-2 text-gray-500 pr-2 
                     rounded-md font-semibold hover:border hover:text-green-600 
                     hover:border-green-700  cursor-pointer  
                    '>ارسال</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Action