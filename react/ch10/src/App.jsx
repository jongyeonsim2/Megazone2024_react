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

  // 1. C : Create( 등록 )
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
   */

  // 2. 렌더링
  /***
   * - root app 컴포넌트에서 관리하는 todo list 데이터를
   *   List 컴포넌트(자식)로 props 전달
   * - List 컴포넌트
   *   todo list 데이터 요소를 TodoItem 컴포넌트에게
   *   props 전달
   * - TodoItem 컴포넌트
   *   todo list 데이터 요소의 값을 html에 표시
   *
   * - 중요
   *   - javascript 배열의 map 함수를 활용
   *     콜백 함수(배열의 요소에 처리할 내용)를 작성
   *   - TodoItem 컴포넌트의 input 에 오류 설정
   *     type="checkbox" 이벤트 핸들러를 구현하지 않으면,
   *     오류가 발생하는 것에 대한 처리
   *   - 리스트 형태로 렌더링된 컴포넌트인 경우
   *     서로를 구분하기 위해 key 가 필요함
   *     prop 를 통해서 key 전달되록 구현해야 함
   */

  // 3. R : Read( 검색 )
  /***
   * - onChange event handler
   * - 검색 조건 문자열 -> 상태변수
   * - 배열의 filter()s 는 콜백함수를 전달
   *   콜백함수 : includes() 함수를 사용해서 검색 기능 구현
   */

  // 4. U : Update( 수정 )
  /***
   * - 대상 : check box => checked, unchecked
   *          todo 프로퍼티의 isDone : true, flase
   * - check box의 onChange event handler
   * - todo 프로퍼티의 isDone 의 값을 수정하는 기능
   *   함수로 구현해서 TodoItem(자식 컴포넌트) 에게 전달
   *   => Root App 에서 관리하는 todo 정보의
   *      isDone 프로퍼티로 자식 컴포넌트가 접근할 수
   *      있기 때문임
   *   => 중요한 것은 데이터의 흐름은 부모에서 자식으로만
   *      가능하기 때문임
   *
   */

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

  // 5. D : Delete( 삭제 )
  /***
   * - 수정함수처럼 삭제 함수를 root app에서 만든 후
   *   자식 component 에게 props 로 전달
   *
   * - 자식 컴포넌트에서 click envent handler 구현
   *   부모 컴포넌트가 전달한 삭제 함수를 호출
   *
   * - 삭제
   *   실제 삭제가 아니라, 논리 삭제
   */

  // 삭제 함수
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
