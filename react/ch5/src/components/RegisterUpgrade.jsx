import { useState } from "react";

/***
 * 기존의 Register.jsx 를 개선한 컴포넌트
 *
 * 1. state 정보가 다양한 경우 => 객체로 관리
 *    - javasctipt 전개(스프레드) 연산자
 *    - javasctipt 의 객체 생성
 *
 * 2. 기존의 요소별 event handler => 통합 event handler 관리
 *    - event 객체의 target.value, target.name
 *    - 수정되는 html 요소와 envent 객체와의 관계
 *
 */

const RegisterUpgrade = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  /*
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  */

  const onChangeName = (e) => {
    /***
     * ...input
     *
     * 전개(스프레드) 연산자를 이용해서,
     * input에 저장되어 있던 기존의 프로퍼티 값들을
     * birth, country, bio 의 값들을
     * 변경하지 않고, 그대로 유지하도록 함.
     *
     * 만약에 ...input 을 사용하지 않으면,
     * 기존의 값들은 사라지게 됨
     *
     * 따라서, 변경하고자 하는 프로퍼티 값만
     * 변경이 되도록 event 객체의 프로퍼티 값을 사용
     */
    //setName(e.target.value);
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  /***
   * 통합 event handler
   *
   * e.target.name : 객체의 프로퍼티인 키를 나타냄
   *   즉, 이벤트가 발생한 태그의 name 속성에 설정된
   *   값이 들어옴
   *
   * 객체의 프로퍼티를 나타내는 방법
   * [키값] => [e.target.name] => 객체의 프로퍼티로 사용
   *
   */
  const onChange = (e) => {
    console.log(e.target.name + " : " + e.target.value);

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

export default RegisterUpgrade;
