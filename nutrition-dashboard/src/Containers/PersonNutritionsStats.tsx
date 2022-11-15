import axios, { AxiosError } from 'axios'
import React, { TableHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { NutritionInterface } from '../Interfaces/NutritionInterface'
import { PersonInterface } from '../Interfaces/PersonInterface'
import { host } from '../Variables/Server'
import Chart from 'react-apexcharts'
import {DateTime} from 'luxon'
import Button from '../Components/Button'
import {IoReload} from 'react-icons/io5'
interface Props {
  person: PersonInterface,
  isDual: boolean,
}

const PersonNutritionsStats = (props: Props) => {
  const [nutritions, setNutritions] = useState<NutritionInterface[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    (async() => {
      await load()
    })()

    return () => {
      setNutritions([])
    }
  }, [])  

  const load = async () => {
    setLoading(true)
    console.log('load nutrition stats');
    
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
  }

  return (
    <>
      <div className="flex justify-end">
        <Button 
          className={`bg-transparent text-blue-700 border-0 hover:bg-transparent hover:rotate-90 duration-300 transition-transform 
          active:rotate-180`}
          onClick={async () => await load()}
        >
          <IoReload className='text-2xl font-bold' />
        </Button>
      </div>
      <div className={`grid grid-flow-row gap-3 relative ${props.isDual ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <Chart
          options={{
            chart: {
              id: 'nutrition',
            },
            legend: {
              show: true,
            },
            xaxis: {
              categories: nutritions.map((nutrition, index) => index+1),
              title: {
                text: 'Pengukuran ke-(n)',
                offsetY: 80
              },
              position: 'bottom'
            },
            yaxis: {
              title: {
                text: 'Z Score',
              },

            }
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
          <table id={`table-${props.person.id}`} className={`table-auto w-full`}>
            <thead>
              <tr>
                <th className='border border-slate-500'>Bulan</th>
                <th className='border border-slate-500'>Tinggi Badan</th>
                <th className='border border-slate-500'>Berat Badan</th>
                <th className='border border-slate-500'>Z Score 1</th>
                <th className='border border-slate-500'>Z Score 2</th>
                <th className='border border-slate-500'>Z Score 3</th>
                <th className='border border-slate-500'>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {nutritions.length ? nutritions.map(({id, person_id, createdAt, ...rest}) => rest).map((nutrition, index) => (
                <tr key={index}>
                  <td className='border border-slate-500 p-1'>{nutrition.month}</td>
                  <td className='border border-slate-500 p-1'>{nutrition.height}</td>
                  <td className='border border-slate-500 p-1'>{nutrition.weight}</td>
                  <td className='border border-slate-500 p-1'>{nutrition.zScore1}</td>
                  <td className='border border-slate-500 p-1'>{nutrition.zScore2}</td>
                  <td className='border border-slate-500 p-1'>{nutrition.zScore3}</td>
                  <td className='border border-slate-500 p-1'>{DateTime.fromISO(nutrition.updatedAt).toFormat('dd LLL yyyy')}</td>
                </tr>
              )) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
    </>
  )
}

export default PersonNutritionsStats
