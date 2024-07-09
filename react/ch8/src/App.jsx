import "./App.css";
import { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

/***
 * 기본 데이터 => 상태정보로 관리
 * 글번호, update flag, content, 등록일
 *
 */

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "청소하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "요리하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  // todo 번호, 3번 부터 시작
  const idRef = useRef(3);

  // 새로운 todo 데이터 생성 함수
  // 1. 데이터 생성
  // 2. 생성된 데이터를 상태변수에 저장
  const onCreate = (content) => {
    const newToDo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newToDo, ...todos]);
  };

  // 1. Create
  /***
   * - Editor 컴포넌트의 "추가" 버튼 클릭시
   *   입력된 todo 정보를
   *   app component 의 state 정보에 추가
   *
   *   - event handler : Editor component
   *   - app 에서 신규로 생성된 데이터를 전달 : 부모 -> 자식 props
   *     app component 작성 => 함수로 작성 후 props 로 함수로 전달
   *   - 글번호 관리
   *     렌더링과 무관하게 내부적으로 과리해야하는 번호 => useRef hook 사용
   *
   *
   */

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
