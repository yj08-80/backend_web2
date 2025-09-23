// [1] CSS 가져오기
import './Task6.css';
// [2] 라우터로 사용할 최초 컴포넌트
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useRef } from "react";


// [1] 메인페이지 컴포넌트
function Home( props ){
    return(<>
        <h3> 홈페이지 </h3>
        <h5>좌측 메뉴에서 회원가입 또는 로그인으로 이동해보세요. </h5>
    </>)
}

// [2] 회원가입 페이지
function SignUp( props ){

    // 입력상자들을 참조하는 useRef
    const idRef = useRef( null );
    const pwdRef = useRef( null );
    // 라우터 전용 페이지 전환 함수
    const navigate = useNavigate();
    // 특정한 이벤트에서 참조중인 useRef current 확인하기
    const 회원가입 = async() => {
        const id = idRef.current.value;
        const pwd = pwdRef.current.value;
        const obj = [ id , pwd ];
        console.log( obj );
        // * axios를 이용한 서버( 스프링 ) 통신했다 가정하고
        alert( [ "회원가입 성공 " ] );
        navigate( "/login" ) // 라우터방식
    }
    return(<>
        <h3> 회원가입 페이지 </h3>
        <input ref={ idRef } placeholder='아이디' /><br/>
        <input ref={ pwdRef } placeholder='비밀번호' /><br/>
        <button onClick={ 회원가입 }> 회원가입 </button>
    </>)
}

// [3] 로그인 페이지
function Login( props ){
    // 입력상자들을 참조하는 useRef
    const formRef = useRef( null );
    // 라우터 전용 페이지 전환 함수
    const navigate = useNavigate();
    const 로그인 = async() => {
        console.log( formRef.current );
        const id = formRef.current.elements[ 'id' ].value;
        const pwd = formRef.current.elements[ 'pwd' ].value;
        console.log( "아이디 : " + id );
        console.log( "비밀번호 : " + pwd);
        // axios 썼다 가정하고
        alert( "[로그인 성공]" )
        navigate("/");

    }
    return(<>
        <h3> 로그인 페이지 </h3>
        <form ref={ formRef }>
        <input name='id' placeholder='아이디' /><br/>
        <input name='pwd' placeholder='비밀번호' /><br/>
        <button onClick={ 로그인 } type='button'> 로그인 </button>
        </form>
        
    </>)
}



export default function Task6( props ){

    return(<>
    <BrowserRouter>
    <div className='container'>
        <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/signUp">회원가입</Link></li>
        <li><Link to="/login">로그인</Link></li>
        </ul>
            <div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/signUp' element={<SignUp />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </div>
    </div>
    
    </BrowserRouter>
    
    
    
    </>)
}