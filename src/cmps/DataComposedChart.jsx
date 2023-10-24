import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    Best: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Tue',
    Best: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Wed',
    Best: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Thr',
    Best: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Fri',
    Best: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Sat',
    Best: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Sun',
    Best: 1400,
    pv: 680,
    amt: 1700,
  },
];

export class DataComposedChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Best" barSize={20} fill="#1dbf73" />
          <Line type="monotone" dataKey="Best" stroke="#195dc2" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
