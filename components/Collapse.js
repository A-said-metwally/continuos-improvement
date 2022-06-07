import React,{ useEffect, useState} from 'react'
import SlideDiscrip from './SlideDiscrip'

function Collapse({data, ar, en }) {
  const [Show , setShow] = useState(true)
    
  const showHide=()=>{
    setShow(!Show)
  }

  return (
    <div>
        <SlideDiscrip ar={ar}  en={en} showHide={showHide}/>
        { Show && data}
    </div>
  )
}

export default Collapse