import React from 'react';
import Day from './Day.jsx';

const Week = () => {
  const week =[];
  for (let i = 0; i < 7; i++) {
    week.push(<Day/>)
  }
  return(
    <main className="weekContainer">
      { week }
    </main>
  )
}



export default Week;