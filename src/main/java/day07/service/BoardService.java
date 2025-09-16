package day07.service;


import day07.model.dto.BoardDto;
import day07.model.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService { // class start
    private final BoardMapper boardMapper;

    // [1] 등록
    public boolean boardWrite( BoardDto boardDto ) {
        boolean result = boardMapper.boardWrite(boardDto);
        return result;
    }

    // [2] 전체 조회
    public List<BoardDto> boardPrint(){
        List<BoardDto> result = boardMapper.boardPrint();
        return result;
    }

    // [3] 개별 조회
    public BoardDto boardFind( int bno ){
        BoardDto result = boardMapper.boardFind( bno );
        return result;
    }

    // [4] 개별 삭제
    public boolean boardDelete( int bno ){
        boolean result = boardMapper.boardDelete( bno );
        return result;
    }

    // [5] 개별 수정
    public boolean boardUpdate( BoardDto boardDto ){
        boolean result = boardMapper.boardUpdate( boardDto );
        return result;
    }
} // class end
