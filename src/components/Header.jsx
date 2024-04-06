import {useContext, useState} from "react";
import CartDetails from "./CartDetails.jsx";
import {MovieContext, ThemeContext} from "../context/indexContext.js";
import Sun from '../assets/icons/sun.svg'
import Moon from '../assets/icons/moon.svg'

const Header = () => {
    const [showCard, setShowCard] = useState(true);
    const {cartData} = useContext(MovieContext)
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    function handleCardShow() {
        setShowCard(true);
        console.log('True')
    }
    return (
        <header>
            {
                showCard && <CartDetails onClose={setShowCard(false)}/>
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src="../../src/assets/logo.svg" width="139" height="26" alt=""/>
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#" >
                            <img src="../../src/assets/ring.svg" width="24" height="24" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#" onClick={() => setDarkMode(darkMode => !darkMode)}>
                            <img src={darkMode ? Sun : Moon} width="24" height="24" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#" onClick={handleCardShow}>
                            <img src="../../src/assets/shopping-cart.svg" width="24" height="24" alt=""/>
                            {
                                cartData.length > 0 && (
                                    <span
                                        className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                                    {cartData.length}
                                </span>
                                )
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
