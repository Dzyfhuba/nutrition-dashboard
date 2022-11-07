import React, { useEffect, useState } from 'react'
import { PersonInterface } from '../Interfaces/PersonInterface'
import axios, { Axios, AxiosError } from 'axios'
import { host } from '../Variables/Server'
import Swal from 'sweetalert2'

type Props = {}

const PeopleGrid = (props: Props) => {
  const [people, setPeople] = useState<PersonInterface[]>([])

  useEffect(() => {
    ;(async () => {
      const peopleFromResponse = await axios
        .get(host + '/people')
        .then((res) => res.data)
        .catch((err: AxiosError) => {
          Swal.fire({
            title: err.message,
            icon: 'error',
            allowEnterKey: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
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

  return (
    <div className='grid grid-flow-row grid-cols-2 gap-7'>
      {people.length ? people.map(person => (
        <article
          key={person.id}
          className={'bg-white rounded-md overflow-hidden shadow-md'}
        >
          <div className="bg-blue-100 p-3">
            <h1>{person.name}</h1>
          </div>
          <div className="">
            asdjknakdjasnd
          </div>
        </article>
      )) : (Empty)}
    </div>
  )
}

export default PeopleGrid
