import { Line } from 'react-chartjs-2'
import {
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Chart as ChartJS,
} from 'chart.js'

import { getSession } from '../services/session'
import { useEffect, useState } from 'react'
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export function LineComponent() {
  const [adata2, setAdata2] = useState()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    async function getDataSession() {
      const adata = await getSession()
      setAdata2(adata)
      setLoad(false)
    }
    getDataSession()
  }, [])

  // console.log({ adata2 })

  const { type, qtd } = adata2.reduce(
    (acc, current) => {
      acc.type.push(current.type)
      acc.qtd.push(current.qtd)
      return acc
    },
    { type: [], qtd: [] },
  )
  // console.log(output)

  const data = {
    labels: type,
    datasets: [
      {
        data: qtd,
        backgroundColor: 'transparent',
        borderColor: '#f26c6c',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  }
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        // min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + 'k',
        },
        grid: {
          borderDash: [2],
        },
      },
    },
  }
  return (
    <div>{load ? 'Carregando' : <Line data={data} options={options} />};</div>
  )
}
