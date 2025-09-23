import { BrowserRouter , Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Header from './component/Header';

export default function App( props ){
    
    return(<>
        <BrowserRouter>
            <h3> 루트 페이지 </h3>
            <Header/>
            <Routes>
                <Route path="/" element={ <HomePage/> }></Route>
                <Route path="/login" element={ <LoginPage/> }></Route>
                <Route path="/profile" element={ <ProfilePage/> }></Route>
            </Routes>
        </BrowserRouter>
    </>)
}