import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            // label: '# of Votes',
            data: [12, 2, 24, 18],
            backgroundColor: [
                'rgba(231, 189, 50, 0.8)',
                'rgba(163, 48, 48, 0.8)',
                'rgba(29, 191, 115, 0.8)',
                'rgba(25, 93, 194, 0.8)',
            ],
            borderColor: [
                '#e7bd32',
                '#a33030',
                '#1dbf73',
                '#195dc2',
            ],
            borderWidth: 1,
        },
    ],
}

export function DoughnutChart() {
    return <Doughnut data={data} width={80} height={80} />
}
