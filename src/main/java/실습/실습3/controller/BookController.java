package 실습.실습3.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import 실습.실습3.service.BookService;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/books/rent")
public class BookController { // class start

    private final BookService bookService;

    @PostMapping("")
    public boolean bookLoantrans(@RequestBody Map<String, Object> transInfo ) {
        int id = Integer.parseInt(transInfo.get("id").toString()) ;
        String member = (String) transInfo.get("member");
        return bookService.bookLoantrans( id, member);
    }

    @PostMapping("/return")
    public boolean bookReturntrans(@RequestBody Map<String, Object>  transInfo ) {
        int book_id = Integer.parseInt(transInfo.get("book_id").toString());
        String member = (String) transInfo.get("member");
        return bookService.bookReturntrans( book_id, member );
    }

} // class end
