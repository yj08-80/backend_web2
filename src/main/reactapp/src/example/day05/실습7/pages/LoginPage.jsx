import { useDispatch , useSelector } from "react-redux"
import { login , logout } from "../store/userSlice"
import { useNavigate } from "react-router-dom";

export default function LoginPage( props ){

    // [1] 액션(상태변경) 하기 위한 dispatch 함수 가져오기
    const dispatch = useDispatch();
    // [2] 가상 URL로 페이지 전환하기 위한 navigate 함수 가져오기
    const navigate = useNavigate();


    // 로그인 처리 함수 정의 : axios 생략
    const loginHandle = () => {
        alert( "[로그인성공]");
        // dispatch( login() );
        const obj = { id : 3 , name : "유재석" } // login 액션에 보낼 데이터
        dispatch( login( obj ) );
        navigate("/")
    }

    return(<>
    
        <h3> 로그인페이지 </h3>
        <button onClick={ loginHandle }> 로그인 </button>
    </>)
}