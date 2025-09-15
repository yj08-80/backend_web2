package day04._2웹크롤링;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/task/day04")
@RequiredArgsConstructor
public class CrawlingController { // class start

    private final CrawlingService crawlingService;

    // 1. 뉴스 크롤링
    // http://localhost:8080/task/day04/craw1
    @GetMapping("/craw1")
    public List<String> task1(){
        return crawlingService.task1();
    } // func end

    // 2.상품 정보
    @GetMapping("/craw2")
    public List<Map<String,String>> task2(){
        return crawlingService.task2();
    } // func end

    // 3. 날씨 정보
    @GetMapping("/craw3")
    public Map<String,String> task3(){
        return crawlingService.task3();
    }



} // class end
