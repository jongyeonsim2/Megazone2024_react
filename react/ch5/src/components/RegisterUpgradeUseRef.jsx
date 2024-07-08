import { useState, useRef } from "react";

// 같은 곳에서 import 하는 기능은 합쳐서 import 할 수 있음.
//import { useRef } from "react";

/***
 * useRef
 * 새로운 Referecne 객체를 생성하는 기능
 *
 * useState
 * state 를 생성하는 기능(컴포넌트의 상태 관리 변수)
 *
 * 공통점
 * 컴포넌트 내부에서 변수 활용 가능
 *
 * 차이점( 중요 )
 * - useState
 *   state 값이 변경이 되면, 컴포넌트 리렌더링이 발생
 *
 * - useRef
 *   어떤 경우에도 리렌더링이 발생하지 않음
 *
 * 따라서,
 * - 렌더링에 영향을 받지 않는 변수를 사용하려는 경우
 *   useRef 를 사용
 * - useRef 를 이용하면 컴포넌트가 렌더링하는 특정 DOM 요소
 *   에 접근이 가능
 *   해당 요소를 조작이 가능( 포커스, 스타일 변경 등 )
 *
 */

/***
 * useRef() 의 활용
 *
 * 1. 입력 항목에 대해서 변경 횟수가 몇 번이었는지를 확인
 *
 * 2. DOM 요소 직접 조작
 *    회원 등록시 이름 입력 항목에 사용자가 입력을 했는지 여부
 *
 *    - 입력 요소 항목을 저장할 useRef 객체를 생성
 *    - 해당 태그의 ref 속성에 생성된 useRef 객체를 등록( 관계 설정 )
 *      ref={useRef 객체 변수명}
 *
 *      input 태그가 렌더링하는 DOM 요소가 useRef 객체 변수에
 *      레퍼런스 객체로 저장이 됨
 *
 * 3. useRef 를 활용한 변수의 범위( 컴포넌트 내부, 외부 ) 설정
 *    VS 순수 javascript 변수
 *
 *    3.1 javascript 변수 ( 컴포넌트 내부의 지역 변수 )
 *    3.2 useRef 를 활용한 변수 : 컴포넌트 내 ( 컴포넌트 재사용 측면 )
 *    3.3 useRef 를 활용한 변수 : 컴포넌트 밖 ( 컴포넌트 재사용 측면 )
 */

let count = 0;

const RegisterUpgradeUseRef = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  /***
   * hook( 낚아채다 )
   * useRef() 와 같은 기능을 시용하려면, class 로 만들어서
   * 사용해야 함 => 코드 작성량이 너무 많아짐 => 함수로
   * react 의 기능을 사용할 수 있도록 하면 좋겠다는 요구사항 발생
   * => react hook
   *
   * 원래 클래스에서 사용할 수 있는 기능을 낚아채듯이 함수에서도
   * 사용할 수 있게끔 함
   *
   *
   * 1. useRef() 기본 사용법
   * - 새로운 객체 생성
   * - 생성된 객체에 대해서 출력, 프로퍼티 확인
   * - 실제 리렌더링과 무관한지 확인( 가장 큰 특징 )
   *
   */

  // ================== 기본 사용법 start ==================

  // useRef() 의 리렌더링 확인용 로그
  //console.log(" useRef() 의 리렌더링 ");
  // 컴포넌트 내부에서 어떤 기능을 실행하는데,
  // 위의 로그가 출력이 되지 않으면 =>
  // 리렌더링이 수행되지 않음을 확인하게 됨

  // 새로운 레퍼런스 객체 생성.
  //const refObj = useRef();

  // current 프로퍼티에 값을 담는 자바스크립트 객체.
  //console.log(refObj);

  // 0 을 매개변수로 전달. => current 프로퍼티가 0 으로 초기화
  // 초기값으로 설정이 가능
  const refObj2 = useRef(0);
  //console.log(refObj2);

  // 프로퍼티 접근
  //console.log("refObj2.current : " + refObj2.current);

  // ================== 기본 사용법 end ==================

  // ================== useRef 활용 start ==================
  // 1. 입력 항목에 수정 횟수
  const countRef = useRef(0);

  // 2. 입력 항목 요소 참조용 - 화면 요소 제어
  const inputRef = useRef();

  // ================== useRef 활용 end ==================

  // 3.1 javascript 변수 ( 컴포넌트 내부의 지역 변수 )
  //let count = 0;

  const onChange = (e) => {
    //console.log(e.target.name + " : " + e.target.value);

    /***
     * useRef() 의한 리렌더링의 발생 여부 확인
     *
     * useRef()의 프로퍼티가 수정이 발생한 경우
     * state 처럼 컴포넌트의 리렌더링이 발행하는지 확인하는 것
     *
     * console.log(" useRef() 의 리렌더링 "); 가
     * console 에 출력이 되지 않는 것을 확인
     */

    // 입력 항목의 수정 횟수 정보 확인용
    //countRef.current++;
    //console.log(countRef.current);

    /***
     * 3.1 javascript 변수 ( 컴포넌트 내부의 지역 변수 )
     *
     * a. 이름 입력 항목 수정
     * b. onChange() 호출
     * c. count++ 수행
     * d. setInput() 호출 => 컴포넌트의 state 변경
     *    자기가 관리하는 state 가 수정 =>
     *      리렌더링 발생 => 컴포넌트 함수 호출. RegisterUpgradeUseRef() 호출
     * e. count 가 다시 0 으로 초기화 됨
     *
     * 그래서, 항상 1이 출력되게 됨
     *
     * 따라서, useRef() 에 의해 생성된 변수는
     * 컴포넌트가 리렌더링이 된다고 해소 다시 리셋이
     * 되지 않음을 알 수 있음. countRef.current++;
     * ( react 에서 이렇게 동작되도록 하고 있음 )
     *
     * 그렇다면, count 변수가 컴포넌트 외부에 있다면???
     * 렌더링의 영향을 벗어날 수 있어서 마치
     * useRef() 의 변수처럼 사용할 수 있지 않을까???
     *
     * 결론, 심각한 문제가 발생하게 됨
     * ( 컴포넌트는 재사용의 의미가 있음.
     *   경우에 따라서는  root app 동일한 컴포넌트를 두 번
     *   사용할 수 있음 )
     */
    count++;
    console.log(count);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  /*
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  */

  /*
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  */

  /*
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };
  */

  // 이름 입력 항목의 공백 존재 여부 확인.( 정상 입력 여부 확인용 )
  const onSubmit = () => {
    if (input.name === "") {
      // inputRef 에 저장된 input tag 의 DOM 요소를 출력
      //console.log(inputRef.current);
      // 이름을 입력하는 항목의 DOM 요소에 포커스를 줌
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          refObj2.current++;
          console.log(refObj2.current);
        }}
      >
        useRef + 1
      </button>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        ></input>
        {input.name}
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        ></input>
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>

      <button onClick={onSubmit}>저장</button>
    </div>
  );
};

export default RegisterUpgradeUseRef;
