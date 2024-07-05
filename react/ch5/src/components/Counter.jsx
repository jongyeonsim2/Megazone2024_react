import { useState } from "react";

const Counter = () => {
  // 상태값 초기화
  const [count, setCount] = useState(11);
  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
