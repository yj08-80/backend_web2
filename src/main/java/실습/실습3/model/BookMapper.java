package 실습.실습3.model;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface BookMapper { // interface start

    // (1) 도서 대출 - 책 재고 감소
    @Update("UPDATE books SET stock = stock -1 where id = ( #{id} ) and stock > 0")
    public int bookLoan( int id );

    // (2) 도서 대출 - 대출 기록 추가
    @Insert("INSERT INTO rentals (book_id, member, rent_date) VALUES (#{book_id}, #{member}, NOW())")
    public int addBookLoan( int book_id , String member );

    // (3) 도서 반납 - 책 재고 증가
    @Update("UPDATE books SET stock = stock + 1 WHERE id = #{book_id}")
    public int bookReturn( int id );

    // (4) 도서 반납 - 대출 기록 추가
    @Update("UPDATE rentals SET return_date = NOW() WHERE book_id = #{book_id} AND member = #{member} AND return_date IS NULL")
    public int addBookReturn( int book_id , String member);

} // interface end
