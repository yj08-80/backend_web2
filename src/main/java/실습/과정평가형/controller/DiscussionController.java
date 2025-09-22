package 실습.과정평가형.controller;


import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Select;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import 실습.과정평가형.model.dto.DiscussionDto;
import 실습.과정평가형.service.DiscussionService;

import java.util.List;

@RestController
@RequestMapping("/discussion")
@RequiredArgsConstructor
public class DiscussionController { // class start

    private final DiscussionService discussionService;

    // 토론 글 작성
    @PostMapping("")
    public ResponseEntity<Integer>disWrite(@RequestBody DiscussionDto discussionDto ){
        int result = discussionService.disWrite( discussionDto );
        return ResponseEntity.status( 200 ).body( result );
    }

    // 토론 글 삭제
    @DeleteMapping("")
    public ResponseEntity<Boolean>disDelete( @RequestParam String password ){
        boolean result = discussionService.disDelete( password );
        return ResponseEntity.status( 200 ).body( result );
    }

    // 영화별 토론 전체 조회
    @Select("")
    public ResponseEntity<List< DiscussionDto >>disPrint( int movieId ){
        List<DiscussionDto> result = discussionService.disPrint( movieId );
        return ResponseEntity.status( 200 ).body( result );
    }

} // class end