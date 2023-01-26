import React from 'react';
import { Arrivals } from '../../Components';

const NewArrivals = () => {
  return (
    <section className='arrivals'>
      <div className="custom-container">
        <div className="arrivals__content">
          <h2 className="arrivals__title">New Arrival</h2>
          <Arrivals />
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;