/*

    컴포넌트란 ? 화면(출력할HTML)의 최소로 쪼개진 모듈
        즉) 함수, 코드를 최적화하여 쪼개는 것과 화면을 최적화하기 위해 쪼개는 것
    만드는방법
        1. 생성할 폴더를 오른쪽 클릭해서 [새파일]
        2. 첫글자를 대문자로 시작하여, .jsx 확장자로 생성한다. 영문 권장!
        3. 함수형 컴포넌트를 만들기 위한 JS문법으로 함수 선언과 동일하게 컴포넌트 선언
            function 컴포넌트명( props ){}
            - 파일 내 default 컴포넌트명은 파일명과 주로 동일하게 사용한다.
        4. 컴포넌트(함수) 안에 return 뒤로 출력할 HTML 작성한다.
        5. 다른(main.jsx) 파일에서 해당 컴포넌트를 import할 수 있게 export 정의한다.

        

*/

function Component1( props ){
    return <h1> 내가 만든 첫 컴포넌트 </h1>
} // func end
// [2] 컴포넌트 기본 내보내기
export default Component1;