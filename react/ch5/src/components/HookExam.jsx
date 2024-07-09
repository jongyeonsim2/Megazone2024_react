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

// 컴포넌트 함수
const HookExam = () => {
  return (
    <div>
      <div>HookExam</div>
    </div>
  );
};

export default HookExam;
