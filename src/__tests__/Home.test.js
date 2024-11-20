const { render,screen, fireEvent } = require("@testing-library/react")
const { default: Home } = require("../Components/AppBody/AppBody")

import { act } from "react-dom/test-utils";
import MOCKRESLIST from "./MockResList.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCKRESLIST);
        }
    })
})


test("It should search component of home screen",async ()=>{
    await act(()=>{
        render(<BrowserRouter><Home></Home></BrowserRouter>);
    });

    var searchBar  = screen.getByTestId("searchBar");
    fireEvent.change(searchBar,{target:{value:"burger"}});
    
    var SearchBtn = screen.getByText("Search");
    fireEvent.click(SearchBtn);

    var ResCard  = screen.getAllByTestId("ResCard");
    expect(ResCard.length).toBe(2);
})