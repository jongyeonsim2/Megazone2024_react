import * as circle from "./circle.js";
import lodash from "lodash";

const arr = [1111, 222, 111, 44, 33, 222];

// lodash 에는 객체와 배열관련 기능을 제공.
const uniueArr = lodash.uniqBy(arr);

console.log(uniueArr);

// 터미널에서 npm run start 입력

console.log(circle.PI, circle.getArea(1), circle.getCircumgerence(1));

//console.log("index run~!!");
