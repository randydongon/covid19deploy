import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import './Chart.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const chartData = async () => {
            setChartData(await fetchChartData())
        }

        chartData();

    }, [setChartData])

    const lineChart = (chartData.length
        ? (<Line
            data={{
                labels: chartData.map(date => date.lastUpdate),
                datasets: [{
                    data: chartData.map(confirmed => confirmed.confirmed),
                    label: 'Infected',
                    borderColor: '#63ace5',
                    fill: true,

                },
                {
                    data: chartData.map(deaths => deaths.deaths),
                    label: 'Deaths',
                    borderColor: '#fe4a49',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,

                }]
            }}
        />) : null
    );

    const barChat = (
        confirmed ?
            (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }],

                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }

                }

                }

            />) : null

    );
    return (
        <div className="chart-container">
            {country ? barChat : lineChart}
        </div>
    );
}

export default Chart;