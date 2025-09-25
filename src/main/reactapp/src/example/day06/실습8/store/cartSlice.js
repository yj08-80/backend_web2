// import { createSlice } from '@reduxjs/toolkit'

// const initialState = { cart : [] }

// const menuSlice = createSlice({

//     name : "menuInfo",
//     initialState,
//     reducers : {
//        onCart: ( state, action ) => {
//       // action.payload = 선택된 메뉴 객체
//       state.cart.push( action.payload );
//     }
//     }
// })


// export default menuSlice.reducer;
// export const { onCart } = menuSlice.actions;




// [1] 카트 전역상태 어떻게 구상할지 초기값 선언
const initialState = { cartList : [] } // 테스트 과정에서는 샘플 데이터 정도는 넣어놔도 됨

// [2] 슬라이스 구성 : 상태와 상태를 변경하는 함수를 구성(객체)
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name : "cart",
  initialState,
  reducers : { 담기 : ( state , action ) => {
    // 액션으로부터 받은 제품을 상태에 담기
    // 1. 액션으로부터 받은 제품이 cart(상태)에 존재하는지 검사
    const 저장할제품 = action.payload;
    const 찾기 = false;
    // 2. 만약에 cart에 존재하는 제품이면 count 1 증가
    state.cart.forEach( (p) => {
      if( p.id == 저장할제품.id ){
        p.count += 1, 찾기 = true;
      }
    })
    // 3. 아니면 cart에 제품 정보를 count 1로 해서 push 한다
    저장할제품.count = 1;
    if( 찾기 == false ){
      state.cart.push( 저장할제품 );
    }
  } }
})

// [3] 내보내기
export default cartSlice.reducer;
export const 담기 = cartSlice.actions.담기;

