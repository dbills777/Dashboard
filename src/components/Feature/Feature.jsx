import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './feature.scss'

const Feature = () => {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$34231.34</span>
          <span className='featuredMoneyRate'>
            -$3434.34 <ArrowDownward />
          </span>
        </div>
        <span className='featuredSub'>Compared to last Report</span>
      </div>
      <div className='featured-item'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$445.34</span>
          <span className='featuredMoneyRate'>
            -$-88.34 <ArrowDownward />
          </span>
        </div>
        <span className='featuredSub'>Compared to last Report</span>
      </div>
      <div className='featured-item'>
        <span className='featuredTitle'>Increase</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$456.34</span>
          <span className='featuredMoneyRate'>
            $44.34 <ArrowUpward />
          </span>
        </div>
        <span className='featuredSub'>Compared to last Report</span>
      </div>
    </div>
  );
};

export default Feature;
