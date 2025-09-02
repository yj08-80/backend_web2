package 실습.실습2;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;
import java.util.Vector;

@Component
public class AlarmHandler extends TextWebSocketHandler { // class start
    // ******* 서버에 접속된 클라이언트 소켓 명단 목록 *******
    private static final List<WebSocketSession > 접속명단 = new Vector<>();

    // 1. 클라이언트 소켓이 서버 소켓으로부터 연결을 성공했을 때 실행되는 메솓,


    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println( "[서버] 클라이언트소켓과 연동 성공");
        접속명단.add( session );
        for( WebSocketSession clientSocket : 접속명단 ){
            // 접속명단(리스트) 내 저장(접속)된 클라이언트소켓들을 하나씩 꺼낸다/
            // 클라이언트소켓 하나씩 .sendMessage 함수를 이용한 서버가 받은 메세지를 보내준다.
            clientSocket.sendMessage( new TextMessage( "익명의 유저가 접속했습니다." ) ); // message : 서버가 받은 메시지

        }
    }


    // 2. 클라이언트 소켓이 서버소켓과 연결을 끊겼을 때 실행되는 메소드

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println( "[서버] 클라이언트소켓과 연동 종료" );

        // 1. 클라이언트 소켓과 연결이 끊겼을 때 접속명단에서 제외
        접속명단.remove( session );
        for( WebSocketSession clientSocket : 접속명단 ){
            // 접속명단(리스트) 내 저장(접속)된 클라이언트소켓들을 하나씩 꺼낸다/
            // 클라이언트소켓 하나씩 .sendMessage 함수를 이용한 서버가 받은 메세지를 보내준다.
            clientSocket.sendMessage( new TextMessage( "익명의 유저가 퇴장했습니다." ) ); // message : 서버가 받은 메시지

        }
    }


} // class end
