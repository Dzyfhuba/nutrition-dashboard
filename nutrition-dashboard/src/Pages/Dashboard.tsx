import React from 'react'
import { useProSidebar } from 'react-pro-sidebar'
import PeopleGrid from '../Containers/PeopleGrid'
import Main from '../Layouts/Main'

type Props = {}

const Dashboard = (props: Props) => {
  const { collapseSidebar } = useProSidebar()

  return (
    <Main>
      <PeopleGrid />
    </Main>
  )
}

export default Dashboard
