// 비동기 처리
/**
 * javascript 에서의 비동기 처리
 *
 * 1. 비동기 처리
 *    오래 걸리는 작업이 종료될 때까지 기다리지 않고 다음 작업을 수행할 수
 *    있도록 하는 유연한 프로그래밍 방법.
 *
 *    순차적으로 처리하는 코드를 동기처리라고 함.
 *    오래 걸리는 작업을 빨리 끝날 작업모다 먼저 실행하게 되면, 지연문제가
 *    발생.
 *
 * 2. 세 가지 비동기 방식
 *    2.1 콜백 함수.
 *        전통적으로 사용되어오고 있는 방식.
 *
 *        단점 : 콜백 함수가 연속해서 사용되는 경우가 발생. => 콜백 지옥
 *              콜백 지옥을 개선한 방법이 프로미스 방식.
 *
 *    2.2 프로미스
 *        a. promise 객체를 생성.
 *           resolve 콜백 : then() 메소드와 연결됨.
 *           reject 콜백 : catch() 메소드와 연결됨.
 *        b. promise 객체를 사용하는 쪽 구현.
 *           then() 메소드 : promise 에서 성공했다는 결과를 받아서 처리.
 *           catch() 메소드 : promise 에서 실패했다는 결과를 받아서 처리.
 *           finally() 메소드 : 마지막으로 처리해야 할 부분을 구현.
 *        c. promise 체이닝
 *           then() 메소드를 사용해서 여러 개의 프로미스르 연결하는 것.
 *
 *           promise().
 *              then(step1).
 *                  then(step2).
 *                      then(step3)....
 *
 *           콜백 지옥보다는 상대적으로 각 단계에서의 처리에 대한 정의가
 *           명확해짐.
 *        d. 장점
 *           promise 객체 작성시, resolve(성공), reject(실패) 를 사용.
 *            => 성공과 실패에 대해서 명확하게 구분이 가능.
 *            => 콜백 지옥을 해결할 수 있음.
 *
 *    2.3 async, await
 *        promise 가 콜백 메소드 방식에서 개선되었지만, 메소드 체이닝을
 *      너무 길게 사용하면, 유지보수가 힘들어짐.
 *
 *      이러한 문제점을 해결하기 위한 대안이 async, await 임.
 *
 *      a. async 예약어 ( 비동기의 의미 )
 *         메소드 선언시 사용하게 되고, promise 를 반환함.
 *
 *      b. await 예약어 ( 대기의 의미 )
 *         await는 async 메소드 에서만 사용 가능.
 */

console.log("--- 비동기 처리 실습 ---");

// setTimeout을 활용한 비동기 처리
// setTimeout(
//   function () {
//     console.log("1번!");
//   },
//   3000 // 3초
// );

// 만약에 동기 처리가 되었다면,
// 3초가 지난 다음에, "1번" 이 실행이 되고,
// 그 다음에 "2번" 이 실행이 되어야 함.
// 성능에 좋지 않아서, 비동기 처리를 하게 됨.

// 비동기 처리가 됨.
// 처리 시간이 짧은 "2번" 이 먼저 실행이 되고,
// 3초가 지나서, 처리 시간이 긴 "1번" 이 실행됨.
// console.log("2번!");

// function orderCoffee(coffee, time) {
//   setTimeout(() => {
//     console.log(`${coffee} 제조 완료`);
//   }, time);
// }

// orderCoffee("스윗 커피", 4000); // 3번 실행
// orderCoffee("레몬 차", 2000); // 1번 실행
// orderCoffee("아이스 커피", 3000); // 2번 실행

// setTimeout 메소드를 활용한 비동기 처리
// function double(num) {
//   return setTimeout(() => {
//     const doubleNum = num * 2;
//     //console.log(doubleNum);
//     return doubleNum;
//   }, 1000);
// }

// const res = double(10);

// console.log(res);

// callback 메소드를 활용한 비동기 처리
function double(num, callback) {
  setTimeout(() => {
    const doubleNum = num * 2;
    //console.log(doubleNum);
    callback(doubleNum);
  }, 1000);
}

// double 함수에서 처리된 결과값을 외부에서 사용할 수 있다는
// 것이 중요함. => callback 메소드를 활용해서 비동기 처리
// => 비동기 처리에서의 결과값을 반환 받아서 사용할 수 있음.
// double(10, (result) => {
//   console.log("result :" + result);
// });

// 2. promise 객체를 활용한 비동기 처리
console.log("-- promise 객체를 활용한 비동기 처리 --");

