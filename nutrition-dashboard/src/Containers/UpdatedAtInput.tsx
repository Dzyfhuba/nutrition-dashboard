import axios, { AxiosError } from 'axios'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import Swal from 'sweetalert2'
import Button from '../Components/Button'
import Input from '../Components/Input'
import { host } from '../Variables/Server'

type Props = {
  nutritionId: string,
  updatedAt: string
}

const UpdatedAtInput = (props: Props) => {
  const [isEdit, setEdit] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [date, setDate] = useState<string>('')

  const updateNutrition = async () => {
    setLoading(true)
    console.log(date);
    
    const res = await axios.put(host + '/nutritions/' + props.nutritionId, {
      updatedAt: DateTime.fromISO(date || props.updatedAt)
    })
      .catch((error:AxiosError) => {
        Swal.fire(error.status + error.name, error.message, 'error')
        console.error(error)
      })
      console.log(res);
      
    setLoading(false)
  }

  return (
    <>
      <td className='border border-r-0 border-slate-500 p-1 w-min'> 
        <Input 
          type={'datetime-local'}
          className={`w-min disabled:bg-white`}
          defaultValue={props.updatedAt.substring(0, 16)}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
          disabled={!isEdit}
        />
      </td>
      <td className='border border-slate-500'>
        <Button
          className={`bg-white text-blue-700 border-0 ${isEdit && 'hidden'}`}
            onClick={() => setEdit(true)}
        >
          <FaEdit />
        </Button>
        <Button
          className={`bg-white text-blue-700 border-0 ${!isEdit && 'hidden'}`}
          onClick={() => setEdit(false)}
        >
          <GiCancel />
        </Button>
        <Button
          className={`bg-white text-green-700 border-0 ${!isEdit && 'hidden'}`}
          onClick={() => updateNutrition()}
        >
          <FaCheck />
        </Button>
        <Button
          className={`bg-white text-red-700 border-0 ${isEdit && 'hidden'}`}
          onClick={() => { } }
        >
          <FaTrash />
        </Button>
      </td>
    </>
  )
}

export default UpdatedAtInput