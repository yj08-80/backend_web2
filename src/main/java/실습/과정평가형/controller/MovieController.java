package 실습.과정평가형.controller;



import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import 실습.과정평가형.model.dto.MovieDto;
import 실습.과정평가형.service.MovieService;

import java.util.List;

@RestController
@RequestMapping("/movie")
@RequiredArgsConstructor
public class MovieController { // class start

    private MovieService movieService;

    // 영화 등록
    @PostMapping("")
    public ResponseEntity<Integer> movieWrite(@RequestBody MovieDto movieDto ){
        int result = movieService.movieWrite( movieDto );
        return ResponseEntity.status( 200 ).body( result );
    }

    // 영화 삭제
    @DeleteMapping("")
    public ResponseEntity<Boolean> movieDelete(@RequestParam String pwd ){
        boolean result = movieService.movieDelete( pwd );
        return ResponseEntity.status( 200 ).body( result );
    }

    // 영화 목록 조회
    @GetMapping("")
    public ResponseEntity<List<MovieDto>> moviePrint(){
        List< MovieDto > result = movieService.moviePrint();
        return ResponseEntity.status( 200 ).body( result );
    }


} // class end
