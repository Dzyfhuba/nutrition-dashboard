import React from 'react'
import { useProSidebar } from 'react-pro-sidebar'
import Main from '../Layouts/Main'

type Props = {}

const DataList = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  
  return (
    <Main>
      <button onClick={() => collapseSidebar()}>OOOOOO</button>
      Data List
    </Main>
  )
}

export default DataList