// 변수선언
// let, const, var
// let 과 const 사용 권장 ??

//let -> 공간을 만들고 안녕이라는 이름을 붙여 거기에 들어가는거는 하세요 이다.
//let -> 변수 가능한 값을 저장하기 위한 기억공간(memory)을 선언하는 keyword
//let ㅁㅁ -> ㅁㅁ을 memory의 식별자/변수명으로 선언한다
//let ㅁㅁ = "ㅇㅇ" -> memory에 저장된 값을 ㅇㅇ라고 한다.

let 안녕 = "하세요";
let hi = "hello";
let HI = "HELLO";

console.log(안녕);
console.log(hi);
console.log(HI);
//console.log(  ) -> console에 출력을 해라

//let A를 이미 123으로 선언했지만, 뒤에 A는 456이라고했다
// console.log으 위치 즉, 코드의 위치에 따라서 A라고 선언된 메모리의 값이 변한다.

let A = "123";
console.log(A);

A = 456;
console.log(A);

// 만약 let A = "798" 라고 다시 선언한다면
//console.log(A) -> SyntaxError: Identifier 'A' has already been declared발생
// 이미 앞서서 A라는 변수가 선언되어서
// 변수는 중복이 불가능해

const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8");

console.log(input);

//--------------------상수----------------------------
//변경 불가능한 값을 저장하기 위한 메모리

/*
const B = 123;
console.log(B);
*/

// B = 456; console.log(B); -> TypeError: Assignment to constant variable.
// const -> 상수여서 변경이 불가하다. 그래서 오류남

//JS 객체, 배열
//배열 = 2차원
//객체= 'key':'value'
// 객체 -> ___ : ___ --> key를 통해서 value를 열 수 있다.

const superman = {
  name: "10",
  age: "15",
};

console.log(superman);

for (let key in superman) {
  console.log(superman[key]);
} // 여기쪽이 이해가 잘 안간다.
