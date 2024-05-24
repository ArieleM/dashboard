import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutComponent() {
  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Valor',
        data: [10, 55, 5, 15, 15],
        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
      },
    ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Rosquinha',
      },
    },
  }
  return (
    <div>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  )
}
