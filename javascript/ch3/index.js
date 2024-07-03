import * as circle from "./circle.js";
import lodash from "lodash";

const arr = [1111, 222, 111, 44, 33, 222];

const uniueArr = lodash.uniqBy(arr);

console.log(uniueArr);

console.log(circle.PI, circle.getArea(1), circle.getCircumgerence(1));

//console.log("index run~!!");
