

// import storage from 'redux-persist/lib/storage'
// import { configureStore } from '@reduxjs/toolkit';
// import cartSlice from './cartSlice.js';
// import { persistStore , persistReducer } from 'redux-persist';


// const persistConfig = { key : "menu" , storage };

// const persistedReducer = persistReducer( persistConfig , cartSlice );


// const store = configureStore({
//     reducer : {
//         menu : persistedReducer
//     }
// });

// export default store;
// export const persistor = persistStore( store );

import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice.js"

// [4] persist 적용 : f5 새로고침 리덕스상태 유지
import storage from "redux-persist/lib/storage"
const 퍼시스트옵션 = { key : "cart" , storage } // localStorage
// [5] 내가 만든 슬라이스에 퍼시스트 옵션 적용하기
import { persistReducer , persistStore } from "redux-persist"
const 퍼시스트슬라이스 = persistReducer( 퍼시스트옵션 , cartSlice );

// [1] 스토어 만들기
const store = configureStore({
    reducer : {
        // [2] 내가 만든 슬라이스를 등록해주기
        cart : 퍼시스트슬라이스
    }
})
// [3] 스토어 내보내기
export default store;
export const persistor = persistStore( store );
