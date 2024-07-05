import "./App.css";
import { useState } from "react";

/***
 * AppForState 컴포넌트의 내부 자식 컴포넌트
 *
 * 부모 컴포넌트의 state 인 light 상태정보를 자식 컴포넌트로
 * props 로 전달
 *
 * Blub 와 같은 자식 컴포넌트들은 부모 컴포넌트로 부터
 * props(부모의 상태정보) 의 값이 바뀌게 되면,
 * 리렌더링이 발생할 수 있는 사실
 *
 * 그래서, 아무런 관계가 없는 Blub 컴포넌트가 호출이 되어,
 * 리렌더리잉 되고 있는 상태
 *
 * 즉, "+" 버튼 클릭 -> AppForState의 useState.setCount 가 호출
 *     -> count 의 상태 정보가 변경 -> react 가 감지 :
 *     AppForState 자신이 관리하는 state가 변경됨 ->
 *     AppForState(부모) 리렌더링 -> Blub(자식) 도 리렌더링이 됨
 *
 * 따라서, 불필요한 리렌더링의 대상이 Blub 임을 알게 됨
 * 불필요한 리렌더링이 발생되어 브라우저 성능에 영향을 주게 되고 있어,
 * 관련없는 상태정보들은 컴포넌트별로 분리해야 함을 알 수 있음.
 */
const Blub = ({ light }) => {
  console.log("Blub().light : " + light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </div>
  );
};

/***
 * 컴포넌트에서 상태(state) 를 생성하려면,
 * 리액트가 제공하느 내장함수 useState 를 import 해야 함
 *
 * useState() 는 요소가 두 개인 배열을 반환
 * - 첫 번째 요소 :
 *   새롭게 생성된 state 의 값
 * - 두 번째 요소 :
 *   함수, 첫 번째 요소인 state 값을 변경시키는 함수 => setter
 *   그래서, 특별히 상태변화 함수라고 부름
 *
 */

function AppForState() {
  // const state = useState();

  // 요소가 두개임으로 구조 분해 할당 방법으로 초기화.
  //const [state, setState] = useState();

  // 상태값 초기화
  const [count, setCount] = useState(11);
  console.log(count);

  // light(전등) 상태값을 소등(OFF)으로 초기화
  const [light, setLight] = useState("OFF");
  console.log(light);

  /***
   * button 을 클릭하면, 컴포넌트의 상태(state) 가 변경
   * 이되어, React 가 이 변경을 감지하게 되어,
   * 자동으로 컴포넌트를 리렌더링해주게 됨
   *
   * 즉, react  가 이 컴포넌트 함수를 다시 호출해서
   * 반환된 html 을 브라우저에 렌더링한 것임
   */
  return (
    <>
      <div>
        <h1>{light}</h1>
        <Blub light={light} />
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
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
    </>
  );
}

export default AppForState;
