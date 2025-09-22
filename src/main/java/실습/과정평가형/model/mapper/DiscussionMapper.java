package 실습.과정평가형.model.mapper;


import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import 실습.과정평가형.model.dto.DiscussionDto;

import java.util.List;

@Mapper
public interface DiscussionMapper { // interface start

    // 토론 글 작성
    @Insert( "INSERT INT movdiscussionie (id, movieId, content, password) VALUES (#{id}, #{movieId}, #{content}, #{password})")
    public int disWrite( DiscussionDto discussionDto );

    // 토론 글 삭제
    @Delete( "DELETE FROM discussion WHERE password = ( #{password} ) ")
    public boolean disDelete( String password );

    // 영화별 토론 전체 조회
    @Select( "SELECT * FROM discussion where movieId = ( #{movieId} )")
    public List< DiscussionDto > disPrint( int movieId );
} // interface end
