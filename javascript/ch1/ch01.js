console.log("hello javasript~~!!");

console.log("안녕 자바스크립트~~!!");

//
/* */

/* 변수 선언 */
let age = 25;
console.log(age);

let age1 = 25;

var age2 = 25; // 일반적으로는 let 키워드로 변수 선언해서 사용.

/* 상수 변수 선언 - const 키워드를 사용 */
const age3 = 25;
//age3 = 200;

/* 변수에 기호 사용 - _ 와 $ 만 가능 */
let $age = 25;
let human_age = 25;

//let #age = 25;

/* 변수에 숫자 사용
   변수의 이름을 숫자로 시작하면 안됨.
*/
//let 2024year = "good";
let _2024year = "good";
let $2024year = "good";

console.log(_2024year);
console.log($2024year);

/* 변수에 예약어 사용 */
//let let = "good";

/* 변수의 대소문자 구별 */
let code = 1;
let Code = 2;

console.log(code);
console.log(Code);

/* 변수이름 작성 
   - 카멜 표기법
     let totalSalesCount = 10;
   - 파스칼 표기법
     let TotalSalesCount = 10;
   - 스네이크 표기법
     let total_sales_count = 10;
*/

/* 자료형의 종류
    - 원시자료형
      숫자형, 문자형, 불리언형, null형, Undifined 형
    - 객체자료형
      배열, 함수, 정규표현식
*/

// 숫자형
let age4 = 25;
let tall = 175.9;
let minus = -20;

console.log(1 + 2);
console.log(1 * 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(1 % 2);

//Infinity
// 다른 언어와 달리 0으로 나누어도 오류가 발생하지 않고,
// Infinity가 결과로 반환됨.
console.log(1 / 0);

//NaN : Not a Number
// 수학적으로 연산이 불가능하면, NaN 이 반환됨.
// 프로그램이 오류를 발생시키거나, 멈추지 않음.
const nan1 = 1 * "hello";
console.log(nan1);

/** 문자형(string) */
let name = "제니스윤";
let welcomeText = name + " 반가워요.";

console.log(welcomeText);

// 백틱을 사용한 문자열 결합 : 템플릿 리터럴
let guestNmae = "이정훈";
let greetingText = `welcome ${guestNmae}`;
console.log(greetingText);

/** 불리언(boolean) */
let isSwitchOn = false;
console.log(isSwitchOn);
isSwitchOn = true;
console.log(isSwitchOn);

/** null : 변수에 아무런 값도 할당할 필요가 없는 경우
 *         javascript 에서는 독립적인 자료형으로 분류됨.
 */
let empptyVar = null;
console.log(empptyVar);

/** undefined : 미정의 값 */
let realEmptyVar;
console.log(realEmptyVar);

/** 형변환
 *   - 묵시적 형변환
 *   - 명시적 형변환
 */

// 묵시적 형변환
let number = 10;
let string = "20";

const result = number + string;

// 1020 => 10을 문자로 형변환 후 문자열 합치기 => 묵시적 형변환
console.log(result);

// 명시적 형변환
let strA = "10";
let strB = "10개";
let strC = "개10";

let numA = Number(strA);
let numB = Number(strB); // NaN

console.log(numA);
console.log(numB);

// 문자가 포함된 숫자를 숫자로 변환하기
let numAA = parseInt(strA, 10); // srtA 를 10 진수 숫자로
let numBB = parseInt(strB, 10); // srtA 를 10 진수 숫자로
let numCC = parseInt(strC, 10);

console.log(numAA);
console.log(numBB);

// 결과가 NaN 으로 반환됨.
// strC 의 문자열이 문자로 시작하기 때문임.
// parseInt 내장함수 : 문자열의 첫 문자부터 숫자로 변환하게
//          됨으로, 문자로 시작하면 NaN 을 반환하게 됨.
console.log(numCC);

let num16AA = parseInt(strA, 16);
let num16BB = parseInt(strA, 16);

console.log(num16AA);
console.log(num16BB);

// 숫자를 문자로 형변환
let num = 2022;
let str = String(num); // 명시적 형변환

console.log(str);

let varA;
let varB = null;
let varC = true;

let strvarA = String(varA);
let strvarB = String(varB);
let strvarC = String(varC);

console.log(strvarA); // undefined 문자열이 반환
console.log(strvarB); // null 문자열이 반환
console.log(strvarC); // true 문자열이 반환.

// Boolean 으로 형변환
let varTrue = "1"; //true
let varNumTrue = 1; //true
let varFalse = "0"; //true
let varNumFalse = 0; //fase
let varBlank = ""; //false

let boolA = Boolean(varTrue);
let boolNumA = Boolean(varNumTrue);
let boolB = Boolean(varFalse);
let boolNumB = Boolean(varNumFalse);
let boolC = Boolean(varBlank);

console.log(boolA);
console.log(boolNumA);
console.log(boolB);
console.log(boolNumB); //false
console.log(boolC);

/** 연산자 */
// 대입연산자
let numA1 = 1;
let numB1;
let numC1;

numB1 = numC1 = numA1;

console.log(numA1, numB1, numC1);

// 산술연산자
let numberA = 1;
let numberB = 2;

console.log(numberA + numberB);
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberA / numberB);
console.log(numberA % numberB);

