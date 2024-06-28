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

console.log(strvarA); // 문자열 undefined 가 반환
console.log(strvarB); // 문자열 null 이 반환
console.log(strvarC); // 문자열 true 이 반환.

// Boolean 으로 형변환
let varTrue = 1;
let varFalse = 0;
let varBlank = "";
