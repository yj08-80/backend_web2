/*
    스토어 : 여러 개의 상태를 보관하는 저장소, 1개 존재해야한다
    configureStore()
*/

import { configureStore  } from "@reduxjs/toolkit";
import  useReducer from "./userSlice.jsx";

const store = configureStore({
    reducer : {
        user : useReducer
    }
});

export default store;