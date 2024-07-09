//useState 라는 hook 를 import
import { useState } from "react";

/***
 *
 * - 2017 년도 이전의 React.js
 *   과거에는 Class 로만 컴포넌트를 만들어서 사용했었음
 *
 *   React 의 모든 기능( ex. state, ref 등 ) 을
 *   전부 이용할 수 있는 class 와 달리 함수 컴포넌트는 단순히
 *   렌더링하는 것 외에는 리액트의 아무런 기능도 사용할 수 없었음
 *
 *   그래서, 자연스럽게 대부분 Class 를 이용하게 되었음
 *   하지만, Class 의 단점은 함수 컴포넌트에 비해 코드량이 많고
 *   복잡했음
 *
 *   따라서, 많은 사람들이 함수에서도 리액트의 모든 기능을 사용할 수
 *   있기를 요구해왔음
 *
 *
 * - React Hooks
 *   그래서, 함수 컴포넌트에서도 클래스처럼 컴포넌트의 기능을
 *   낚아채듯이 가져와서 사용할 수 있게 해주는
 *   React Hooks 의 기능을 개발하게 되었음
 *
 *   특별한 경우가 아니면, 모든 컴포넌트를 함수로 컴포넌트를
 *   만들 수 있게 됨
 *
 *   그래서, useState, useRef 와 같은 리액트의 내장 함수는
 *   사실은 모두 React Hooks 임
 *
 *   즉, useState 는 state(컴포넌트의 상태) 기능을 낚아채오는 Hook
 *   useRef 는 Reference 기능을 낚아채오는 Hook
 *
 *   그래서, React Hooks 에는 이름 앞에 use 라는 접두사가
 *   붙는 특징이 있음. 다양한 React Hooks 가 있으며,
 *   약 20개 정도가 있음
 *
 *
 * - React Hooks 특징
 *   a. 조건문, 반복문 내부에서는 호출 불가능
 *   b. custom hook 구현이 가능
 *
 */

/***
 * hook 관련된 3가지 사항
 *
 * 1. hook 은 반드시 함수 컴포넌트 이거나 custom hook 내부에서만
 *    호출 가능
 *
 * 2. 조건부에서 사용될 수 없다. 조건문이나 반복문 내부에서 호출
 *    할 수 없음 => 오류 발생
 *
 * 3. custom hook 을 직접만들어서 사용 가능
 *    작성 방법은 함수 작성시 함수명 앞에 접두어 use 를 붙이면 됨
 *
 *    좋은 활용 법
 *    custom hook 을 통해 컴포넌트 내부에서 반복되는 부분을
 *    hook 을 통해 반복 사용할 수 있도록 분리할 수 있음
 *
 *    그리고, custom hook 은 별도의 디렉토리에 hooks 이름의
 *    폴더를 만들어서 관리하는것이 일반적임
 *
 */

//1.
// react hook 을 함수 컴포넌트 외부에서 호출하면 즉시 오류 발생함.
// 브라우저에서도 오류가 발생.
// => Invalid hook call. Hooks can only be called inside of
//    the body of a function component.

//const state = useState();

// input tag의 상태값을 관리하는 함수
// hook 은 javascript 함수에서 호출해서 사용할 수 없음
// function getInput() {
//   // 새로운 상태관리변수 생성
//   const [input, setInput] = useState("");

//   // 이벤트 핸들러
//   const onChange = (e) => {
//     // 상태변경함수 호출
//     setInput(e.target.value);
//   };

//   return [input, onChange];
// }

// custom hook
// 중요한 것은 함수명 앞에 접두어로 "use" 를 기입.
function useInput() {
  // 새로운 상태관리변수 생성
  const [input, setInput] = useState("");

  // 이벤트 핸들러
  const onChange = (e) => {
    // 상태변경함수 호출
    setInput(e.target.value);
  };

  return [input, onChange];
}

// 컴포넌트 함수
const HookExam = () => {
  //1. 컴포넌트 함수 내부에서 hook 을 호출하면 사용 가능
  const state = useState();

  //2.
  let booleanFlag = true;
  if (booleanFlag) {
    let a = 0;

    // 조건문 안에서 hook 을 호출
    //const state2 = useState();
  }

  for (let i = 0; i < 10; i++) {
    let a = 0;

    // 반복문 안에서 hook 을 호출
    //const state3 = useState();
  }

  //3.
  /***
   * input tag 에 입력되는 값을 관리
   *
   * - 새로운 상태관리변수(state)를 생성. 변수명 : input
   * - event handler 를 작성해서, 상태변경함수(setInput)를 호출
   * - 변경되는 값을 state 변수에 저장해서 관리
   *
   * 하지만, 여러 개의 input tag 를 반복해서 사용하는 경우라면...
   *
   * state 변수도 그만큼 늘어나게 되어, 관리해야 할 코드가 증가하게 됨
   * => 공통 기능이고 자주 사용된다면, 보통 함수로 만들어사 사용
   *
   *
   */

  // 새로운 상태관리변수 생성
  const [input, setInput] = useState("");

  // 이벤트 핸들러
  const onChange = (e) => {
    // 상태변경함수 호출
    setInput(e.target.value);
  };

  // getInput() 호출, 구조분해할당으로 초기화
  const [input2, onChange2] = useInput();

  const [input3, onChange3] = useInput();

  return (
    <div>
      <div>HookExam</div>
      <div>
        <input value={input} onChange={onChange} /> {input}
        <input value={input2} onChange={onChange2} /> {input2}
        <input value={input3} onChange={onChange3} /> {input3}
      </div>
    </div>
  );
};

export default HookExam;
