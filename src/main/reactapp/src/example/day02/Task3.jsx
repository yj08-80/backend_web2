import { useState } from "react"

export default function Task3( props ){


    // [1] 수량 감소,증가
    const[ count , setCount ] = useState( 0 );

    const countAdd = () => {
        const newValue = count + 1;
        setCount( newValue );
    }

    const countDown = () => {
        const newValue = count - 1;
        setCount( newValue );
    }

    // [2] 제품명
    const[ data , setData ] = useState( "" );
    const dataChange = ( e ) => {
         setData( e.target.value ); 
        }
    return(<>
    
    제품명 : <input value={ data } onChange={ dataChange }/><br/>
    현재 수량 : { count } <br/>
    <button onClick={ countDown }> 감소 </button>
    <button onClick={ countAdd }> 증가 </button>
    
    
    </>)
}
