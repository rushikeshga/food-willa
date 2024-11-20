import { createSlice } from "@reduxjs/toolkit";

const RestaurantListSlice = createSlice({
    name:"RestaurantList",
    initialState:{
        RestaurantList :[]
    },
    reducers:{
        setRestaurantData :(state, action)=>{
            state.RestaurantList= action.payload;
        }
    }
});

export default RestaurantListSlice.reducer;
export const {setRestaurantData} = RestaurantListSlice.actions