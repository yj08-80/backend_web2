package day06;


import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Mapper // 해당 인터페이스를 스프링 컨테이너에 등록, DAO 역할을 대신
public interface BatisMapper { // interface start

    // 1. 학생 등록
    // DAO : insert into student( name , kor, math ) values ( ? , ? , ? );
    // myBatis : insert into student( name , kor, math ) values ( #{ 매개변수 } , #{ 매개변수 } , #{ 매개변수 } );
    @Insert("insert into student( name , kor, math ) values ( #{name} , #{kor} , #{math} )")
    int save( StudentDto studentDto ); // 추상메소드
    // 1 : 성공 0 : 실패


    // 2. 전체 학생 조회
    @Select("select * from student")
    List< StudentDto > findAll();

    // 3. 개별 학생 조회, DTO 가능하지만 MAP 테스트
    @Select("select * from student where sno = #{ sno }")
    Map< String , Object > find( int sno );


    // 4. 개별 학생 삭제
    @Delete("delete from student where sno = #{sno}")
    int delete( int sno );

    // 5. 개별 학생 수정
    @Update("update student set kor = ${kor} , math = ${math} where sno = ${sno}")
    int update( StudentDto studentDto );
} // interface end
