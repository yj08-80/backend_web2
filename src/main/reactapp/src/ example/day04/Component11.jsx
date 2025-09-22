import { useEffect, useRef, useState } from "react";

export default function Component11( props ){

    // [1] 렌더링 하지 않고 데이터를 참조하는 훅 vs useState
    // 1. import { useRef } from "react" 또는 자동완성
    const inputRef = useRef( null ); 

    // 2. useRef( 초기값 )

    const 등록함수 = () => {
        // 3. inputRef : 현재 참조중인 객체 정보 { current : 참조값 }
        console.log( inputRef );
        // 4. useRef.current : 참조값, <input>
        console.log( inputRef.current );
        // 포커스(마우스커서)
        inputRef.current.focus();
        // 단순 입력이라면 useState보다 useRef 코드가 단순하다
        console.log( inputRef.current.value );
    }

    // [2] useState와 useRef의 차이점
    const [ count , setCount ] = useState( 0 )
    // 1. useRef(초기값)
    const countRef = useRef( count );
    // 2. count가 변경될 때마다 
    // useEffect( () => {} , [] ) : 특정한 상태가 변경될때마다 실행되는 훅(함수)
    // count의 상태가 변경되면 해당 함수 (자동) 실행
    useEffect( () => {
        countRef.current = count;
    } , [ count ] );

    const formRef = useRef();
    const 전송함수 = () => {
        console.log( formRef.current ); // 폼 내용물들을 한 번에 가져와서 한번에 자바(스프링)에게 전송
        console.log( formRef.current.elements[ "textData" ].value ); // formRef.current.elements[ name속성명값 ]
        console.log( formRef.current.querySelector( ".textData" ) );
    }


    return(<>

    
        <h3> useRef 예제1 : 입력 </h3>
        <input ref={ inputRef } />
        <button onClick={ 등록함수 }> 등록 </button>

        <h3> useRef 예제2 : 이전 값 기억 </h3>
        <p> 현재 count : { count } / 이전 count : { countRef.current } </p>
        <button onClick={ ( e ) => { setCount( count+1 ); } }> 증가 </button>

        <h3> useRef 예제3 : 입력 폼 </h3>
        <form ref={ formRef }>
            <input name="textData" id="textData" className="textData"/> <br/>
            <select name="selectData">
                <option> 바나나 </option>
            </select> <br/>
            <textarea name="text2Data"></textarea> <br/>
            { /* 폼 안에서 버튼 쓰려면 type="button" 써야함 */}
            <button onClick={ 전송함수 } type="button"> 폼 전송 </button>


        </form>

    
    </>)
}