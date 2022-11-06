import React from 'react'
import { Sidebar as Side, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {AiOutlineDashboard} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { FaSmileWink } from 'react-icons/fa'
import {IoMdPeople} from 'react-icons/io'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <>
      <Side>
        <Menu className='bg-primary text-white h-screen'>
          <MenuItem icon={<FaSmileWink className='text-8xl' />} className={'text-center h-16 text-2xl font-bold uppercase my-4'}>
            <span className='block'>Timbangan</span><span className='block'>Bayi</span>
          </MenuItem>
          <hr className='mx-5' />
          <MenuItem icon={<AiOutlineDashboard className='text-2xl' />}> Dashboard </MenuItem>
          <MenuItem icon={<IoMdPeople className='text-2xl' />}> Data List </MenuItem>
        </Menu>
      </Side>
    </>
  )
}

export default Sidebar