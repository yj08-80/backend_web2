package 실습.과정평가형.model.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class MovieDto {

    // 멤버변수
    private int no; // 영화번호
    private String title; // 영화제목
    private String director; // 영화감독
    private String genre; // 영화장르
    private String content; // 간단한 설명
    private String pwd; // 삭제 위한 비밀번호

}
