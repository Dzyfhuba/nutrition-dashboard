import axios, { AxiosError } from 'axios'
import React, { TableHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { NutritionInterface } from '../Interfaces/NutritionInterface'
import { PersonInterface } from '../Interfaces/PersonInterface'
import { host } from '../Variables/Server'
import Chart from 'react-apexcharts'
import {DateTime} from 'luxon'
interface Props {
  person: PersonInterface
}

const PersonNutritionsStats = (props: Props) => {
  const [nutritions, setNutritions] = useState<NutritionInterface[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    (async() => {
      const data = await axios.get(host + '/nutritions?personId=' + props.person.id)
        .then(res => {
          return res.data
        })
        .catch((err:AxiosError) => {
          Swal.fire({
            title: err.message,
            icon: 'error',
            showConfirmButton: false,
          })
          return
        })
      setNutritions(data)
      setLoading(false)

    })()

    return () => {
      setNutritions([])
    }
  }, [props.person.id])  

  console.log(nutritions);
  

  return (
    <div className=''>
      <Chart
        options={{
          chart: {
            id: 'nutrition',
          },
          legend: {
            show: true
          },
          xaxis: {
            categories: nutritions.map(nutrition => nutrition.month)
          },
        }}
        series= {[
          {
            name: 'Z Score 1',
            data: nutritions.map(nutrition => nutrition.zScore1),
            // color: '#f00'
          },
          {
            name: 'Z Score 2',
            data: nutritions.map(nutrition => nutrition.zScore2),
            // color: '#0f0'
          },
          {
            name: 'Z Score 3',
            data: nutritions.map(nutrition => nutrition.zScore3),
            // color: '#00f',
          },
        ]}
        type="line"
      />
      <table id={`table-${props.person.id}`} className={'table-auto w-full'}>
        <thead>
          <tr>
            <th className='border'>Bulan</th>
            <th className='border'>Tinggi Badan</th>
            <th className='border'>Berat Badan</th>
            <th className='border'>Z Score</th>
            <th className='border'>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {nutritions.length && nutritions.map(({id, person_id, createdAt, ...rest}) => rest).map((nutrition, index) => (
            <tr key={index}>
              <td className='border p-1'>{nutrition.month}</td>
              <td className='border p-1'>{nutrition.height}</td>
              <td className='border p-1'>{nutrition.weight}</td>
              <td className='border p-1'>{nutrition.zScore1}</td>
              <td className='border p-1'>{nutrition.zScore2}</td>
              <td className='border p-1'>{nutrition.zScore3}</td>
              <td className='border p-1'>{DateTime.fromISO(nutrition.updatedAt).toFormat('dd LLL yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PersonNutritionsStats
