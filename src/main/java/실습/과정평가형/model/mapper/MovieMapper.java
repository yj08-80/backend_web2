package 실습.과정평가형.model.mapper;


import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import 실습.과정평가형.model.dto.MovieDto;

import java.util.List;

@Mapper
public interface MovieMapper { // interface start

    // 영화 등록
    @Insert( "INSERT INTO movie (title, director, genre, content, pwd) VALUES (#{title}, #{director}, #{genre}, #{content}, #{pwd})")
    public int movieWrite( MovieDto movieDto );

    // 영화 삭제
    @Delete("DELETE FROM movie WHERE movie_id = #{movie_id} AND pwd = #{pwd}")
    public boolean movieDelete( int movie_id , String pwd );

    // 영화 목록 조회
    @Select( "SELECT * FROM movie")
    public List< MovieDto > moviePrint();



} // interface end
