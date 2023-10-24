import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '13-17',
    uv: 24,
    pv: 100,
    fill: '#8884d8',
  },
  {
    name: '18-24',
    uv: 55,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '25-29',
    uv: 80,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '30-38',
    uv: 85,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '39-49',
    uv: 65,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 24,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 80,
    pv: 4800,
    fill: '#ffc658',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
  fontSize: '14px',
};

export class AgeRadialBar extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={8} data={data}>
          <RadialBar
            minAngle={15}
            // label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    )
  }
}
