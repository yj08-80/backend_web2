import { useState } from "react";

export default function Task4( props ){


    // 성명
    const[ name , setName ] = useState( "" );
    const nameAdd = ( event ) => {

        setName( event.target.value );
    }

    // 연락처
    const[ phone , setPhone ] = useState( "" );
    const phoneAdd = ( event ) => {

        setPhone( event.target.value );
    }

    // 나이
    const[ age , setAge ] = useState( "" );
    const ageAdd = ( event )=> {
        setAge( event.target.value );
    }

    // 리스트 빈 배열로 시작
    const [list, setList] = useState([]);
    

    // 등록 함수
    // 1. onClick = {함수명} 또는 2. onClick = { () => {} } 3. 주의할점 : onClick = {함수명()} XXX

    const[ members , setMembers ] = useState( [] ); // 회원정보 객체를 담는 리스트
    const onAdd = () => {
        const obj = { name , phone , age } // 2-1 : 입력받은 데이터들을 객체화
        members.push( obj ); // 2-2 : 객체를 리스트에 저장
        setMembers( [...members] ) // 2-3 : 리스트를 재렌더링
        // ( 주의할점 : 객체/배열은 ...스프레드 연산자 이용한 복사 = 주소값 변경 )
    }; // onAdd func end

    // 삭제 함수 , 삭제 버튼을 클릭했을 때, 무엇을 삭제할지 매개변수( pk, 중복값없는) 필요
    const onDelete = ( deletePhone ) => { 
        console.log( deletePhone );
        members.forEach( (m) => {
            if( m.phone = deletePhone ){
                members.splice;
            }
        })
    }

    // 삭제 함수 방법 : setMembers( [ ...newMembers ] );
    // forEach vs map + return vs filter + if

    
  
    return(<>
    
    <h3> 전화번호부 </h3>
    <input placeholder="성명" value={ name } onChange={ nameAdd }/>
    <input type="tel" value={ phone } placeholder="연락처(예:010-1234-5678)" onChange={ phoneAdd } />
    <input type="number" value={ age } placeholder="나이" onChange={ ageAdd }/>
    <button onClick={ onAdd }> 등록 </button><br/>

    <ul>

        {
            members.map( ( m ) => {
                 return <li>{ m.name }{ m.phone }{ m.age }
                 <button onClick={ () => onDelete( m.phone ) }>삭제 </button></li> 
                })
        }

    </ul>

    
    
    </>)
};