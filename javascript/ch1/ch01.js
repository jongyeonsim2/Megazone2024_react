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

function getArea(width, height) {
  let area = width * height;
  console.log(area);
}

getArea(10, 20);
