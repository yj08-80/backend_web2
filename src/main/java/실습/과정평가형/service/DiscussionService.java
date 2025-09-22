package 실습.과정평가형.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import 실습.과정평가형.model.dto.DiscussionDto;
import 실습.과정평가형.model.mapper.DiscussionMapper;

import java.util.List;


@Service
@RequiredArgsConstructor
public class DiscussionService { // class start

    private final DiscussionMapper discussionMapper;

    // 토론 글 작성
    public int disWrite( DiscussionDto discussionDto ){
        int result = discussionMapper.disWrite( discussionDto );
        return result;
    }

    // 토론 글 삭제
    public boolean disDelete( String password ){
        boolean result = discussionMapper.disDelete( password );
        return  result;
    }

    // 영화별 토론 전체 조회
    public List<DiscussionDto> disPrint( int movieId ){
        List<DiscussionDto> result = discussionMapper.disPrint( movieId );
        return result;
    }

} // class end