// 복합대입연산자
let number1 = 10;

number1 += 10;
console.log(number1);

number1 -= 10;
console.log(number1);

number1 *= 10;
console.log(number1);

number1 /= 10;
console.log(number1);

number1 %= 10;
console.log(number1);

// 증감 연산자
let a = 1;
//a++; // 후위 연산자
console.log("증감 연산자");
console.log(a++); // 1 => 참조 후 증가
console.log(a); // 2

a = 1;
console.log(++a); // 2 => 증가 후 참조
console.log(a); // 2

// 논리 연산자
// or(||) : 둘 중 하나라도 참이면 참.
// and(&&) : 둘 중 하나라도 거짓이면 거짓.
// not(!) : 참이면 거짓, 거짓이면 참.

boolA = true;
boolB = false;

console.log(boolA || boolB); //true
console.log(boolA && boolB); //false
console.log(!boolA); //false
console.log(!boolB); //true

// 비교연산자
numberA = 2;
numberB = 2;
numberC = "2";

console.log(numberA === numberB); //true
console.log(numberB === numberC); //false

console.log(numberA !== numberB); //false
console.log(numberB !== numberC); //true

console.log(numberA < numberB); //false
console.log(numberB > numberC); //false

console.log(numberA <= numberB); //true
console.log(numberB >= numberC); //true

//null 병합 연산자
// 값이 확정된 변수를 찾을 때 사용.
// null, undefined : 값이 확정되지 않은 변수
varA = 10;
varB = 20;
varC;

console.log(varA ?? varB); //10 => 연산자의 왼쪽을 기준.
console.log(varB ?? varC); //20

// 변수 user에 해당하는 사용자의 이름이 없다면,
// 닉네임으로 사용.
let customerName;
let nickName = "winterHood";

let user = customerName ?? nickName;

console.log(user);

//typeof 연산자
varA = 1; //number
varA = "winterHood"; //string

console.log(typeof varA);

// 확인 결과 string 이면, varA++ 하지 않도록 확인함.
//console.log(varA++); //NaN

//삼항 조건 연산자
varA = "메뉴가 뭐지?";

typeof varA === "string"
  ? console.log("문자 자료형")
  : console.log("문자형 자료형이 아님");

//조건문
num = 11;

if (num === 10) {
  console.log("조건 일치!");
  console.log("num은 10 이상입니다.");
} else if (num > 10) {
  console.log("조건 일치!");
  console.log("num은 10 보다 큽니다.");
} else {
  console.log("조건 불일치!");
  console.log("num은 10 작습니다.");
}

//switch 문
let fruit = "apple";

switch (fruit) {
  case "apple": {
    console.log("사과");
    break;
  }
  case "banana": {
    console.log("바나나");
    break;
  }
  default: {
    console.log("해당 과일이 아님.");
  }
}

