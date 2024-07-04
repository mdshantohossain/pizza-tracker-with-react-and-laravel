import NavWrapper from "../middleware/wrapper/NavWrapper.jsx";
// import Loader from "../common/Loader.jsx";


const Header = () => {

    return(
        <>
            <Loader/>
            <header>
                <div className="header-vacter">
                    <img src="src/assets/images/header-img.png" alt="Vacter Image"/>
                </div>
                <div className="container-big">
                    <div className="header-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-5">
                                <div className="header-logo">
                                    <a href="/"><img src="src/assets/images/logo.png" alt="Brand Logo"/></a>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-7">
                                <div className="main-menu">
                                    <div className="menu-toggle">
                                        <span></span>
                                    </div>
                                    <div className="menu">
                                        <div className="sidemenu-header">
                                            <div className="sidemenu-logo">
                                                <img src="src/assets/images/logo.png" alt="Brand Logo"/>
                                            </div>
                                            <div className="sidemenu-close">
                                                <span></span>
                                            </div>
                                        </div>


                                        <NavWrapper/>

                                    </div>
                                    <div className="icon-menu">
                                        <ul>
                                            <li className="search">
                                                <a href="javascript:void(0)">
                                                    <img src="src/assets/images/search-icon.png" className="normal-icon"
                                                         alt="Search Icon"/>
                                                    <img src="src/assets/images/search-icon-2.png"
                                                         className="hover-icon" alt="Search Icon"/>
                                                </a>
                                            </li>
                                            <li className="cart-slide position-r">
                                                <a href="javascript:void(0)">
                                                    <img src="src/assets/images/cart-icon.png" className="normal-icon"
                                                         alt="Cart Icon"/>
                                                    <img src="src/assets/images/cart-icon-2.png" className="hover-icon"
                                                         alt="Cart Icon"/>
                                                    <span className="cart-count">0</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header