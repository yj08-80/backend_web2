package 실습.실습3.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import 실습.실습3.model.BookMapper;

@Service
@RequiredArgsConstructor
public class BookService { // class start

    private final BookMapper bookMapper;

    // [1] 도서 대출
    @Transactional
    public boolean bookLoantrans(int id, String member) {
        // 1. 책 재고 감소
        int result1 = bookMapper.bookLoan( id );
        if (result1 == 0) {
            throw new RuntimeException("재고가 없습니다.");
        }

        // 2. 대출 기록 추가
        int result2 = bookMapper.addBookLoan( id, member);
        if (result2 == 0) {
            throw new RuntimeException( "대출 기록에 실패했습니다.");
        }

        return true;
    }


    public boolean bookReturntrans( int book_id , String member ){
        int result1 = bookMapper.bookReturn( book_id );
        if( result1 == 0 ){
            throw new RuntimeException( "책 정보가 없습니다." );
        }

        int result2 = bookMapper.addBookReturn( book_id, member );
        if( result2 == 0 ){
            throw new RuntimeException( "대츨 기록이 없거나 이미 반납했습니다.");
        }
        return true;
    }

} // class end















