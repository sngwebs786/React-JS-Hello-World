import React from "react";

const Addition = () => {
  let num = 1;

  const inc = () => {
    num++;
    console.log(num)
  };

  return (
    
    <>
      <h1>Addition</h1>
      <h3>{num}</h3>
      <button onClick={()=>inc()}>+</button>
    </>

  );
};

export default Addition;
