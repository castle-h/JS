//JS의 자료형은 원시형이랑 객체형있다
//console.log(typeof __)로 data type 확인가능

let str = "hello world";
console.log(typeof str);

console.log(typeof 123.123);
console.log(typeof 456n);
console.log(typeof console.log);

//boolean
// boolean 논리적인 값을 표현하는 자료형
//true, false값 두가지만 존재

var name_check = "true";
var age_check = "false";

var value_check = 10 > 3;
console.log(value_check);

//null & undefined
//null : 값이 비어있다는 의미의 자료형
//null --> noting, empty, unknowm 값 나타낼 때 사용
//undefined : 값이 할당되어 있지 않은 상태를 나타날 때 사용되는 자료형
//underfined --> 변수 선언 후 초기화 하지 않는다면, undefined가 자동으로 할당

console.log(typeof null);

var null_check = null; // 값이 할당이 되었다면, output : flase
console.log(null_check === null); //output : true

//number
//num은 정수, 부동소수점 숫자를 표현하는 자료형
//ex) 사칙연산
// +infinity, -infinity, NaN 같은 특수 숫자 값이 포함
// 2^53 - 1 보다 큰 값은 사용 X , --> bigit 자료형사용하면 사용 O

var num_1 = 123.0;
var num_2 = 1 / 0;
var num_3 = 123.456;

console.log(num_1);
console.log(num_2);
console.log(num_1 - num_3); // 소수점을 정확하게 처리할 수 없어 math 사용해서 가능해져
console.log((num_1 - num_3).toFixed(3)); // 3번째자리부터 다 반올림 처리해라
console.log(num_1 / "hello"); // 숫자가 들어가서 not a num가 output된다.

//srting
//string은 문자, 문자열을 표현하는 자료형
//JS는 세 개의 따옴표 사용 [" "] - [' '] - [` `]
// ""이랑''은 상관없다 ?

var str_1 = "ektl_1";
var str_2 = "ektl_2";
var num = 3;
var str_3 = `ektl_${num}`; // backtick은 문자형안에 변수가능
// output : ektl_3

console.log(str_3);
