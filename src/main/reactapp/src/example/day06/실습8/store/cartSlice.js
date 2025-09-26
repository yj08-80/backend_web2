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




// [1] 카트 전역상태 어떻게 구상할지 초기값 선언 , 테스트 과정에서는 샘플데이터
// const cart = [
//     { id : 1 , name: "아메리카노", price: 3000 , count : 3 } ,
//     { id: 3 , name: "카푸치노", price: 4500 , count : 1 },
// ] 
// const 초기값 = { cart : [  ] }
const 초기값 = { cartList : [ { id : 1 , name: "아메리카노", price: 3000 , count : 3 }  ] }
// [2] 슬라이스 구성 : 상태 와 상태변경 함수를 구성(객체) 
import { createSlice } from '@reduxjs/toolkit'
const 카트슬라이스 = createSlice( {
    name : "cart",
    initialState : 초기값 , 
    reducers : { 
        담기 : ( state , action ) => { // 액션으로 부터 받은 제품을 상태에 담기 
            // 1. 액션으로 부터 받은 제품이 cart(상태)에 존재하는지 검사
            const 저장할제품 = action.payload // 
            let 찾기 = false;
            state.cartList.forEach( (p)=>{
                // 2. 만약에 cart에 존재하는 제품이면 count 1증가
                if( p.id == 저장할제품.id ){ 
                    p.count += 1; 찾기 = true; 
                }
            })
            // 2. 아니면 cart에 제품정보를 count 1로 해서 push 한다. 
            저장할제품.count = 1;
            if( 찾기==false ) { 
                state.cartList.push(  저장할제품 ); 
            }
        } , 
        취소 : ( state , action ) => {} 
    }
})
// [3] 내보내기 
export default 카트슬라이스.reducer
export const 담기 = 카트슬라이스.actions.담기
export const 취소 = 카트슬라이스.actions.취소
// --> export const { 담기 , 취소 } = 카트슬라이스.actions