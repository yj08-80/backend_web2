import { useEffect, useState } from "react"

export default function Component8( props ){


    // 리액트 훅(갈고리) : 1.useState 2.useEffect
    // [1] useEffect : 특정한 시점(생명주기)에 함수가 실행
    // [2] 사용법
    //      2-0 : import { useState } from "react"
    //      2-1 : 
    //      2-2 mount/update : useEffect(정의함수명) 또는 useEffect( () => {} )
    //      * [] 의존성배열 : 상태변수를 대입하여 그 상태변수가 재렌더링하면 useEffect 실행
    // [3] 시점 : 1.컴포넌트 탄생(최초실행) 2.컴포넌트 인생/업데이트(재실행/재렌더링)
    //           3.컴포넌트 죽음 unmount (컴포넌트가 화면에서 없어질 때)
    // 3-1 : 1.최초실행 2.[특정상태변경]재실행
    useEffect( () => { console.log( "(1)컴포넌트(함수) 탄생(최초실행)" ); } )

    const [ count , setCount ] = useState( 0 );

    // 3-2 : 1.최초실행 2.[특정상태변경]재실행
    useEffect( () => {
         console.log( "(2)컴포넌트(함수) 업데이트 = update(재실행)" );
        } , [ count ] ); // 의존성 배열에 대입된 count가 setCount가 될 때 현재 useEffect (자동) 실행

    

    // 3-3 : 1.최초실행
    useEffect( () => { console.log( "(3)" )} , [ ] )

    // *
    const [ count2 , setCount2 ] = useState( 0 );

        return(<>

            <h3> useEffect 예제: { count } </h3>    
            <button onClick={ ( e ) => { setCount( count + 1 )}}> 버튼1 ( 3-1 / 3-2 ) </button>
            <button onClick={ ( e ) => ( setCount2( count2 + 1 ))}> 버튼2 ( 3-1 ) </button>
    
    </>)
} // func end