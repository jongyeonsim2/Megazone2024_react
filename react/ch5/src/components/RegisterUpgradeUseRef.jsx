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
 *    - 입력 항목을 저장할 useRef 객체를 생성
 *    - 해당 태그의 ref 속성에 생성된 useRef 객체를 등록( 관계 설정 )
 *      ref={useRef 객체 변수명}
 *
 *      input 태그가 렌더링하는 DOM 요소가 useRef 객체 변수에
 *      레퍼런스 객체로 저장이 됨
 *
 * 3. useRef 를 활용한 변수의 범위( 컴포넌트 내부, 외부 ) 설정
 *    VS 순수 javascript 변수
 */

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
  //const refObj2 = useRef(0);
  //console.log(refObj2);

  // 프로퍼티 접근
  //console.log("refObj2.current : " + refObj2.current);

  // ================== 기본 사용법 end ==================

  // ================== useRef 활용 start ==================
  // 1. 입력 항목에 수정 횟수
  const countRef = useRef(0);

  // ================== useRef 활용 end ==================

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

    countRef.current++;
    console.log(countRef.current);

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
    </div>
  );
};

export default RegisterUpgradeUseRef;
