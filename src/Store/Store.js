import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./Cart";
import RestaurantListSlice from "./RestaurantList";

var appStore = configureStore({
    reducer: {
        cart:CartSlices,
        RestaurantList:RestaurantListSlice
    }
});

export default appStore;