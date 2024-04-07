import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MovieList from "./components/MovieList.jsx";
import {MovieContext, ThemeContext} from "./context/indexContext.js";
import {useReducer, useState} from "react";
import {cartReducer, initialState} from "./reducers/CartReducer.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
     const [darkMode, setDarkMode] = useState(true);
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <MovieContext.Provider value={{state, dispatch}}>
                    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
                        <Header/>
                        <main>
                            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                                <Sidebar/>
                                <MovieList/>
                            </div>
                        </main>
                    </div>
                    <ToastContainer />
                </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}
