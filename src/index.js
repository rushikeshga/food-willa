import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Components/AppBody/AppBody';
import Restaurants from './Components/AppBody/Restaurants';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import BackDrop from './Components/BackDrop';

const AddToCart = lazy(()=>import("./Pages/AddtoCart"));
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path : "/",
        element :<App/>,
        errorElement :<Error></Error>,
        children : [{
            path : "/",
            element :<Home/>,
        },{
            path : "/about",
            element:<About></About>
        },{
            path : "/contact",
            element:<Contact></Contact>
        },{
            path : "/restaurant/:resId",
            element: <Restaurants></Restaurants>
        },{
            path : "/AddToCart",
            element: <Suspense fallback = {<h2>Loading</h2>}><AddToCart/></Suspense>
        },{
            path: "/Login",
            element: <><BackDrop/><Login/></>
        },{
            path: "/SignUp",
            element: <SignUp/>
        }]
    }
])
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
