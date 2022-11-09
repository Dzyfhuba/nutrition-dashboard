// import axios, { AxiosError } from 'axios'
// import React, { useEffect, useState } from 'react'
// import Swal from 'sweetalert2'
// import { NutritionInterface } from '../Interfaces/NutritionInterface'
// import { PersonInterface } from '../Interfaces/PersonInterface'
// import { host } from '../Variables/Server'
// import Chart from 'react-apexcharts'
// import { ReactGrid, Column, Row } from "@silevis/reactgrid"
// import "@silevis/reactgrid/styles.css"

// interface Props {
//   person: PersonInterface
// }

// const PersonNutritionsStats = (props: Props) => {
//   const [nutritions, setNutritions] = useState<NutritionInterface[]>([])
//   const [isLoading, setLoading] = useState<boolean>(true)
  
//   useEffect(() => {
//     (async() => {
//       const data = await axios.get(host + '/data/' + props.person.id)
//       .then(res => {
//         return res.data
//       })
//       .catch((err:AxiosError) => {
//         Swal.fire({
//           title: err.message,
//           icon: 'error',
//           showConfirmButton: false,
//         })
//         return
//       })
//     setNutritions(data)
//     setLoading(false)
//     })()

//     return () => {
//       setNutritions([])
//     }
//   }, [props.person.id])  

//   return (
//     <div className=''>
//       <Chart
//         options={{
//           chart: {
//             id: 'nutrition',
//           },
//           legend: {
//             show: true
//           },
//           xaxis: {
//             categories: nutritions.map(nutrition => nutrition.month)
//           }
//         }}
//         series= {[
//           {
//             name: 'Z Score',
//             data: nutritions.map(nutrition => nutrition.zScore),
//           },
//           {
//             name: 'Berat Badan',
//             data: nutritions.map(nutrition => nutrition.weight)
//           },
//           {
//             name: 'Tinggi Badan',
//             data: nutritions.map(nutrition => nutrition.height)
//           },
//         ]}
//         type="line"
//       />
//       <ReactGrid
//         columns={nutritions.map((nutrition, index) => {
//           return {
//             columnId: Object.keys(nutrition)[index],
//             width: 200
//           }
//         })}
//         rows={[
//           {
//             rowId: 'header',
//             cells: [
//               {type: 'header',}
//             ]
//           },
//           {
//             rowId: 'sad',
//             cells: [
//               {type: 'text', text: 'asd'}
//             ]
//           }
//         ]}
//       />
//     </div>
//   )
// }

// export default PersonNutritionsStats

import * as React from "react";
import { render } from "react-dom";
import { ReactGrid, Column, Row } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";

interface Person {
  name: string;
  surname: string;
}

const getPeople = (): Person[] => [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
  { name: "", surname: "" }
];

const getColumns = (): Column[] => [
  { columnId: "name", width: 150 },
  { columnId: "surname", width: 150 }
];

const headerRow: Row = {
  rowId: "header",
  cells: [
    { type: "header", text: "Name" },
    { type: "header", text: "Surname" }
  ]
};

const getRows = (people: Person[]): Row[] => [
  headerRow,
  ...people.map<Row>((person, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: person.name },
      { type: "text", text: person.surname }
    ]
  }))
];

export default function PersonNutritionsStats() {
  const [people] = React.useState<Person[]>(getPeople());

  const rows = getRows(people);
  const columns = getColumns();

  return <ReactGrid rows={rows} columns={columns} />;
}