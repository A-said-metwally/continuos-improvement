import React from 'react'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

function CiTeam() {
  return (
    <div>
        <Container className='p-2 mb-14'>
        <div className="about-us-wraper">
            <div className="profile 
                hover:scale-125 hover:bg-slate-200 z-50
              hover:border-emerald-400 hover:rounded-lg border-1
                hover:shadow-lg">
                <Image width={100} height={100} src="/mbasha.jpg" alt="profile pic" className="pic"/>
                <h3 className="name text-xl text-gray-400 font-bold">M-Basha</h3>
                <h5 className="title text-blue-500 font-semibold">Manager</h5>
                <a href="#">View</a>
            </div>
            <div className="profile
                hover:scale-125 hover:bg-slate-200 z-50
                hover:border-emerald-400 hover:rounded-lg border-1
                hover:shadow-lg">
                <Image width={100} height={100} src="/hesh.jpg" alt="profile pic" className="pic"/>
                <h3 className="name text-xl text-gray-400 font-bold">Hesham</h3>
                <h5 className="title text-blue-500 font-semibold">Member</h5>
                <a href="#">View</a>
            </div>
            <div className="profile
                hover:scale-125 hover:bg-slate-200 z-50 
                hover:border-emerald-400 hover:rounded-lg border-1
                hover:shadow-lg">
                <Image width={100} height={100} src="/abass.jpg" alt="profile pic" className="pic"/>
                <h3 className="name text-xl text-gray-400 font-bold">Mahmoud</h3>
                <h5 className="title text-blue-500 font-semibold">Member</h5>
                <a href="#">View</a>
            </div>
            <div className="profile
                hover:scale-125  hover:bg-slate-200 z-50
                hover:border-emerald-400 hover:rounded-lg border-1
                hover:shadow-lg">
                <Image width={100} height={100} src="/logo.jpg" alt="profile pic" className="pic"/>
                <h3 className="name text-xl text-gray-400 font-bold">Ahmed</h3>
                <h5 className="title text-blue-500 font-semibold">Member</h5>
                <a href="#">View</a>
            </div>
        </div>


        </Container>
    </div>
  )
}

export default CiTeam