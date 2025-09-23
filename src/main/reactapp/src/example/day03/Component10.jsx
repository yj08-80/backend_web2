import axios from "axios"
import { useEffect, useState } from "react"

// ========= 스프링 서버 내 day07( boardService13 ) ========= //
export default function Component10( props ){

    // [1] 입력받은 데이터들을 관리하는 useState
    const [ bcontent , setBcontent ] = useState( "" );
    const [ bwriter , setBwriter ] = useState( "" );
    // [2] axios 이용하여 스프링 서버에게 등록 요청
    const boardWrite = async() => {
        // 2-1 : 입력받은 데이터들을 객체화
        const obj = { bcontent , bwriter };
        // 2-2 : axios 요청
        const response = await axios.post( "http://localhost:8080/board" , obj );
        console.log( response.data );
        setBoards(response.data);
        boardPrint();
    }

    // [3] 출력할 데이터들 을 관리하는 useState
    const [ boards , setBoards ] = useState( [ {bno : 1 , bcontent : 'test' , bwriter : 'test' } ] );
    
    // [4] 출력할 데이터들 을 axios 이용하여 스프링에게 요청 , [2-3] 실행 ,[5] 실행
    const boardPrint = async()=>{
        const response = await axios.get( "http://localhost:8080/board" ); // 4-1 : axios 요청
        setBoards( response.data ) ; // 4-2 : axios 요청값을 setState 이용한 재렌더링
    }
     // [5] useEffect 이용한 *최초컴포넌트* 실행시 출력함수 실행
    useEffect( ()=>{ boardPrint() } , [ ] ) // 의존성배열이 비어있는 경우 ☆☆☆1번만☆☆☆ 실행

    // [6] JS 정의/만들기 하는방법 3가지
    // 1. function 함수명(){ }   // 2. function(){}   // 3. ( )=>{ }
    async function boardDelete ( deleteBno ){
        // 6-1 : axios 이용하여 삭제할번호를 스프링 서버에게 보내서 요청한다.
        const response = await axios.delete( "http://localhost:8080/board?bno="+deleteBno );
        // ** 6-2 ** : 삭제할 bno를 매개변수로 받아서 반복문 이용하여 삭제할 bno를 제외한 새로운 리스트 생성
        const newBoards = boards.filter( (board) => { return board.bno != deleteBno } )
        setBoards( [...newBoards ] ); // 6-3 : 재렌더링
        // ** 6-2 ** : [4] 함수를 재실행하여 axios 와 재렌더링한다.
        // boardPrint();
    }

    return(<>
    
        <h3> 스프링 서버의 boardService13(day07) 통신 </h3>
        내용 : <input className="bcontent" value={ bcontent } onChange={ ( e ) => { setBcontent( e.target.value ) } }/> <br/>
        작성자 : <input className="bwriter" value={ bwriter } onChange={ ( e ) => { setBwriter( e.target.value ) } }/>
        <button onClick={ boardWrite }> 등록 </button>
        <button onClick={ boardPrint }> 출력 </button>


        {
            boards.map( (board)=>{ 
                return <div> 
                        번호 : { board.bno }, 내용 : { board.bcontent }, 작성자 : { board.bwriter } 
                            <button onClick={ ()=>{ boardDelete( board.bno ) } }> 삭제 </button>
                        </div>
            })
        }

        


        


    
    </>)

}