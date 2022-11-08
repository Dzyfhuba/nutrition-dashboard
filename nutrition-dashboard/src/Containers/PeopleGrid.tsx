import React, { useEffect, useState } from 'react'
import { PersonInterface } from '../Interfaces/PersonInterface'
import axios, { Axios, AxiosError } from 'axios'
import { host } from '../Variables/Server'
import Swal from 'sweetalert2'
import Collapsible from 'react-collapsible'

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
    <div className='grid grid-flow-dense grid-cols-2 gap-7'>
      {people.length ? people.map(person => (
        // <article
        //   key={person.id}
        //   className={'bg-white rounded-md overflow-hidden shadow-md'}
        // >
        //   <div className="bg-blue-50 text-blue-700 p-3">
        //     <h1 className='font-bold'>{person.name}</h1>
        //     <small className='text-blue-300 hover:text-blue-700'>{person.id}</small>
        //   </div>tIL
        //   <div className="">
        //     asdjknakdjasnd
        //   </div>
        // </article>
        <Collapsible
        key={person.id}
          trigger={
            <div className="bg-blue-50 text-blue-700 p-3">
              <h1 className='font-bold'>{person.name}</h1>
              <small className='text-blue-300 hover:text-blue-700'>{person.id}</small>
            </div>
          }
          transitionTime={100}
          classParentString={'rounded-md overflow-hidden'}
          openedClassName={'row-span-auto bg-white'}
          contentInnerClassName='bg-white p-3'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nemo unde modi mollitia rerum enim aperiam earum optio, necessitatibus, ipsum magni quae, aliquid labore corrupti obcaecati. Cum, laudantium! Corrupti, aliquid.
        </Collapsible>
      )) : (Empty)}
    </div>
  )
}

export default PeopleGrid
