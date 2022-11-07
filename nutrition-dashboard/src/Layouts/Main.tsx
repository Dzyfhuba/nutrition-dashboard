import React from 'react'
import Navbar from '../Containers/Navbar'
import Sidebar from '../Containers/Sidebar'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <main className='bg-base min-h-screen p-7'>
          {props.children}
        </main>
      </div>
    </div>
  )
}

export default Main