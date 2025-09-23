import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

// const initialState = { isAuthenticated : false }

// const userSlice = createSlice({
//     name : "user",
//     initialState,
//     reducer : {
//         login : ( state ) => { state : isAuthenticated = true },
//         logout : ( state ) => { state : isAuthenticated = false }
//     }
// })

// export default userSlice.reducer;
// export const { login , logout } = userSlice.actions;

/*
    슬라이스 : 상태(state) , 리듀서(reducer) , 액션(action) 정의하는 곳
    createSlice
 */

// [1] 상태의 초기값 정의, 로그인 여부, 로그인회원정보
const initialState = { isAuthenticated : false , userInfo : null }
// [2] 슬라이스 정의
const userSlice = createSlice({
    name : "loginInfo", // 슬라이스/상태명
    initialState,
    reducers : {
        login : ( state , action ) => {
             state.isAuthenticated = true; // 로그인 여부 true로 변경
             // action 할 때 전달되는 매개변수의 payload 안에 값이 들어있다
             state.userInfo = action.payload; // 예) dispatch( login( "안녕" ) ), payload = "안녕 "
            },
        logout : ( state ) => {
             state.isAuthenticated = false; // 로그인 여부 false로 변경
             state.userInfo = null; // 로그인회원정보 null로 변경
            }
    } // 여러 개의 상태 변경 함수 정의한 곳
});
// [3] store에 저장할 수 있게 export 해주기
export default userSlice.reducer; // 현재 정의한 리듀서(reducer)들을 store 등록 예정
// [4] 서로 다른 컴포넌트에서 액션이 가능하도록 login이나 logout export 해주기
export const { login , logout } = userSlice.actions;

