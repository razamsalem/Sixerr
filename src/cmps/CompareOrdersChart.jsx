import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Orders: 13,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    Orders: 16,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    Orders: -2,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thr',
    Orders: 4,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    Orders: -4,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    Orders: -10,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    Orders: 24,
    pv: 4300,
    amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.Orders));
  const dataMin = Math.min(...data.map((i) => i.Orders));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export class CompareOrdersChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-filled-by-sign-0h7rt';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={470}
          height={300}
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
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="Orders" stroke="#95979d" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
