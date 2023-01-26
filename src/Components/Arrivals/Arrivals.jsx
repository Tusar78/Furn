import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Arrival from '../Arrival/Arrival';

const Arrivals = () => {
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Tusar78/Furn/main/db.json')
      .then(res => res.json())
      .then(data => setArrivals(data));
  }, [])
  
  return (
    <div className='arrivals__list'>
      {
        arrivals.map(arrival => <Arrival key={arrival.id} arrival={arrival}/>)
      }
    </div>
  );
};

export default Arrivals;