/**
 * Promise 의 매개변수 => 함수 => 실행 함수
 *    실행함수 : 비동기 작업을 수행하는 함수.
 *
 *    resolve : 비동기 작업의 상태를 성공으로 변경하는 함수.
 *       then() 메소드와 연결( 실행 ).
 *    reject : 비동기 작업의 상태를 실패로 변경하는 함수.
 *       catch() 메소드와 연결( 실행 ).
 */

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("성공");
//     //resolve 가 호출되면서,
//     // promise.then() 을 호출하면, "성공" 을
//     // 매개변수로 전달.
//   }, 1000);
// });

// promise.then(function (res) {
//   console.log(res);
// });

//promise.then((res) => console.log(res));

// const promiseReject = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("실패");
//     //reject 가 호출되면서,
//     // promise.catch() 을 호출하면, "실패" 을
//     // 매개변수로 전달.
//   }, 1000);
// });

//promiseReject.catch((err) => console.log(err));

/**
 * callback 지옥 : 콜백이 계속 반복되는 상태.
 *
 * 예를 들어서, 서버에서 요청한 자료를 수신해서 처리하는
 * 로직이라면, 정말 복잡해질 가능성이 높음.
 */
function printLetter() {
  console.log("A");

  setTimeout(() => {
    console.log("B");

    setTimeout(() => {
      console.log("C");

      setTimeout(() => {
        console.log("D");

        setTimeout(() => {
          console.log("처리 완료!!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

//printLetter();

// Promise 를 활용한 주문 프로그램을
// 비동기 프로그램으로 구현

// 성공, 실패 flag 정보
// true : 성공, false : 실패
// let orderPizza = false;

// const pizzaOrder = new Promise((resolve, reject) => {
//   if (orderPizza) resolve("피자 주문 성공");
//   else reject("피자 주문 실패");
// });

// pizzaOrder
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("처리 완료"));

/**
 * 1. 커피 주문 프로그램 구현
 *    - promise 사용
 *    - 주문할 커피는 변수로 설정.
 * 
 *    a. 주문 접수
 *       null 또는 공백 체크
 *       주문 접수 메세지 출력
 *       
 *    b. 준비 완료
 *       3초가 걸림.
 *       resolve(전용 메소드로 구현)
 *       
 *    c. 커피 주문 취소
 *       reject(전용 메소드로 구현)
 * 
 coffeeOrder
 .then(전용 메소드로 전달)
 .catch(전용 메소드로 전달)
 * 
 */

const coffeeOrder = new Promise((resolve, reject) => {
  let coffee = "ICE 커피";

  // null, 공백 체크 => 커피 주문 가능 여부 확인
  if (coffee != null && coffee != "") {
    console.log(`${coffee} 주문 접수`);

    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    // 주문 접수 취소
    reject("커피 주문 취소");
  }
});

// 커피 준비 완료
function orderSuccess(result) {
  console.log(`${result} 준비 완료`);
}

// 주문 취소 및 실패
function orderCancle(err) {
  console.log(err);
}

// 커피 주문 promise와 orderSuccess(), orderCancle()
// 서로 연결 작업
coffeeOrder.then(orderSuccess).catch(orderCancle);

/**
 * 2.  피자를 만드는 과정을 비동기로 처리
 *    피자 주문
 *    ========== 조리 ==========
 *    피자 도우 준비(2초) -> step 1
 *    토핑 완료(1초)      -> step 2
 *    굽기 완료(2초)      -> step 3
 *    =========== 조리 완료 ====
 *    피자 준비 완료
 * 
 *    then() 메소드 체이닝으로 비동기 구현.
 *    디자인 패턴의 빌더 패턴과 비슷한 형태.
 * 
 pizzaOrder()
  .then( (result) => step1(result) )
  .then( (result) => step2(result) )
  .then( (result) => step3(result) )
  .then(() => {
    console.log("피자 준비 완료");
  });

  step1, step2, step3 는 반드시 promise 객체를 반환해야만,
  then 메소드 체이닝이 가능해짐.
 * 
 */

//1. 시작 promise 구현.
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자 주문 시작");
  });
};

//2. 각 조리단계별로 메소드 구현. step1 ~ step3 의 이름으로 정의.
//      각 조리별 메소드는 반드시 promise 객체를 반환해야 함.
// step1, 피자 도우 준비, 2초, promise 객체 반환
const step1 = (msg) => {
  console.log(msg);

  // promise 객체 생성 및 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 2000);
  });
};

// step2, 토핑 완료, 1초, promise 객체 반환
const step2 = (msg) => {
  console.log(msg);

  // promise 객체 생성 및 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 1000);
  });
};

// step3, 굽기 완료, 2초, promise 객체 반환
const step3 = (msg) => {
  console.log(msg);

  // promise 객체 생성 및 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 2000);
  });
};

//3. 시작 promise 와 각 조리단계별 메소드를 .then() 메소드로 연결.
pizza()
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log(result))
  .then(() => {
    console.log("피자 준비 완료");
  });
