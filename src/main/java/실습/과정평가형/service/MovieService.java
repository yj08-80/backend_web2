package 실습.과정평가형.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import 실습.과정평가형.model.dto.MovieDto;
import 실습.과정평가형.model.mapper.MovieMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService { // class start

    private final MovieMapper movieMapper;

    // 영화 등록
    public int movieWrite( MovieDto movieDto ){
        int result = movieMapper.movieWrite( movieDto );
        return result;
    }

    // 영화 삭제
    public boolean movieDelete( String pwd ){
        boolean result = movieDelete( pwd );
        return result;
    }

    // 영화 목록 조회
    public List< MovieDto > moviePrint(){
        List< MovieDto > result = movieMapper.moviePrint();
        return result;
    }
} // class end
