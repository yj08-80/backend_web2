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
    const onAdd = () => {
    if (!name || !phone || !age) return; // 값이 비어있으면 추가 안 함
    const newPerson = { name, phone, age };
    setList([...list ]); // 리스트에 새 객체 추가
    setName("");
    setPhone("");
    setAge("");
  };
    
  
    return(<>
    
    <h3> 전화번호부 </h3>
    <input placeholder="성명" value={ name } onChange={ nameAdd }/>
    <input type="tel" value={ phone } placeholder="연락처(예:010-1234-5678)" onChange={ phoneAdd } />
    <input type="number" value={ age } placeholder="나이" onChange={ ageAdd }/>
    <button onClick={ onAdd }> 등록 </button>

    <ul>

        {
            list.map( ( one ) => { return <li>{ one }</li> })
        }

    </ul>

    
    
    </>)
};