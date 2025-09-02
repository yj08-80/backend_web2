package day02;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;
import java.util.Vector;


@Component
public class ChatHandler extends TextWebSocketHandler { // class start


    // ********** 서버에 접속된 클라이언트 소켓 명단 목록 **********
    private static final List< WebSocketSession > 접속명단 = new Vector<>();
        // * ArrayList 동기화 안됨, Vector 동기화 안됨 지원o : 채팅은 동시다발적으로 요청이 있으므로 동기화



    // 1. 클라이언트 소켓이 서버소켓으로부터 연결을 성공했을때 실행되는 메소드
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        System.out.println( "[서버] 클라이언트소켓과 연동 성공" );
        // WebSocketSession이란 : ws 기반으로 클라이언트가 요청한 정보가 저장된 객체
        // HttpSession이란 : http 기반으로 클라이언트가 요청한 정보가 저장된 객체
        System.out.println( "[클라이언트 웹소켓 객체] : " + session );
        // 1. 접속된 클라이언트 소켓들을 저장 : 받은 메세지를 접속된 소켓들에게 재전송 하기
        접속명단.add( session ); // 서버와 접속 성공한 클라이언트 소켓을 리스트에 저장

    }

    // 2. 클라이언트 소켓이 서버소켓과 연결을 끊겼을 때 실행되는 메소드

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        System.out.println( "[서버] 클라이언트소켓과 연동 종료" );

        // 1. 클라이언트 소켓과 연결이 끊겼을 때 접속명단에서 제외
        접속명단.remove( session );
    }


    // 3. 클라이언트 소켓이 서버소켓에게 메세지를 보냈을 때 실행되는 메소드

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        super.handleTextMessage(session, message);
        System.out.println( "[서버] 클라이언트로부터 메세지가 도착" );
        System.out.println( "[메세지 확인] " + message.getPayload() );

        // [*] 서버가 클라이언트에게 메세지 보내기
        // session.sendMessage( new TextMessage( "메세지 잘 받았습니다." ) );
        // 메세지를 받을 세션.sendMessage()
        // 서버로부터 메세지를 보내온 클라이언트 소켓에게 메세제를 보내는 예제

        // 1. 특정한 클라이언트 소켓으로부터 받은 메세지를 현재 접속된 다른 클라이언트 소켓들에게 메세지를 보내기
        for( WebSocketSession clientSocket : 접속명단 ){
            // 접속명단(리스트) 내 저장(접속)된 클라이언트소켓들을 하나씩 꺼낸다/
            // 클라이언트소켓 하나씩 .sendMessage 함수를 이용한 서버가 받은 메세지를 보내준다.
            clientSocket.sendMessage( message ); // message : 서버가 받은 메시지

        }
    }


    //
} // class end
