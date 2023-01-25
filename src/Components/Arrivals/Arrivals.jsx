import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Arrivals = () => {
  const [arrivals, setArrivals] = useState([]);
  console.log(arrivals);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Tusar78/Furn/main/db.json')
      .then(res => res.json())
      .then(data => setArrivals(data));
  }, [])
  
  return (
    <div className='arrivals__list'>
      
    </div>
  );
};

export default Arrivals;