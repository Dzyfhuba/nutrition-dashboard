import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io'
import { useProSidebar } from 'react-pro-sidebar'
import Button from '../Components/Button'
import Input from '../Components/Input'
import PeopleGrid from '../Containers/PeopleGrid'
import Main from '../Layouts/Main'

type Props = {}

const Dashboard = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  const [filter, setFilter] = useState<string>('')
  const [searchString, setSearchString] = useState<string>('')

  return (
    <Main>
      <div className='h-20 flex p-4 px-8 sticky top-0 bg-white z-50 shadow'>
        <Button className='mr-5 rounded-md' onClick={() => collapseSidebar()}>
            <GiHamburgerMenu className='text-2xl' />
        </Button>
        <form className="flex" onSubmit={(e:React.SyntheticEvent) => {e.preventDefault();setFilter(searchString)}}>
            <div className="relative">
              <Input placeholder='Search for...' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value.toLowerCase().replace(' ', ''))} />
              <Button 
                type='reset' 
                className={`bg-transparent text-blue-300 border-none px-0 py-0 aspect-square h-full hover:bg-transparent absolute right-0 ${!(filter || searchString) && 'hidden'}`}
                onClick={() => {setFilter('');setSearchString('')}}
              >
                <IoMdCloseCircle className='text-2xl mx-auto' />
              </Button>
            </div>
            <Button className='rounded-r-md -translate-x-1' type='submit'>
                <IoMdSearch className='text-2xl' />
            </Button>
        </form>
      </div>
      <PeopleGrid filter={filter} />
    </Main>
  )
}

export default Dashboard
