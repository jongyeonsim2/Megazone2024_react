import "./Editor.css";
import { useRef, useState, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState("");
  const inputRef = useRef();

  // content 수정 이벤트 핸들러
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // "추가" 버튼에 대한 이벤트 핸들러
  const onSubmit = () => {
    // 빈 문자열 체크, 빈 문자열이면 content input tag 에 포커싱
    if (content === "") {
      inputRef.current.focus();
      // 함수 종료
      return;
    }

    onCreate(content);
    setContent("");
  };

  // 엔터 키 입력시, 저장되도록 이벤트 핸들러
  // kye down event handler
  const onKeyDown = (e) => {
    // enter key 에 대한 코드 확인
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
