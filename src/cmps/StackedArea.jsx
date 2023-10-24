import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
      name: 'Mon',
    Orders: 4000,
    Views: 2400,
    Revenue: 2400,
  },
  {
    name: 'Tue',
    Orders: 3000,
    Views: 1398,
    Revenue: 2210,
  },
  {
    name: 'Wed',
    Orders: 2000,
    Views: 9800,
    Revenue: 2290,
  },
  {
    name: 'Thr',
    Orders: 2780,
    Views: 3908,
    Revenue: 2000,
  },
  {
    name: 'Fri',
    Orders: 1890,
    Views: 4800,
    Revenue: 2181,
  },
  {
    name: 'Sat',
    Orders: 2390,
    Views: 3800,
    Revenue: 2500,
  },
  {
    name: 'Sun',
    Orders: 3490,
    Views: 4300,
    Revenue: 2100,
  },
];

export class StackedArea extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Orders" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Views" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
