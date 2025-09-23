import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/userSlice'
import { useNavigate } from 'react-router-dom';

export default function Header( props ){

    // const { isAuthenticated } = useSelector( ( state ) => state.user );
    // console.log( isAuthenticated );
    const { isAuthenticated , userInfo } = useSelector( (state) => state.user );

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const logoutHandle = () => {
        alert( "[로그아웃 성공]" );
        dispatch( logout() );
        navigate( "/login" );

    }

    return(<>
        <div>
            <h3> 헤더 </h3>
            <ul>
                <li><Link to='/'> 홈 </Link></li>
                { isAuthenticated == true 
                    ? 
                    <div>  
                        <li><span>안녕하세요.{  userInfo.name }님</span></li>
                        <li><Link to='/profile'> 프로필 </Link></li>
                        <button onClick={ logoutHandle }> 로그아웃 버튼 </button> 
                    </div>
                    :
                    <div>  
                        <li><Link to='/login'> 로그인</Link></li>       
                    </div>
                }
            </ul>
            
        </div>
    </>)
}