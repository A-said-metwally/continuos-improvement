import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <div className=' fixed top-0 right-0 z-1000
        w-full h-screen
        backdrop-blur-sm bg-white/30
        flex justify-center items-center '>
        <Spinner animation="border" variant="primary" className="h-12 w-12 font-bold" />
    </div>
  )
}

export default Loading