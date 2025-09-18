package day08.service;


import day08.model.dto.MemberDto;
import day08.model.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService { // class start
    private final MemberMapper memberMapper;

    // [1] 등록
    public boolean memberWrite( MemberDto memberDto ){
        boolean result = memberMapper.memberWrite( memberDto );
        return result;
    }

    // [2] 조회
    public List< MemberDto > memberPrint(){
        List< MemberDto > result = memberMapper.memberPrint();
        return result;
    }

    // [3] 삭제
    public boolean memberDelete( int no ){
        boolean result = memberMapper.memberDelete( no );
        return result;
    }
} // class end
