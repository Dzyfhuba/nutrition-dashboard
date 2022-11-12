import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from '../Components/Button'
import Input from '../Components/Input'
import { useProSidebar } from 'react-pro-sidebar'

type Props = {}

const Navbar = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  return (
    <nav className='h-20 flex p-4 px-8 sticky top-0 bg-white z-10'>
        <Button className='mr-5 rounded-md' onClick={() => collapseSidebar()}>
            <GiHamburgerMenu className='text-2xl' />
        </Button>
        <div className="flex">
            <Input placeholder='Search for...' />
            <Button className='rounded-r-md -translate-x-1'>
                <IoMdSearch className='text-2xl' />
            </Button>
        </div>
    </nav>
  )
}

export default Navbar