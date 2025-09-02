console.log( "socket open" );

const client = new WebSocket("/alarm");

client.onopen = ( event )=>{
    console.log( "익명의 유저가 접속했습니다." );
}

client.onclose = ( event )=>{
    console.log( "익명의 유저가 퇴장했습니다." );
}


client.onmessage = ( event )=>{
    console.log( event );
    alert( event.data );
 
}