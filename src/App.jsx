import React, {useEffect, useState} from 'react';
import NavBar from "./components/navBar.jsx";
import SideBar from "./components/sideBar.jsx";
import {Route, Routes} from "react-router-dom";
import Add from "./pages/add.jsx";
import List from "./pages/list.jsx";
import Orders from "./pages/orders.jsx";
import Login from "./components/login.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '$';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token')
        ? localStorage.getItem('token')
        : '');

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <ToastContainer />
            {token === ""
                ? <Login setToken={setToken} />
                : <>
                    <NavBar setToken={setToken} />
                    <hr />
                    <div className="flex w-full">
                        <SideBar/>
                        <div className="w-[70%] mx-auto ml-[max(5vh,25px)] my-8 text-gray-600 text-base">
                            <Routes>
                                <Route path="/add" element={<Add token={token}/>} />
                                <Route path="/list" element={<List token={token}/>} />
                                <Route path="/orders" element={<Orders token={token}/>} />
                            </Routes>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default App;