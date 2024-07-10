import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

/***
 * React Router
 *
 * 1. 라이브러리 설치
 *    npm i react-router-dom
 *
 * 2. Router 활용한 컴포넌트 이동
 *    기본 URL + "라우팅 정보"
 *    "http://localhost:5173" + "라우팅 정보"
 *    - "/" : Home 페이지로
 *    - "/new" : New 페이지로
 *    - "/diary" : Diary 페이지로
 *
 * 3. Link 를 이용한 이동
 * 4. 동적 Routing
 */

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
