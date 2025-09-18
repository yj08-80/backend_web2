
import axios from "axios";
import { useEffect, useState } from "react";
import './Task5.css'

// TASK5 : 기존 TASK4.jsx 이어 useEffect/axios를 활용해서 spring+mybatis 서버 와 통신하여 TASK5 완성(등록/전체조회/삭제)하시오.

export default function Task5( props ){
    const [ name , setName ] = useState('')
    const [ phone , setPhone ] = useState('')
    const [ age , setAge ] = useState('')
    const [ members , setMembers ] = useState( [ ] );

    // [1] axios 이용하여 스프링 서버에게 등록 요청
    const memberWrite = async() => {
        const obj = { name , phone , age: Number(age) };
        const response = await axios.post( "http://localhost:8080/members" , obj );
        console.log( response.data );
        memberPrint();
    }

    // [2] 출력할 데이터들을 axios를 이용하여 스프링에게 요청
    const memberPrint = async() => {
        const response = await axios.get( "http://localhost:8080/members" );
        setMembers( response.data );
    }

    useEffect( () => { memberPrint() } , [] );

    // [3] axios 이용하여 스프링 서버에게 삭제 요청
    const memberDelete = async( deleteNo ) => {
        const response = await axios.delete( `http://localhost:8080/members?no=${ deleteNo }` );
        const newMembers = members.filter( ( member ) => { return member.no != deleteNo } );
        console.log( response.data );
        setMembers( [ ...members ] );
        memberPrint();
    }


    return (<>

        <h3> 전화번호부 </h3>
        <input value={ name } placeholder="성명" onChange={ (e)=>{ setName(e.target.value ) } } />
        <input value={ phone } placeholder="연락처(예:010-1234-5678)" onChange={ (e)=>{ setPhone( e.target.value) } }/>
        <input type="number" value={ age } placeholder="나이" onChange={ (e)=>{ setAge( e.target.value ) } } />
        <button className="writeBtn" onClick={ memberWrite }> 등록 </button> <br/>
        {   members.map( ( m ) => {
                return <div key={ m.no }>
                        <span className="bold">성명 : </span>{ m.name }
                        <div className="phone"><span className="bold">연락처 : </span><span className="phone2">{ m.phone }</span></div>
                        <span className="bold">나이 : </span>{ m.age }
                        <button className="deleteBtn" onClick={ ()=> { memberDelete( m.no ) }  }> 삭제 </button>
                    </div>
            })
        }
    </>)
}
