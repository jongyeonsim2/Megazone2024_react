import "./App.css";
import { useRef, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import ExamForUseReducer from "./components/ExamForUseReducer";

/***
 * - ch08(할 일 관리 앱)의 소스를 사용
 *
 * - useReducer hook 활용
 *   목적 : root app 에는 자식 컴포넌트에서 사용될 기능(함수)을
 *        직접 구현해서 자식에게 전달하고 있음
 *
 *        따라서, 향후에 자식 컴포넌트에서 기능이 대폭 늘어날 수
 *        있다고 가정하면, root app 관리해야 함
 *
 *        그래서, 부모 컴포넌트 함수 내부에 구현해야 함
 *
 *        부모 컴포넌트 함수 외부에서 구현하려고 한다면...
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

  const onCreate = (content) => {
    const newToDo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newToDo, ...todos]);
  };

  // update 함수
  const onUpdate = (targetId) => {
    // todos 값들 중에서
    // id 값이 일치하는 todo 에 대해서
    // isDone 을 변경
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 삭제 함수
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <ExamForUseReducer />
    </div>
  );
}

export default App;
