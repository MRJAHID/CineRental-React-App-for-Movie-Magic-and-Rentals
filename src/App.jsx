import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MovieList from "./components/MovieList.jsx";
import {MovieContext} from "./context/indexContext.js";
import {useState} from "react";

export default function App() {
    const [cartData, setCartData] = useState([]);
    return (
        <>
            <MovieContext.Provider value={{cartData, setCartData}}>
                <Header/>
                <main>
                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                        <Sidebar/>
                        <MovieList/>
                    </div>
                </main>
            </MovieContext.Provider>
        </>
    )
}
