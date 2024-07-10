import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

/***
 *  ch6 에서 만든 counter reacte app
 *
 */

/***
 * 리액트 컴포넌트의 lifecycle
 *
 * 1. 종류
 *    1.1 Mount
 *        컴포넌트의 생성 순간, 최초 렌더링되는 순간
 *
 *        A 컴포넌트가 Mount 가 되었다
 *        => A 컴포넌트가 화면에 처음 렌더링되었다
 *
 *    1.2 Update
 *        컴포넌트가 다시 렌더링 되는 순간, 리렌더링 되는 순간
 *
 *        A 컴포넌트가 Update 되었다
 *        => A 컴포넌트가 리렌더링 되었다
 *
 *    1.3 UnMount
 *        컴포넌트가 화면에서 사라지는 순간, 렌더링에서 제외되는 순간
 *
 *        A 컴포넌트가 UnMount 되었다
 *        => A 컴포넌트가 화면에서 사라졌다
 *
 * 2. lifecycle 순서
 *    Mount(컴포넌트 생성) ->
 *    Update(컴포넌트의 상태 변화) ->
 *    UnMount(컴로넌트의 소멸)
 *
 * 3. lifecycle 단계의 활용
 *    3.1 Mount
 *        컴포넌트에서의 초기화 작업 수행
 *        서버에서 데이터를 요청 및 화면 출력 작업
 *
 *        서버와 통신이 불가능한 경우 => exception 컴포넌트로 이동
 *                      react router 활용
 *
 *        SPA( 한 화면, index.html ) <-> MPA( 기존의 웹 시스템, 서버 렌더링 )
 *
 *    3.2 Update
 *        상태변수의 변화에 따른 처리를 수행
 *
 *    3.3 UnMount
 *        컴포넌트가 사용했던 메모리 정리
 *
 * 4. useEffect hook
 *
 */

function App() {
  const [count, setCount] = useState(0);

  // useEffect hook 초기화 관련
  const [input, setInput] = useState("");

  /***
   * useEffect 사용
   * 첫 번째 매개변수 : callback 함수, 두 번째 매개변수 : 배열, 옵션
   *
   * - useEffect() 의 동작
   *   컴포넌트 내에서 원하는 상태변수의 값이 변경되었을 때에만
   *   callback 함수가 실행되고 있음
   *
   *   callback 함수는 count 상태변수에 의존하고 있음
   *
   *   의존관계에 있는 두 번째 매개변수를
   *   dependency array, 의존성 배열이라고 함
   *   deps 라고도 함
   *
   *   그리고, deps 에는 여러 개의 의존값이 올 수 있음
   *
   * - useEffect() 실행과 관련되 이해
   *
   *   count 를 의존하고 있으므로, useEffect() 의 callback() 함수를
   *   사용하지 않고, event handler 에서 setCount() 상태변경함수
   *   호출 후에 변경된 상태값(count) 를 사용하면 되는 것 아니냐?
   *
   *   결론은 안됨
   *   왜 안되는지를 이해해야만 함 => setCount() 가 비동기 함수임
   *   따라서, useEffect() hook 를 사용해야만 함
   */
  useEffect(() => {
    console.log(`count : ${count}`);
  }, [count]);

  // event handler
  const onClickButton = (value) => {
    // 상태변경함수 호출은 되었으나, 완료가 되기전에
    // console.log() 호출된 것임.
    // => 순차처리가 아님=> 비동기 처리
    setCount(count + value);

    //console.log(" event handler : " + count);
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
