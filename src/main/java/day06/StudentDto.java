package day06;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto { // class start

    // 멤버변수
    private int sno;
    private String name;
    private int kor;
    private int math;

} // class end
