import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        Profit: 50,
        pv: 100,
        amt: 50,
    },
    {
        name: 'Tue',
        Profit: 100,
        pv: 150,
        amt: 100,
    },
    {
        name: 'Wed',
        Profit: 80,
        pv: 50,
        amt: 50,
    },
    {
        name: 'Thr',
        Profit: 140,
        pv: 200,
        amt: 250,
    },
    {
        name: 'Fri',
        Profit: 300,
        pv: 350,
        amt: 350,
    },
    {
        name: 'Sat',
        Profit: 200,
        pv: 200,
        amt: 150,
    },
    {
        name: 'Sun',
        Profit: 350,
        pv: 350,
        amt: 350,
    },
];


export class AreaResChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

    render() {
        return (
            <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Profit" stroke="rgb(29, 191, 115)" fill="rgba(29, 191, 115,0.6)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default AreaResChart;
