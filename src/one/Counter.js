import React, { useState } from 'react'; //useState를 사용하면 컴포넌트에서 상태를 관리할수 있음

function Counter() {
  const [number, setNumber] = useState(2); //초기값을 2로
                                            //첫번째 원소(number)은 현재상태(useState)
                                            //두번째 원소(setNumber)는[1] Setter함수
  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;