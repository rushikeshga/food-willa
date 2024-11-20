const { render,screen, fireEvent } = require("@testing-library/react");
const { default: AppHeader } = require("../Components/AppHeader/AppHeader");
const { Provider } = require("react-redux");
const { default: appStore } = require("../Store/Store");
const { BrowserRouter } = require("react-router-dom");
import Home from "../Components/AppBody/AppBody";
import RestCard from "../Components/AppBody/RestCard";
import MOCK_DATA from "./MockData.json";
import "@testing-library/jest-dom"

test("should Render header compontent",()=>{
    render(
        <RestCard resData = {MOCK_DATA}/>
    );

    var ResName = screen.getByText("Chinese Wok");
    expect(ResName).toBeInTheDocument();
});