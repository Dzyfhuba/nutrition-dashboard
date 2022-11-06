import React from 'react'
import { useProSidebar } from 'react-pro-sidebar';
import Main from '../Layouts/Main'

type Props = {}

const Dashboard = (props: Props) => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Main>
      <button onClick={() => collapseSidebar()}>OOOOOO</button>
      Dashboard
    </Main>
  )
}

export default Dashboard