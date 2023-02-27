//Que 1.
const a = [1, 3, 5, 2, 4];
const output = [];

for (let i = 0; i < a.length; i += 2) {
  output.push(a[i]);
}
console.log(output);
// [1, 5, 4]

//Que 2.
const arr = [1, 3, 5, 2, 4];

let res = arr.map((i) => i * i);
console.log(res);
// [1, 9, 25, 4, 16]

// 3.
const myArr = [1, 3, 5, 2, 4];
const myOutput = [];

for (let i = 0; i < myArr.length; i += 2) {
  myOutput.push(myArr[i] * myArr[i]);
}
console.log(myOutput);
//[1, 25, 16]
