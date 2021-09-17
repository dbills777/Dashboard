import Feature from '../../components/Feature/Feature';
import Chart from '../../components/Chart/Chart';
import './home.scss';

const home = () => {
  return (
    <div className='home'>
      This is the home page
      <Feature />
      <Chart />
    </div>
  );
};

export default home;
