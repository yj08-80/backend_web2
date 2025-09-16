package day07.model.mapper;


import day07.model.dto.BoardDto;
import org.apache.ibatis.annotations.*;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Mapper
public interface BoardMapper { // interface start

    // 등록
    @Insert("insert into board( bcontent , bwriter ) values ( #{ bcontent } , #{ bwriter } )")
    public boolean boardWrite( BoardDto boardDto );


    // 전체 조회
    @Select("select * from board")
    public List<BoardDto> boardPrint( );

    // 개별 조회
    @Select("select * from board where bno = ( #{ bno })")
    public BoardDto boardFind( int bno );

    // 개별 삭제
    @Delete("delete from board where bno = ( #{ bno }) ")
    public boolean boardDelete( int bno );

    // 개별 수정
    @Update("update board set bcontent = ( #{ bcontent } ) where bno = ( #{ bno }) ")
    public boolean boardUpdate( BoardDto boardDto );
} // interface end
