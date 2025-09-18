package day08.model.mapper;


import day08.model.dto.MemberDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MemberMapper { // interface start

    // [1] 등록
    @Insert( "insert into members( name , phone , age ) values ( #{ name } , #{ phone } , #{ age } )")
    public boolean memberWrite( MemberDto memberDto );

    // [2] 조회
    @Select( "select * from members" )
    public List< MemberDto > memberPrint();

    // [3] 삭제
    @Delete("delete from members where no = #{no}")
    public boolean memberDelete( int no );
} // interface end
