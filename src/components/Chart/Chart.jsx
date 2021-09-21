import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './chart.scss';

const Chart = () => {
  const data = [
    {
      name: 'Jan',
      'Active Users': 4000,
      'New Users': 2400,
    },
    {
      name: 'Feb',
      'Active Users': 13025,
      'New Users': 16000,
    },
    {
      name: 'Mar',
      'Active Users': 1200,
      'New Users': 999,
    },
    {
      name: 'Apr',
      'Active Users': 7452,
      'New Users': 8569,
    },
    {
      name: 'May',
      'Active Users': 3251,
      'New Users': 9654,
    },
    {
      name: 'Jun',
      'Active Users': 11025,
      'New Users': 7854,
    },
    {
      name: 'Jul',
      'Active Users': 12365,
      'New Users': 7854,
    },
    {
      name: 'Aug',
      'Active Users': 6952,
      'New Users': 1354,
    },
    {
      name: 'Sep',
      'Active Users': 4523,
      'New Users': 1522,
    },
    {
      name: 'Oct',
      'Active Users': 1245,
      'New Users': 6241,
    },
    {
      name: 'Nov',
      'Active Users': 9632,
      'New Users': 754,
    },
    {
      name: 'Dec',
      'Active Users': 9652,
      'New Users': 1248,
    },
  ];
  return (
    // Recharts.org - this is an implementaion of the simpleLineChartExample
    <div className='chart'>
      <h3 className='chartTitle'>Sales Analytics</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart
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
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Legend />
          <Line type='monotone' dataKey='Active Users' stroke='#8884d8' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='New Users' stroke='#82ca9d' />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
