import { useReducer } from "react";

/***
 * ExamForUseReducer.jsx
 *
 *
 */

/***
 * 상태를 실제로 변경을 담당하는 함수
 *
 * state : 상태값. 변경대상
 * action : 변경을 원하는 action.
 *          변경을 희망하는 기준이 되는 요청 정보
 *          {
                     type: "increase",
                    data: 1,
             }
 *  
 */
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "increase":
      return state + action.data;
    case "minus":
      return state - action.data;
    default:
      return state;
  }
}

// 컴포넌트 함수
const ExamForUseReducer = () => {
  /***
   * state : 상태값
   * dispatch : 상태 변화를 요청하는 정보
   *
   * reducer : 개발자가 구현해야 함
   *           상태를 실제로 변화시키는 기능
   *
   *           dispatch 의 요청 정보를 reducer 가 처리
   *
   * 0 : state 의 초기값
   */
  const [state, dispatch] = useReducer(reducer, 0);

  /***
   * 1. useReducer() 초기화
   *    state, dispatch() : 변경요청함수,
   *    reducer() : 변경실행함수
   *
   * 2. button click event
   *    : 상태값의 변경을 원함
   *
   * 3. click event handler 에서
   *    dispatch() 호출해야 함
   *
   *    상태값 변경을 원하니까
   *
   *    여기서, 변경을 원하는 정보를 전달
   *
   *    dispatch( 변경기준정보 )
   *
   * 4. useReducer.reducer 가 자동으로 호출됨
   * 5. reducer() 에서
   *    action(변경기준정보) 정보를 바탕으로 수정이 일어남
   */
  const onClickPlus = () => {
    // click event 가 발생해서 변경에 대한 요청을 해야함
    // 변경을 희망하는 기준정보도 전달
    // 기준정보를 객체형태로 만들어서 전달
    dispatch({
      type: "increase",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "minus",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default ExamForUseReducer;
