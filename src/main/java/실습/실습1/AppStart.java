package 실습.실습1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling // 스케줄링 활성화
public class AppStart { // class start
    public static void main(String[] args) {
        SpringApplication.run( AppStart.class );
    }
} // class end