//반복문
for (let i = 1; i <= 10; i++) {
  if (i > 5) {
    console.log("반복문 종료");
    break;
  }
  console.log(i);
}

//함수
function greeting() {
  console.log("안녕하세요.");
}

greeting();

function getArea() {
  let width = 10;
  let height = 20;

  let area = width * height;

  console.log(area);
}

getArea();

// 매개변수가 있는 함수
function getArea2(width, height) {
  let area = width * height;
  console.log(area);
}

getArea2(10, 20);

// 결과를 반환하는 함수
function getArea3(width, height) {
  let area = width * height;
  return area;
}

let result2 = getArea3(10, 20);

console.log(result2);

// 중첩 함수 : 함수 내에 또 다른 함수를 선언.
function greeting2() {
  function greetingWithName(name) {
    //중첩 함수
    console.log(`hello! ${name}`);
  }

  let name = "홍길동";
  greetingWithName(name);
}

greeting2();

/**
 * 함수와 호이스팅(Hoisting)
 *
 * - 호이스팅이란.
 * 함수 func에 대한 선언이 호출 코드보다 아래에 위치하지만,
 * 마치 호출보다 먼저 함수를 선언한 것처럼 자연스럽게 동작하고 있음.
 *
 * 함수를 선언하기 전에도 호출할 수 있는 자바스크립트의 기능.
 *
 * - 준비 단계란.
 * 자바스크립트는 코드를 실행하기 전에 준비 단계를 수행.
 * 따라서, 준비 단계에서 중첩 함수가 아닌 것들은 모두 찾아서
 * 미리 생성을 해두게 됨.
 *
 * - 장점.
 * 코드 내에서 함수 선언의 위치를 강제하지 않기 때문에 더 유연한
 * 프로그래밍이 가능함.
 *
 */
console.log("-- 함수와 호이스팅 --");

func(); // func 함수 호출

function func() {
  // func 함수의 선언부
  console.log("hello");
}

/**
 * 함수 표현식
 *
 * 함수를 생성하고 변수에 값으로 저장하는 방법.
 *
 * 함수 표현식으로 만든 함수는 호이스팅되지 않음.
 */
console.log("-- 함수 표현식 --");

let greeting3 = function () {
  console.log("hello");
};

greeting3();

let greeting4 = greeting3; // () 가 없는 점에 주의.

greeting4();

// 함수 표현식으로 호이스팅 확인.
funcA();
//funcB(); //함수 표현식은 호이스팅을 지원하지 않음.

function funcA() {
  // 일반적인 함수
  console.log("func A");
}

// let funcB = function () {
//   // 함수 표현식으로 만든 함수
//   console.log("func B");
// };

/**
 * 콜백 함수(Callback Function)
 *
 * 함수를 다른 함수의 매개변수로 사용되어지는 경우.
 */
console.log("-- 콜백 함수 --");

function parentFunc(callback) {
  console.log("parent");
  callback();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc);

// 함수 표현식을 이용한 콜백함수
console.log("-- 함수 표현식을 이용한 콜백함수 --");

function repeat(count, callback) {
  // callback 에 double 함수가 전달.
  for (let idx = 0; idx < count; idx++) {
    callback(idx + 1);
  }
}

const double = function (count) {
  console.log(count * 2);
};

repeat(5, double); //double 은 함수 표현식.

// 화살표 표현식(화살표 함수) : 함수 표현식의 단축형

// let funcA = (매개변수) => 반환값;

// let funcA = function(매개변수) {
//     return 반환값;
// }
console.log("-- 화살표 표현식 --");

greeting4 = (name) => `hello ${name}`;

greetingText = greeting4("홍길동");

console.log(greetingText);

greeting4 = (name) => {
  let greetingText = `hello ${name}`;
  return greetingText;
};

console.log(greeting4("홍길동2"));

// 콜백함수 + 화살표 함수
console.log("-- 콜백함수 + 화살표 함수 --");

let isConfirm = true;

// 콜백 메소드, 매개변수 두 개가 함수 표현식.
function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}

// 콜백 메소드 호출
confirm(
  () => console.log("승인"),
  () => console.log("거부")
);
