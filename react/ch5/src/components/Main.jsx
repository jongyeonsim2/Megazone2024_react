import "./Main.css";

function Main() {
  // 변수 선언
  const number = 10;
  const obj = { a: 1 };

  /**
   * session(로그인 성공 상태) 있다고 가정하고,
   * 객체를 초기화 해서,
   *
   * 로그인 된 경우 => logout
   * 로그아웃이 된 경우 => login
   *
   * 1. return 하나로 하는 방법
   *
   * 2. return 둘로 하는 방법
   *
   *
   */

  const user = {
    userName: "홍길동",
    loginFlag: true,
  };

  // 로그인 상태에 따른 UI 상태를 반환.
  if (user.loginFlag) {
    return (
      <div className="logout">
        {user.userName}님, 반갑습니다. <a href="#">로그아웃</a>
      </div>
    );
  } else {
    return (
      <div>
        <a href="#">로그인</a>
      </div>
    );
  }

  // return (
  //   <main>
  //     <h1>main</h1>

  //     {user.loginFlag ? (
  //       <div>{user.userName}님, 반갑습니다. 로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}

  //     <h2>{number}</h2>
  //     <h2>{number + 10}</h2>
  //     <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //     <h2>10</h2>
  //     <h2>{[111, 222, 333]}</h2>

  //     <h2>{true}</h2>
  //     <h2>{undefined}</h2>
  //     <h2>{null}</h2>

  //     <h2>{obj.a}</h2>
  //   </main>
  // );
}

export default Main;
