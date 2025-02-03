import React, { useState } from 'react';

const CounterDisplay = (props) => {
  return (
    <div>
      <h2>Значення лічильника: {props.count}</h2>
    </div>
  );
};

const ChangeButton = ({ changeValue, onClick }) => (
    <button onClick={() => onClick(changeValue)}>
      {changeValue > 0 ? `+${changeValue}` : changeValue}
    </button>
  );
  

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleChange(value) {
    setCount(count + value);
  }

  return (
    <div>
      <ChangeButton changeValue={10} onClick={handleChange} />
      <ChangeButton changeValue={-100} onClick={handleChange} />
      <ChangeButton changeValue={25} onClick={handleChange} />
      <CounterDisplay count={count} />
    </div>
  );
};

export default Counter;
