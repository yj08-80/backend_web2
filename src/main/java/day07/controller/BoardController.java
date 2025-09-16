package day07.controller;


import day07.model.dto.BoardDto;
import day07.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Delete;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController { // class start

    private final BoardService boardService;

    // [1] 등록
    @PostMapping("") // localhost:8080/board
    public ResponseEntity<Boolean> boardWrite(@RequestBody BoardDto boardDto ) {
        boolean result = boardService.boardWrite(boardDto);
        return ResponseEntity.status(200).body(result);
        // ResponseEntity.status( HTTP응답코드 ).body( 응답자료 );
    }

    // [2] 전체 조회
    @GetMapping("")
    public ResponseEntity<List<BoardDto>> boardPrint(){
        List<BoardDto> result = boardService.boardPrint();
        return ResponseEntity.status(200).body(result);
    }

    // [3] 개별 조회
    @GetMapping("/find")
    public ResponseEntity<BoardDto> boardFind( @RequestParam int bno ){
        BoardDto result = boardService.boardFind( bno );
        return ResponseEntity.status(200).body(result);
    }

    // [4] 개별 삭제
    @DeleteMapping("")
    public ResponseEntity<Boolean> boardDelete( @RequestParam int bno ){
        boolean result = boardService.boardDelete( bno );
        return ResponseEntity.status(200).body(result);
    }

    // [5] 개별 수정
    @PutMapping("")
    public ResponseEntity<Boolean> boardUpdate( @RequestBody BoardDto boardDto ){
        boolean result = boardService.boardUpdate( boardDto );
        return ResponseEntity.status(200).body(result);
    }

} // class end
