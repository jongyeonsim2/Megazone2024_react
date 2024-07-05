import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

/***
 * state Lifting( state 끌어 올리기 )
 *
 * 상태정보 : [count, setCount]
 *
 * 1. App 컴포넌트(부모) -> Viewer(자식)
 *    count
 *
 * 2. App 컴포넌트(부모) -> Controller(자식)
 *    Controller 에 있는 button이 클릭되었을 때,
 *    setCount() 실행되어야 함 => event handler
 *
 * 그래서, 정리하면, React 의 데이터 흐름은 위에서 아래
 * (부모 컴포넌트 -> 자식 컴포넌트)로 이동하는 단방향 통신임
 *
 * React 는 컴포넌트 간의 단방향 통신만 가능해서,
 * 데이터 흐름이 복잡하지 않음
 *
 * SPA( Vue.js 등 ) 와 비교가 필요함
 *
 */

function App() {
  const [count, setCount] = useState(0);

  // event handler
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
