package day05._2웹크롤링2;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/task/day05")
@RequiredArgsConstructor // final 멤버변수의 생성자를 자동으로 생성
public class CrawlingController { // class start

    private final CrawlingService crawlingService;

    @GetMapping("/crawling1")
    public Map<String,String> task1(){
        return crawlingService.task1();
    }

    @GetMapping("/crawling2")
    public List<String> task2(){
        return crawlingService.task2();
    }
} // class end
