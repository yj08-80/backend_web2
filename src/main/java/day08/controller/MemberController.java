package day08.controller;


import day08.model.dto.MemberDto;
import day08.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@CrossOrigin( value = "http://localhost:5173" )
public class MemberController { // class start

    private final MemberService memberService;

    // [1] 등록
    @PostMapping("")
    public ResponseEntity< Boolean > memberWrite(@RequestBody MemberDto memberDto ){
        boolean result = memberService.memberWrite( memberDto );
        return ResponseEntity.status( 200 ).body( result );
    }

    // [2] 조회
    @GetMapping("")
    public ResponseEntity<List< MemberDto > > memberPrint(){
        List< MemberDto > result = memberService.memberPrint();
        return ResponseEntity.status( 200 ).body( result );
    }

    // [3] 삭제
    @DeleteMapping("")
    public ResponseEntity< Boolean > memberDelete( @RequestParam int no ){
        boolean result = memberService.memberDelete( no );
        return ResponseEntity.status( 200 ).body( result );
    }



} // class end
