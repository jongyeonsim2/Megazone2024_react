/**
 * props.color.toUpperCase() => 오류 발생.
 *
 * - 원인
 *   두 번째 버튼은 color 가 undefined 임.
 *   undefined 임으로 toUpperCase() 를 적용할 수 없음.
 *
 *   값이 전달될 수도 있고, 값이 전달되지 않을 수도 있음.
 *
 *   => 기본값을 설정하면 해결됨.
 *
 */
// props 는 객체참조변수임으로
// 객체의 프로퍼티를 사용해서 구분 처리하고 있음.

import { version } from "react";

// const Button = (props) => {
//   console.log(props.version);
//   return (
//     <button style={{ color: props.color }}>
//       {props.text} - {props.color.toUpperCase()}
//     </button>
//   );
// };

// 객체 구조 분해 할당을 사용한 처리
// 객체의 프로퍼티 명과 동일하게 매개변수로 정의.

/**
 * defaultProps 사용이 불가능해질 수 있음.
 * 따라서, 함수컴포넌트에서 기본값을 설정하는 방법으로
 * 기본 매개변수 값을 사용하도록 함.
 *
 * 기존에는 defaultProps 에 설정된 아래의 내용을
 * color = "black"
 * 매개변수 기본값으로 설정 변경함.
 */
const Button = ({ text, color = "black", children }) => {
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// props.color.toUpperCase() => 오류 발생 해결 방법.
// 아래의 코드를 추가한 후,
// 브라우저에서 새로 고침(F5)해서 확인.

// Button.defaultProps = {
//   color: "black",
// };

export default Button;
