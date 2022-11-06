import React from 'react'
import Sidebar from '../Containers/Sidebar'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className='bg-base min-h-screen'>
        {props.children}
      </main>
    </div>
  )
}

export default Main