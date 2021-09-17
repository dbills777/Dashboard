import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './chart.scss';

const Chart = () => {
    const data = [
      {
        name: 'Jan',
        'Active User': 4000,
        'New User': 2400,
      },
      {
        name: 'Feb',
        'Active User': 2500,
        'New User': 1600,
      },
      {
        name: 'Mar',
        'Active User': 1200,
        'New User': 999,
      },
      {
        name: 'Apr',
        'Active User': 7452,
        'New User': 8569,
      },
      {
        name: 'May',
        'Active User': 3251,
        'New User': 9654,
      },
      {
        name: 'Jun',
        'Active User': 11025,
        'New User': 7854,
      },
      {
        name: 'Jul',
        'Active User': 12365,
        'New User': 7854,
      },
      {
        name: 'Aug',
        'Active User': 6952,
        'New User': 1354,
      },
      {
        name: 'Sep',
        'Active User': 4523,
        'New User': 589,
      },
      {
        name: 'Oct',
        'Active User': 1245,
        'New User': 6241,
      },
      {
        name: 'Nov',
        'Active User': 9632,
        'New User': 754,
      },
      {
        name: 'Dec',
        'Active User': 9652,
        'New User': 1248,
      },

    ];
  return (
    <div className='chart'>
      <h3 className='chartTitle'>Sales Analytics</h3>
      <ResponsiveContainer width='100%' aspect={4/1} >
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
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='Active User' stroke='#8884d8' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='New User' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
