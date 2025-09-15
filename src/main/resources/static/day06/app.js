// app.js
// ************* 다른 js의 export된 자료 가져오기 **************

// [1] math.js의 자료 가져오기
import add from './math.js';
add( 3 , 4 );

// [2] config.js의 자료 가져오기
import config from './config.js';
console.log( config );

// [3] util.js의 자료 가져오기
import hello, { PI , E } from './util.js';
hello( "유재석" );
console.log( PI );
console.log( E );