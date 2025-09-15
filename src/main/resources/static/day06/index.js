console.log( "index.js open" );

// [1] 변수와 상수 키워드
let count = 10; // 변수의 선언과 초기화
count = 20; // 변수값 수정 가능

const count2 = 20; // 상수의 선언과 초기화
// count2 = 20; // 상수값 수정 불가능

// 변수/상수에는 객체/함수/배열을 담기 가능
const obj = { name : "유재석" };
const method = () => {}
const arr = [ "유재석" , "강호동" ];

// * var 키워드 : let 키워드 없었던 시절에 사용된 키워드
var count3 = 30;
var count3 = 40; // var 키워드는 중복 변수명을 허용한다, 식별이 어렵다


// [2] 백틱 : 문자열 템플릿, 문자열 내 JS 표현식을 연결할 때 사용한다
console.log( `Hello : ${count}`);
let html = ``;
html += `<div> Hello ${count2} </div>`
console.log( html );

// [3] 조건문
const point = 85;
if( point >= 90 ){
    console.log( "A학점" );
}else if( point >= 80 ){
    console.log( "B학점" );
}else{
    console.log( "C학점" );
}

// [3-2] 조건문2 : 삼항연산자
console.log( point >= 90 ? "A학점" : point >= 80 ? "B학점" : "C학점" );

// [3-3] 조건문3 : 단축평가, 조건&&참이면 결과, 조건 || 거짓이면결과
console.log( point >= 90 && "A학점" ); // 만약에 참이면 'A학점' 아니면 false
console.log( point >= 90 || "A학점" ); // 만약에 참이면 true 아니면 "A학점"

// [3-4] 반복문1
const array = [ 10 , 20 , 30 , 40 , 50 ];
for( let index = 0 ; index <= array.length; index++ ){
    console.log( array[index] );
}
for( let index in array ){
    console.log( array[index] );
}
for( let value of array ){
    console.log( value );
}

// ** map ** : forEach 다르게 return 가능하다
let newArray = array.map( (value) => { console.log( value ); return value; } );
// ** filter ** : 조건부 return rksmdgkek
let newArray2 = array.filter( (value) => { console.log( value ); return value; })

// [5] 함수
function func1 ( param1 , param2 ){} // 선언적 함수 선언
const func2 = function( param1 , param2 ){} // 익명 함수 선언
const func3 = ( param1 , param2 ) => {} // 5-3 화살표 함수 선언  

func1( 4 , 10 ) // 함수 호출
func2( 10 , "유재석" ) // 함수 호출
func3( 10 , { name : "유재석" } ); // 함수 호출

// [6] 객체 : 여러개의 값을 가진 (하나의) 값
// 변수/상수는 값을 저장하는 상징적인 이름
const obj1 = { name : "유재석" , age : 40 };
const name2 = "강호동";
const age2 = 50;
const obj2 = { name2 , age2 }; // key와 value의 변수명이 같으면 key 생략 가능
const obj3 = [ "유재석" , 40 ];
console.log( obj1.name );
console.log( obj3[0] );
// *** 스프레드 연산자 : ... 배열이나 객체를 복사할 때 사용, 왜? 주소값 변경 목적
const obj4 = { ...obj1 , phone : "010" };
console.log( obj4 );
const obj5 = [ ...obj3 ];
console.log( obj5 ); // 값은 차이가 없지만 새로운 주소값으로 복사

// [7] 구조 분해 할당 : 객체나 배열에서 값을 분해하는 방법
const user = { name : "유재석" , age : 40 };
const{ name , age } = user; // 객체내 key(속성명)과 동일하게 상수/변수를 선언하면 분해 가능하다
console.log( name );
console.log( user.name );
console.log( age );


// [8] 비구조화 할당과 나머지 연산자
const[ num, ...intArray ] = [ 1 , 2 , 3 , 4 ];
console.log( num ); // 순서대로(인덱스) 분해 후 나머지는 ...에 저장한다
console.log( intArray );

// [9] async/await 동기화
    // 1. 비동기, fetch
const method1 = () => {
    fetch( "url" ).then( response => response.json() ).then( data => console.log( data ) );
}

    // 2. 동기, fetch
const method2 = async() => {
    const response = await fetch( "url" );
    const data = await response.json();
}

    // ******* Promise : await은 promise를 사용하는 함수들에 적용도니다 *******
const promiseFunc = () => {
    return new Promise( ( resolve , reject ) => { // resolve : 성공매개변수, reject : 실패매개변수
        if( 10 > 13 ){
            resolve( "10이 13보다 크다" );
        }else{
            reject( "10이 13보다 작다." );
        }
    })
}