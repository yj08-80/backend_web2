
import axios from "axios";
import { useEffect , useState } from "react";
// import './Test1.css'


export default function Test1( props ){

    const [ title , setTitle ] = useState("");
    const [ director , setDirector ] = useState("");
    const [ genre , setGenre ] = useState("");
    const [ content , setContent ] = useState("");
    const [ pwd , setPwd ] = useState("");
    const [ movieList , setMovieList ] = useState( [ ] );

    // [1] axios 이용하여 스프링 서버에게 등록 요청
    const movieWrite = async() => {
        const obj = { title , director , genre , content , pwd };
        const response = await axios.post( "http://localhost:8080/movie" , obj );
        console.log( response.data );
        moviePrint();
        
    }

    // 출력할 데이터들을 axios를 이용하여 스프링에게 요청
    const moviePrint = async() => {
        const response = await axios.get( "http://localhost:8080/movie");
        setMovieList( response.data );
    }

    useEffect( () => { moviePrint() } , [] );

    // [3] axios 이용하여 스프링 서버에게 삭제 요청
    const movieDelete = async() => {
        const response = await axios.delete( `http://localhost:8080/movie?movie_id=${ movie_id }`)
        const newMovie = movieList.filter( ( movie ) => { return movie.movie_id != movie_id} );
        console.log( response.data );
        setMovieList( [ ...movieList ] );
        moviePrint();
    }

    return(<>

        <h3> 영화 </h3>
        <input value={ title } placeholder="영화 제목" onChange={ (e) => setTitle( e.target.value ) } /><br/>
        <input value={ director} placeholder="영화 감독" onChange={ (e) => setDirector( e.target.value ) }/><br/>
        <input value={ genre } placeholder="영화 장르" onChange={ (e) => setGenre( e.target.value ) }/><br/>
        <input value={ content } placeholder="간단한 설명" onChange={ (e) => setContent( e.target.value ) }/><br/>
        <input value={ pwd } placeholder="삭제시 본인확인용 비밀번호" onChange={ (e) => setPwd( e.target.value ) }/>
        <button onClick={ movieWrite }> 등록 </button>
        {movieList.map( (movie) => {
            return(
                <div>
                    <ul>
                        <li className="movie_id"> 영화 등록 번호 </li>
                        <li className="title"> 영화 제목 </li>
                        <li className="director"> 영화 감독 </li>
                        <li className="genre"> 영화 장르 </li>
                        <li className="content"> 간단한 설명 </li>
                    </ul>
                </div>
        );
        })}
        
    </>)
}