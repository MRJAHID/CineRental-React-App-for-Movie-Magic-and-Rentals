const Header = () => {
    return (
        <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src="../../src/assets/logo.svg" width="139" height="26" alt=""/>
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <img src="../../src/assets/ring.svg" width="24" height="24" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <img src="../../src/assets/icons/moon.svg" width="24" height="24" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <img src="../../src/assets/shopping-cart.svg" width="24" height="24" alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
