import React from 'react'
import { Sidebar as Side, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {AiOutlineDashboard} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { FaSmileWink } from 'react-icons/fa'
import {IoMdPeople} from 'react-icons/io'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  //
}

const Sidebar = (props: Props) => {
  return (
    <Side className={props.className} backgroundColor='#4e73de' >
      <Menu 
        className='h-screen'
      >
        <MenuItem 
          routerLink={<Link to='/' />}
          icon={<FaSmileWink className='text-4xl' />}
          className={'text-center h-12 text-xl font-bold uppercase my-4'}
        >
          <span className='block'>Timbangan</span><span className='block'>Bayi</span>
        </MenuItem>
        <hr className='mx-5' />
        <MenuItem routerLink={<Link to='/' />} icon={<AiOutlineDashboard className='text-2xl' />}> Dashboard </MenuItem>
        <MenuItem routerLink={<Link to='/datalist' />} icon={<IoMdPeople className='text-2xl' />}> Data List </MenuItem>
      </Menu>
    </Side>
  )
}

export default Sidebar