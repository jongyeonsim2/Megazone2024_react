/**
 * 1. 대량의 데이터를 서버에 요청을 가정.
 *
 * 2. 서버와 통신시 fetch API 사용.( promise 반환되기 때문 )
 *    서버 요청 주소는 아래의 주소를 사용.
 *    https://jsonplaceholder.typicode.com/users
 *
 * 3. fetch API 실행시 await 예약어 사용.
 *
 * 4. response 되는 것은 JSON임. 객체로 변환.
 *    response.json() 실행시 await 예약어 사용.
 *
 * 5. 객체 배열을 화면에 출력하기 위한 함수 구현.
 *
 */

// 1. 통신부 구현
async function commToServer() {
  // fetch API 사용
  // 서버와 통신시, 서버에서 언제 응답(요청한 결과, response)
  // 이 빠를 수도 있고, 느릴 수 도 있음. => 비동기 처리
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // response 결과가 JSON 포맷임. => 객체(리터럴 객체) 배열
  // => 비동기 처리
  const users = await response.json();

  // 화면 출력 => 매개변수로 사용자 객체 전달
  display(users);
}

// 2. 화면 출력부 구현
function display(users) {
  // 출력할 화면의 요소를 지정.
  const result = document.querySelector("#result");

  // html 코드 작성.
  let htmlStr = "";

  users.forEach((user) => {
    htmlStr += `${user.name} - ${user.username} - ${user.email} <br>`;
  });

  result.innerHTML = htmlStr;
}

// 3. 1번의 함수를 호출
commToServer();
