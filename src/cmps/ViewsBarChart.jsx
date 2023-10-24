import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Views: 2404,
    Orders: 325,
    amt: 2400,
  },
  {
    name: 'Tue',
    Views: 1819,
    Orders: 124,
    amt: 2210,
  },
  {
    name: 'Wed',
    Views: 3422,
    Orders: 420,
    amt: 2290,
  },
  {
    name: 'Thr',
    Views: 1092,
    Orders: 79,
    amt: 2000,
  },
  {
    name: 'Fri',
    Views: 2958,
    Orders: 354,
    amt: 2181,
  },
  {
    name: 'Sat',
    Views: 2390,
    Orders: 212,
    amt: 2500,
  },
  {
    name: 'Sun',
    Views: 1520,
    Orders: 58,
    amt: 2100,
  },
];

export class ViewsBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Views" fill="#1dbf73aa" activeBar={<Rectangle fill="pink" stroke="#1dbf73" />} />
          <Bar dataKey="Orders" fill="#e7bd32aa" activeBar={<Rectangle fill="gold" stroke="#e7bd32" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
