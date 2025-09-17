export default function Component4( props ){
    // JS 구현
    const obj = { name : "유재석" , age : 40 };
    return (<>
        {/* JSX 구역 */}
        <h3> {obj.name} , {obj.age} </h3>
        <SubComp key1 = "value1" key2 = "value2"></SubComp>
        <SubComp name = "유재석" age = "40"></SubComp>
        <SubComp name = {obj.name} age = {obj.age}/>
        
    
    </>)
} // func end

function SubComp( props ){
    console.log( props );

    return(<>

        <h4> SubComp 자식 컴포넌트 </h4>
        <SubSubComp key="value"/>
    
    </>)
}

let count2 = 0; // 함수 밖에 있는 변수
function SubSubComp( props ){
    console.log( props )

    let count = 0; // 지역변수 특징 : 현재 실행 중인 함수(컴포넌트) 안에서 사용되는 변수
    const onAdd = () => {
         count++ ; console.log( count ); 
         count2++ ; console.log( count2 );
        }

    return(<>

        
        <h6> SubSubComp 자식의 자식 컴포넌트 </h6>
        <button onClick={ onAdd }> 버튼 </button>
        <h6> 지역변수 count : { count } / 전역변수 count2 : { count2 } </h6>
    
    </>)
}