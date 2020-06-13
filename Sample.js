import React from 'react';

function Samples() {
    return (
        <h1>Hello, World!!!!! Hi there </h1>

    );
}

function MyApp() {
    return (
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      
  );
    }

function Simple() {
  const date= new Date()
  const hours= date.getHours()
  let timeofday

  const styles={
    fontSize:'150px'
  }

  if (hours<12){
    timeofday='Morning'
    styles.color='#FF8C00'
  } else if (hours>=12 && hours<17){
    timeofday='Afternoon'
  } else {
    timeofday='Night'
  }
  

  return (
    <h1 style={styles}>Good {timeofday}</h1>
  )
}



export {Samples,MyApp,Simple};
