package day01._1스프링스레드;


import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class ThreadService { // class start
    // 1.
    public int thread1(){
        int result = 0; // 값 저장 변수
        for( int i = 1 ; i<=10 ; i++ ){ // 반복문
            result += i; // 누적
            System.out.println("ThreadService.thread1");
            // ** 만약에 서비스 처리가 늦어진다면 HTTP의 반환?? **
            // 예시] 현재 스레드 1초간 일시정지 , *10 -> HTTP 응답은 10초 후
            try { Thread.sleep(1000);
            }catch ( Exception e ){   System.out.println( e ); }
        } //for end
        return  result; // 누적값 반환
    } // func end

    // 2.
    @Async // 응답 먼저하고 내부적으로 처리하는 상황
    public void thread2(){
        int result = 0;
        for( int i = 1 ; i<=10 ; i++ ){
            result += i;
            System.out.println("ThreadService.thread2");
            try{ Thread.sleep( 1000 ); }
            catch ( Exception e){  System.out.println(e);   }
        }
        // return result;
    } // func end

} // class end
