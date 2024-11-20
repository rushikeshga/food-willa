import { createSlice } from "@reduxjs/toolkit";

const CartSlices = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
        addToCart:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            state.items.pop(action.payload);
        },
        clearItmes:(state, action)=>{
            state.items.length = 0;
        }
    }
} 
);

export const {addToCart,removeItem,clearItmes} = CartSlices.actions;
export default CartSlices.reducer;

