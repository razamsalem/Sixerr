import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Delivered on Time',
    A: 95,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Response Time',
    A: 75,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Quality of work',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Response Rate',
    A: 90,
    B: 130,
    fullMark: 150,
  },
];

export class StatsRadarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          {/* <PolarRadiusAxis /> */}
          <Radar name="Mike" dataKey="A" stroke="rgba(29, 191, 115, 1)" fill="rgba(29, 191, 115,0.6)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default StatsRadarChart;
