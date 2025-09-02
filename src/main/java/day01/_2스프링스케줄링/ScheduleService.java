package day01._2스프링스케줄링;


import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class ScheduleService { // class start
    // 1. 3초마다 자동으로 실행하는 서비스 메소드
    // @Scheduled( fixedRate = 밀리초 ) 밀리초란? 1000의 1초
    @Scheduled( fixedRate = 3000 ) // 3초
    public void task1(){
        System.out.println("[3초]ScheduleService.task1");
    } //func end

    // 2. 5초마다 자동으로 실행하는 서비스 메소드
    final int time = 5000; // 계산식 또는 변수 사용시 final(상수) 사용한다.
    @Scheduled( fixedRate = time )
    public void task2(){
        System.out.println("[5초]ScheduleService.task2");
    }

    // * (서버)시스템 날짜/시간 기준으로 자동실행 스케줄링(백그라운드/비동기/멀티스레드)
    // 3. 현재 시스템의 매 시간 0:0:5초 가 될때 마다 자동실행
    // @Scheduled( cron = 초 분 시 일 월 요일 )
    @Scheduled( cron = "*/5 * * * * *") // 5초마다 실행
    public void task3(){
        System.out.println("[cron5초] ScheduleService.task3");
    }

    @Scheduled( cron = "0 */1 * * * *") // 현재시스템 시간이 00초 될때마다 , 예시] 12:21:00 , 12:22:00
    public void task4(){
        System.out.println("[cron1분]ScheduleService.task4");
    }

} // class end
