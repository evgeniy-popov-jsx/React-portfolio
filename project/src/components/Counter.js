import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <div>
        <h1 className="counter__text">Счетчик:</h1>
        <h2 className="counter__value" >{count}</h2>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
    </div>
  </div>
  );
}

export default Counter;
