import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdSearch } from 'react-icons/io'
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
      <div className='h-20 flex p-4 px-8 sticky top-0 bg-white z-10 shadow'>
        <Button className='mr-5 rounded-md' onClick={() => collapseSidebar()}>
            <GiHamburgerMenu className='text-2xl' />
        </Button>
        <form className="flex" onSubmit={(e:React.SyntheticEvent) => {e.preventDefault();setFilter(searchString)}}>
            <Input placeholder='Search for...' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value.toLowerCase())} />
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
