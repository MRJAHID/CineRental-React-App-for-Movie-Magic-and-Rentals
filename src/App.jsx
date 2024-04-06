import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MovieList from "./components/MovieList.jsx";
import {MovieContext, ThemeContext} from "./context/indexContext.js";
import {useState} from "react";

export default function App() {
    const [cartData, setCartData] = useState([]);
    const [darkMode, setDarkMode] = useState(true);
    return (
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <MovieContext.Provider value={{cartData, setCartData}}>
                    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
                        <Header/>
                        <main>
                            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                                <Sidebar/>
                                <MovieList/>
                            </div>
                        </main>
                    </div>
                </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}
