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
            -12.34 <ArrowDownward className='featureIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last Report</span>
      </div>
      <div className='featured-item'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$445.34</span>
          <span className='featuredMoneyRate'>
            -10.34 <ArrowDownward className='featureIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last Report</span>
      </div>
      <div className='featured-item'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$456.34</span>
          <span className='featuredMoneyRate'>
            +4.34 <ArrowUpward className='featureIcon' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last Report</span>
      </div>
    </div>
  );
};

export default Feature;
