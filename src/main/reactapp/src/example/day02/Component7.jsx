import { useState } from "react"

export default function Component7( props ){

    // [1] useState 변수 선언 : 구문 분해 이용한 useState 반환값을 변수화
    // 1. import { useState } from "react"
    // 2. const [ 변수명 , set변수명 ] = useState( 초기값 );
    // * 변수명은 카멜표기법, set변수명은 변수명 앞에 set 붙인다
    const[ count , setCount ] = useState( 0 );

    const countAdd = () => {
        // setXXX(새로운값); ---> 만일 값이 변경되었을 때 해당 컴포넌트 재실행( 재렌더링 )
        // 주의할 점 : 값이 변경되는 전제조건, 1->2, 유재석->강호동
        /*
            1. 데이터/자료 : 값
            2. 자료타입 : 값의 분류( 한국 분리수거 vs 미국 분리수거 )
                - 기본타입(리터럴) vs 참조타입(객체/주소값)
            3. 자료의 주소값 변경 기준
                1-> 2(리터럴/(주소) 변경)
        
        */
        const newValue = count + 1;
         setCount( newValue ); // 훅( 갈고리 : 특정한 기능을 실행하면 다른 기능들도 실행 )
        }

        const [ array , setArray ] = useState( [ "수박" ] );
        const arrayAdd = () => {
            array.push( "사과" ); // [ "수박 "] -> [ "수박 " , "사과 " ]
            // 데이터를 복사하여 데이터는 동일하지만 새로운 객체(주소) 만든다 --> 객체/배열 복사
            // setArray(array); 불가능
            setArray( [...array] );
        }

        const [ data , setData ] = useState("");
        const dataAdd = ( event ) => {
            // onChange가 실행되었을 때 event(이벤트 결과 정보)가 이벤트결과가 함수의 매개변수로 전달된다
            console.log( event );
            console.log( event.target.value ); // onChange가 발동한 마크업의 입력받은 값 가져오기
            // 입력받은 값을 useState로 변경한다. setXXX()
            setData(event.target.value);
            // document.querySelector().value <-- 이거 안하려고 위에꺼 사용

        }
        

    return(<>
        
        <h3> useState 예제1 : { count } </h3>
        <button onClick={ countAdd }> count 증가 </button>
        <h3> useState 예제2 : { array } </h3>
        <button onClick={ arrayAdd }> 과일추가 </button>
        <h3> useState 예제3 : { data } </h3>
        <input value={ data } onChange={ dataAdd }/> <br/><br/>
        <input value={ data } onChange={ ( e ) => { setData( e.target.value ) } } />
        { /* 위의 방식과 아래 방식은 똑같으나 길이 차이 */}
        
        </>)
}