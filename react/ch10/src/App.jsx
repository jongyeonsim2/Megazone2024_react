import "./App.css";
import { useReducer, useRef, createContext, useState } from "react";
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
 * - createContext 활용
 *   App - Header
 *       - Editor
 *       - List - TodoItem
 *
 *   문제점 : 삭제 기능의 경우 실제 사용하는 컴포넌트는 TodoItem 이지만,
 *          App 생성한 후 List 거쳐서 전달되고 있음
 *
 *          따라서, 관계의 깊이기 깊어지면 질수록 유지보수가 힘들어짐
 *          버그 발생 가능성이 높아짐
 *
 *          만약에, App 에서 TodoItem 으로 삭제함수를 direct 로
 *          전달할 수 있으면 어떨까...?
 *
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

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [action.data, ...state];
    case "update":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "delete":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

// App() 외부에 선언
// 리렌더링이 될때마다, App() 호출됨으로
// Context 가 생성됨을 고려함
export const TodoContext = createContext();

function App() {
  //const [todos, setTodos] = useState(mockData);

  const [todos, dispatch] = useReducer(reducer, mockData);

  // todo 번호, 3번 부터 시작
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });

    // const newToDo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // };

    //setTodos([newToDo, ...todos]);
  };

  // update 함수
  const onUpdate = (targetId) => {
    // todos 값들 중에서
    // id 값이 일치하는 todo 에 대해서
    // isDone 을 변경
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
    dispatch({
      type: "update",
      targetId: targetId,
    });
  };

  // 삭제 함수
  const onDelete = (targetId) => {
    //setTodos(todos.filter((todo) => todo.id !== targetId));
    dispatch({
      type: "delete",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>

      <ExamForUseReducer />
    </div>
  );
}

export default App;
