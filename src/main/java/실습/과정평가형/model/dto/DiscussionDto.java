package 실습.과정평가형.model.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class DiscussionDto { // class start

    private int id;          // 토론글 번호
    private int movieId;     // 영화 번호
    private String content;  // 내용
    private String password; // 삭제용 비밀번호


} // class end
