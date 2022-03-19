import React from 'react';
import Week from './Week.jsx'

const Month = () => {
  const month =[];
  for (let i = 0; i < 4; i++) {
    month.push(<Week/>)
  }
  return(
    <main className="monthContainer">
      { month }
    </main>
  )
}


export default Month;