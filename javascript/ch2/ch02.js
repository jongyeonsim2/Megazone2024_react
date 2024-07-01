console.log("hello ch02 javasript~~!!");

/** 호이스팅  */
console.log("--- 호이스팅 ---");

func(); // 함수 정의가 없지만, 호출한 상태.

function func() {
  console.log("호이스팅 테스트");
}

console.log("--- 콜백 함수 ---");

function parentFunc(callback) {
  console.log("parent");
  callback();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc);

/** callback method 의 활용 - solid 책
 *
 * 비즈니스 : 계좌의 입출금 내역 계산
 * OCP : 코드의 재사용 => 메소드 내의 반복문을 재사용.
 */

// 아래의 메소드에서 출력부분만 제외하고 코드가 동일.
function repeat(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log(idx + 1);
  }
}

function repeatDouble(count) {
  for (let lidx = 0; idx < count; idx++) {
    console.log((idx + 1) * 2);
  }
}

// 반복문 재사용되도록 개선한 함수
function repeat2(count, callback) {
  for (let idx = 0; idx < count; idx++) {
    callback(idx + 1);
  }
}

function origin(count) {
  console.log(count);
}

function double(count) {
  console.log(count * 2);
}

repeat2(5, origin);
repeat2(5, double);

console.log("--- 화살표 함수 ---");

// 함수 표현식을 더 간략하게 코드를 작성.

greeting = (name) => `hello ${name}`;

greetingText = greeting("홍길동");

console.log(greetingText);

console.log("--- 객체 ---");

// 객체 생성
let objA = {}; // 리터럴 객체
let objB = new Object(); // 객체 생성자

let obj = {
  // obj 는 객체 참조 변수, 저장된 것은 주소값
  a: 1,
};

let isPropertyExists = obj.b !== undefined;

console.log(isPropertyExists);
console.log(obj.b); // obj.b 는 undefined 임.

// in 연산자
let person = {
  age: 10,
};

// "name" 이라는 property 가 person 객체에 존재하는지?
let isNameExist = "name" in person;

console.log(isNameExist); // false

let isAgeExist = "age" in person;
console.log(isAgeExist); // true

console.log("--- 배열 ---");
// 배열의 값으로 어떤 자료형도 사용할 수 있음.
// 요소로 배열, 객체, 함수....

let arr = [
  1,
  "1",
  true,
  false,
  null,
  undefined,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1 },
];

console.log(arr); // arr 은 참조변수임. 저장된 값은 주소임.
// 따라서, arr 은 객체임. 객체에는 프로퍼티, 메소드로 구성.
// 그래서, javascript 에서 제공해주는 프로퍼티, 메소드 가 있음.

/**
 * javascript 의 자료형
 *
 * 원시자료형
 *      숫자형, 문자형, 불리언형, null형, Dudefined형
 * 객체자료형
 *      Object 형 - 배열, 함수, 정규표현식
 */

/**
 * javascript : C++, javascript engine C++ 로 만들어진 것임.
 *              C++ : C + OOP 를 더한 것임.
 *                    C : 메모리를 관리하는 변수 => 포인터
 *                        함수포인터 : 함수명
 *                    OOP : 기본형을 제외하고 다양한 사용자
 *                      정의 타입을 만들어서 사용할 수 있음.
 *
 * 기회가 된다면, C 언어 기본서 => C 언어 기반의 자료 구조.
 *              => C++ 기본서
 *
 * javascript 에서 객체주소 확이은?
 *   javascript engine 에서 보호하고 있음.
 *   1. javascript engine C++ 로 컴파일해서 확인.
 *   2. 개발조 모드에서 간접적으로 확인.
 *
 *
 */

console.log("--- null 병합 연산자 ---");

let name;
let nickName = "nickName";

let user = name ?? nickName; // 값이 확정된 것은 nickName;

console.log(user);

/***************************************************/
/******** 여기까지는 ch1 의 중요한 부분 복습. ********/
/***************************************************/

