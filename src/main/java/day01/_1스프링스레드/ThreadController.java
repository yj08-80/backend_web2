package day01._1스프링스레드;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController                 // 1. http 요청/응답 처리
@RequestMapping("/task/day01")  // 2. http url 연결(매핑)
@RequiredArgsConstructor
public class ThreadController { // class start
    // [*] 서비스 객체
    private final ThreadService threadService;

    // 1. http://localhost:8080/task/day01
    @GetMapping // 동기화 : 스프링 매핑 컨트롤러는 자동 동기화 처리한다.
    // 먼저 요청을 한 HTTP 부터 처리후 반환 한다. // 요청 순서대로
    public int thread1(){
        System.out.println("ThreadController.thread1");
        return threadService.thread1();
    }

    // 2. http://localhost:8080/task/day01
    @DeleteMapping
    public void thread2(){
        System.out.println("ThreadController.thread2");
        threadService.thread2();
    }


} // class end
