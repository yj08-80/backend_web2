package day05._1응답객체;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController // HTTP 요청과 응답을 처리하는 클래스
@RequestMapping("/task/day05") // HTTP URL 매핑(연결)하는 어노테이션
public class ResponseController { // class start


    // ====================== HTTP 응답객체 ======================== //
    // 1.
    @GetMapping("/bool")
    // public boolean task1(){}
    public ResponseEntity< Boolean > task1(){
        // return false;
        return ResponseEntity.status( 401 ).body( false ); // 401 : 인증 실패 뜻
    }

    // 2.
    @GetMapping("/int")
    public ResponseEntity< Integer > task2(){
        return ResponseEntity.status( 202 ).body( 1 ); // 202 : 요청 성공했지만 처리중 뜻
    }

    // 3.
    @GetMapping("/string")
    public ResponseEntity< String > task3(){
        return ResponseEntity.status( 201 ).body("qwe123"); // 201 : 요청 성공, 저장 성공, "qwe123"
    }

    // 4. void : 반환이 없다는 뜻
    @GetMapping("/void")
    public ResponseEntity< Void > task4(){
        return ResponseEntity.status( 403 ).build(); // 403 : 접근 권한 없다는 의미, build() : 반환값 없음
    }

    // 5. Dto 또는 Map 반환
    @GetMapping("/object")
    public ResponseEntity<Map<String,String>> task5(){
        try{
            //Integer.parseInt( "a"); // 예제 : 강제로 예외 발생
            Map<String,String> map = new HashMap<>();
            map.put( "data" , "sample" );
            return ResponseEntity.status( 200 ).body( map );
        }catch ( Exception e ){
            return ResponseEntity.status( 500 ).build(); // 500 : 서버 오류
        }
    }

} // class end
