import React from 'react'
import { Line } from 'react-chartjs-2'
import { Paper } from '@material-ui/core'

const LineChart = (
    <Line
        data={{
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }}
        height={300}
        width={100}
        options={{
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                labels: {
                    fontSize: 25,
                },
            },
        }}
    />
)

const Chart = () => {
    return (
        <div className="chart">
            <h3 style={{ marginBottom: "10px" }}>Sales Report <span style={{ color: "gray" }}>September 2020</span></h3>
            <Paper variant="outlined" square children={LineChart} />
        </div>
    )
}

export default Chart