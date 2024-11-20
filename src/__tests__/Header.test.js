const { render,screen, fireEvent } = require("@testing-library/react");
const { default: AppHeader } = require("../Components/AppHeader/AppHeader");
const { Provider } = require("react-redux");
const { default: appStore } = require("../Store/Store");
const { BrowserRouter } = require("react-router-dom");
import "@testing-library/jest-dom"

test("should Render header compontent",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <AppHeader/>
            </Provider>
        </BrowserRouter>
    );

    var loginButton = screen.getByRole("button",{name:"LogIn"})
    expect(loginButton).toBeInTheDocument();
});

test("should Render header Cart compontent",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <AppHeader/>
            </Provider>
        </BrowserRouter>
    );

    var loginButton = screen.getByText(/Cart/)
    expect(loginButton).toBeInTheDocument();
});

test("on login button click, button should change to logout",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <AppHeader/>
            </Provider>
        </BrowserRouter>
    );

    var loginButton = screen.getByRole("button",{name:"LogIn"});
    fireEvent.click(loginButton);
    var logOutButton = screen.getByRole("button",{name:"LogOut"});
    expect(logOutButton).toBeInTheDocument();
});