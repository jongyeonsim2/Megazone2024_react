import { useState } from "react";

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

export default useInput;
