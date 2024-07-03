//브라우저 DOM 제어

// 주문정보 취득 => DOM 요소 선택
const title = document.querySelector("#container > h2");
// 책제목 => HTML+CSS+Javascript 실습(명령형 프로그래밍)

// 버튼 요소 선택 => DOM 요소 선택
const orderBtn = document.querySelector("#order");

// 주문정보 입력 => DOM 요소 선택
const orderInfo = document.querySelector("#orderInfo");

// 버튼 객체에 이벤트 등록 => 추가적으로 주문 처리
orderBtn.addEventListener(
  "click",
  () => {
    // 브라우저 DOM 에 직접 요소 추가
    // 1. DOM에 추가할 노드(p tag)를 생성
    let newP = document.createElement("p");

    // 2. text node 생성해서 도서 title 을 저장.
    //    container > h2 요소의 요소값(도서 제목)을 가져와서 저장.
    let textNode = document.createTextNode(title.innerText);

    // 3. p tag와 text node 관계 설정
    newP.appendChild(textNode);

    // 4. p tag 스타일 적용
    newP.style.fontSize = "2em"; // 32px
    newP.style.color = "red";

    // 5. 부모 node(div tag) 와 p tag 를 연결
    orderInfo.appendChild(newP);
  },
  { once: false }
);
