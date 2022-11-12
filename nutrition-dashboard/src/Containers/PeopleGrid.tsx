import React, { useEffect, useState } from 'react'
import { PersonInterface } from '../Interfaces/PersonInterface'
import axios, { Axios, AxiosError } from 'axios'
import { host } from '../Variables/Server'
import Swal from 'sweetalert2'
import Collapsible from 'react-collapsible'
import PersonNutritionsStats from './PersonNutritionsStats'
import LoadingSpinner from '../Components/LoadingSpinner'

type Props = {}

const PeopleGrid = (props: Props) => {
  const [people, setPeople] = useState<PersonInterface[]>([])
  const [collapsesOpen, setCollapseOpen] = useState<string[]>([])

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
    <div className='grid grid-flow-dense grid-cols-1 gap-7'>
      {people.length ? people.map(person => (
        <Collapsible
        key={person.id}
          trigger={
            <div className="bg-blue-50 text-blue-700 p-3">
              <h1 className='font-bold'>{person.name}</h1>
              <small className='text-blue-300 hover:text-blue-700'>{person.id}</small>
            </div>
          }
          classParentString={'overflow-hidden Collapsible shadow-md rounded-md bg-white'}
          contentInnerClassName='p-3'
          onOpen={() => setCollapseOpen([...collapsesOpen, person.id])}
          overflowWhenOpen={'visible'}
          onClose={() => setCollapseOpen(collapsesOpen.filter(item => item !== person.id))}
        >
          {
            collapsesOpen.includes(person.id) ? (
              <PersonNutritionsStats person={person} />
            ) : (
              <LoadingSpinner />
            )
          }
        </Collapsible>
      )) : (Empty)}
    </div>
  )
}

export default PeopleGrid
