import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색 기능 구현
  const getFilterData = () => {
    // 검색 문자열이 없으면, 원본 반환
    if (search === "") {
      return todos;
    }

    // 입력된 문자열로 검색
    // true 로 판정된 데이터로 새로운 배열로 반환
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilterData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          /***
           * map 함수는 콜백 함수를 받아서 배열의 모든
           * 요소에 대해서 콜백함수를 수행한 뒤, 이 콜백 함수가
           * 반환한 값들을 모아서 새로운 매열을 반환한
           *
           * map 함수를 jsx 에서 사용하면
           * 콜백 함수가 html 요소를 반환하도록 설정할 수 있음
           * 그래서, 콜백 함수의 반환값들이 리스트 형태로
           * 렌더링이 됨
           *
           * 그래서 리스트 형태로 렌더링된 컴포넌트들은
           * 서로를 구분할 때 각각의 요소를 kye 라는 prop
           * 을 통해서 구분하게 됨
           *
           * 따라서, 리스트로 어떠한 컴포넌트를 렌더링하고
           * 있을 때는 모든 아이템 컴포넌트에게 반드시 key 라는
           * prop 를 고유한 값으로 전달해주어야 함
           *
           */
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
};

export default List;