/***************************************************/
/******** 여기서 부터는 ch2 . ********/
/***************************************************/
console.log("--- truthy, falsy ---");

// undefined, null, 0, -0, Nan, "", '' 는 조건식에서
// false 로 평가함. 실제로는 false 가 아니지만,
// false 처럼 보고 처리하겠다.
if (!undefined) {
  // undefined => false 로 봄.
  console.log("1 falsy 한 값입니다.");
}

if (!null) {
  console.log("2 falsy 한 값입니다.");
}

if (!0) {
  console.log("3 falsy 한 값입니다.");
}

if (!-0) {
  console.log("4 falsy 한 값입니다.");
}

if (!NaN) {
  console.log("5 falsy 한 값입니다.");
}

if (!"") {
  console.log("6 falsy 한 값입니다.");
}

if (!``) {
  console.log("7 falsy 한 값입니다.");
}

console.log("--- truthy, falsy 활용 ---");

let varA;

if (varA) {
  console.log("값이 있음");
} else {
  console.log("값이 없음");
}

// 단락 평가 : 논리 연산에서 처리를 지름길로 수행할 수 있도록 함.
// AND ( && ) : 앞이 피연산자가 false 면 뒤의 피연산자는 볼 필요 없음.
// OR ( || ) : 앞의 피연산자가 true 면 뒤의 피연산자는 볼 필요 없음.

function calcA() {
  console.log("a");
  return false;
}

function calcB() {
  console.log("b");
  return true;
}

console.log(calcA() && calcB());

// 단락 평가 + truthy false
// truthy false 에 해당되는 값이면, 그대로 반환.
console.log("단락 평가 + truthy false");
function calcA2() {
  console.log("a");
  return undefined; //falsy
}

function calcB2() {
  console.log("b");
  return true;
}

console.log(calcA2() && calcB2());

// 객체 + 단락 평가 + truthy falsy
console.log("객체 + 단락 평가 + truthy falsy");

function getName(person) {
  if (person !== undefined && person !== null) {
    return person.name;
  } else {
    return "존재하지 않는 객체정보입니다.";
  }
}

let person2; // 객체

let name2 = getName(person2);

let person3 = null; // 객체

let name3 = getName(person3);

// 모든 객체에 대해서 null, undefined 체크를 하는 것이 부담이 됨.
// => 객체 + 단락 평가 + truthy falsy

function getName3(person) {
  return person && person.name; // person 이 null => false
  // person.name 이 undefined => false
}

let person4 = { name: "홍길동" }; //리터럴 객체

let name1 = getName3(undefined);
console.log(name1);
name1 = getName3(null);
console.log(name1);
name1 = getName3(person4);
console.log(name1);

// 객체 자료형
console.log("객체 자료형");
// 원시 자료형을 제외하고는 모든 자료형은 객체 자료형임.
// 그래서, 배열도 객체 자료형임. 배열에는 프로퍼티와 메소드가 있음.
const arr1 = [1, 2, 3];
console.log(arr1.length); // 배열 객체의 프로퍼티

arr1.push(4); // 배열 객체의 메소드
console.log(arr1);

function myFunction() {
  console.log("hello");
}

console.log(myFunction.name); // 함수 객체의 프로퍼티

let numA = 1;
let numB = 1;

console.log(numA === numB); // true

let people1 = {
  name: "홍길동",
};

let people2 = {
  name: "홍길동",
};

console.log(people1 === people2); // false, 객체의 주소값 비교
// 객체의 프로퍼티의 값을 비교해야함.

let func2 = () => {
  console.log("func2");
};

let func3 = () => {
  console.log("func3");
};

console.log(func2 === func3); // false, 객체의 주소값 비교

// 반복문 활용
console.log("--- 반복문 활용 ---");

arr = [1, 2, 3, 4];

// 1. 인덱스를 활용
for (let idx = 0; idx < 4; idx++) {
  console.log(arr[idx]);
}
