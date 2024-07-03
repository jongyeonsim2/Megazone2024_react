/*
async function displayHello() {
  console.log("hello async...");
}

displayHello();
*/

async function whatsYourFavorite() {
  let fav = "Javascript";

  return new Promise((resolve, reject) => resolve(fav));
}

async function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite().then(displaySubject).then(console.log);

/** async function 은 promise 객체 반환된다는
 *  것을 알 수 있음.
 *
 *  따라서, async 와 함께 await 를 사용 할 수 있음을
 *  생각할 수 있음.
 */

async function whatsYourFavorite_async() {
  let fav = "Javascript";

  // promise 로 반환됨.
  return fav;
}

async function displaySubject_async(subject) {
  return `Hello, ${subject}`;
}

// await 를 적용. 함수를 만들어서 사용. => async function
async function init() {
  // promise 메소드 체이닝의 단점을 보완.

  // whatsYourFavorite_async() 함수의 실행이 끝날 때까지
  // 기다린 후 결과값을 response 에 저장.
  const response = await whatsYourFavorite_async();

  // displaySubject_async() 함수의 실행이 끝날 때까지
  // 기다린 후 결과값을  result에 저장.
  // 단, response 결과를 받을 때까지 처리를 기다려야 함.
  const result = await displaySubject_async(response);

  console.log(result);
}

init();
