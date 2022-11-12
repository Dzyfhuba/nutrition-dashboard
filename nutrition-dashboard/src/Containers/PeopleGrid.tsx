import React, { useEffect, useState } from 'react'
import { PersonInterface } from '../Interfaces/PersonInterface'
import axios, { Axios, AxiosError } from 'axios'
import { host } from '../Variables/Server'
import Swal from 'sweetalert2'
import Collapsible from 'react-collapsible'
import PersonNutritionsStats from './PersonNutritionsStats'
import LoadingSpinner from '../Components/LoadingSpinner'
import Switch from "react-switch"
import { CgMenuBoxed } from 'react-icons/cg'
import { TbColumns } from 'react-icons/tb'

type Props = {}

const PeopleGrid = (props: Props) => {
  const [people, setPeople] = useState<PersonInterface[]>([])
  const [collapsesOpen, setCollapseOpen] = useState<string[]>([])
  const [isDualCol, setDualCol] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      const peopleFromResponse = await axios
        .get(host + '/people')
        .then((res) => res.data)
        .catch((err: AxiosError) => {
          Swal.fire({
            title: err.message,
            icon: 'error',
            showCancelButton: false,
            showCloseButton: false,
            showConfirmButton: false,
            showDenyButton: false,
          })
        })
      setPeople(peopleFromResponse)
    })()
  }, [])

  const Empty = (
    <span>No Data</span>
  )

  console.log(collapsesOpen)

  return (
      <>
        <Switch checked={isDualCol} onChange={setDualCol} className={'mb-3'} uncheckedIcon={<CgMenuBoxed className='p-1 text-white h-full w-full block' />} checkedIcon={<TbColumns className='p-1 text-white h-full w-full block' />} />
        <div className={`grid grid-flow-row-dense gap-7 ${isDualCol ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {people.length ? people.map(person => (
          <Collapsible
            key={person.id}
            trigger={<div className="bg-blue-50 text-blue-700 p-3">
              <h1 className='font-bold'>{person.name}</h1>
              <small className='text-blue-300 hover:text-blue-700'>{person.id}</small>
            </div>}
            classParentString={'overflow-hidden Collapsible rounded-md bg-white shadow h-min'}
            contentOuterClassName={'shadow-md'}
            contentInnerClassName='p-3 bg-white shadow'
            onOpen={() => setCollapseOpen([...collapsesOpen, person.id])}
            overflowWhenOpen={'visible'}
            onClose={() => setCollapseOpen(collapsesOpen.filter(item => item !== person.id))}
          >
            {collapsesOpen.includes(person.id) ? (
              <PersonNutritionsStats person={person} />
            ) : (
              <LoadingSpinner />
            )}
          </Collapsible>
        )) : (Empty)}
      </div>
    </>
  )
}

export default PeopleGrid
