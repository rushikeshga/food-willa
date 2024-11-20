import { fireEvent, render, screen } from "@testing-library/react";
import AppHeader from "../Components/AppHeader/AppHeader";
import Home from "../Components/AppBody/AppBody";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../Store/Store";
import { act } from "react-dom/test-utils";
import RESTDATA from "./RestData.json";
import Restaurants from "../Components/AppBody/restaurants";
import "@testing-library/jest-dom"
import AddtoCart from "../Pages/AddtoCart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTDATA);
        }
    })
})

test("should Test Add to cart flow",async ()=>{
   await act(()=>{render(
    <BrowserRouter>
    <Provider store={appStore}>
            <AppHeader/>
            <Restaurants></Restaurants>
            <AddtoCart></AddtoCart>
            </Provider>
    </BrowserRouter>)});

    var AddBtn = screen.getAllByTestId("AddBtn");
     expect(AddBtn.length).toBe(20);
     fireEvent.click(AddBtn[0]);

     expect(screen.getByText("Cart1")).toBeInTheDocument();

     var Cart = screen.getByText("Cart1");
     fireEvent.click(Cart);
     expect(screen.getAllByText("Crispy Veg Burger+Fries(M)").length).toBe(2);
     expect(screen.getByText("Cart data")).toBeInTheDocument();

     
});