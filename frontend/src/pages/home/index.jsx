import HomeBannerSection from "../../components/home/HomeBannerSection.jsx";
import DailyFresh from "../../components/home/DailyFresh.jsx";
import OurMenu from "../our-menu/index.jsx";
import StorySection from "../../components/home/StorySection.jsx";
import FeedBackSection from "../../components/home/FeedBackSection.jsx";
import Reservation from "../../components/home/Reservation.jsx";
import OurBlogSection from "../../components/home/OurBlogSection.jsx";


const Home = () => {


    return(
        <>

            <main className="main">

                <HomeBannerSection />

                <DailyFresh />

                <OurMenu />

                <StorySection />

                <FeedBackSection />

                <Reservation />

                <OurBlogSection />
            </main>


            <div className="search-popup">
                <div className="search-overlay"></div>
                <div className="search-form">
                    <button className="close"></button>
                    <form>
                        <input type="text" name="search" placeholder="What are you looking for?" className="search-input" />
                            <button type="submit"><img src="src/assets/images/search-icon-white.png" alt="Search Icon" /></button>
                    </form>
                </div>
            </div>


            <div className="cart-drawer">
                <div className="bg-overlay"></div>
                <div className="drawer-content">
                    <div className="w-100">
                        <div className="cart-header">
                            <h6 className="title text-uppercase">SHOPPING CART</h6>
                            <button className="close"></button>
                        </div>
                        <div className="cart-list">
                            <div className="cart-list-inner">
                                <div className="cart-item">
                                    <div className="item-image">
                                        <a href="shop-detail.html"><img src="src/assets/images/pizza-1.png" alt="Item Image" /></a>
                                    </div>
                                    <div className="item-detl">
                                        <div className="item-name">
                                            <a href="shop-detail.html">Shrimp pizza</a>
                                            <a className="item-remove" href="#"><img src="src/assets/images/delete.png" alt="delete" /></a>
                                        </div>
                                        <div className="item-price">
                                            <span>$35.00</span>
                                        </div>
                                        <div className="quantity-editer">
                                            <div className="quantity">
                                                <button type="button" className="sub minus">-</button>
                                                <input className="count" name="quantity" type="number" value="1" min="1" max="10" />
                                                    <button type="button" className="add plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="item-image">
                                        <a href="shop-detail.html"><img src="src/assets/images/pizza-2.png" alt="Item Image" /></a>
                                    </div>
                                    <div className="item-detl">
                                        <div className="item-name">
                                            <a href="shop-detail.html">Seafood pizza</a>
                                            <a className="item-remove" href="#"><img src="src/assets/images/delete.png" alt="delete" /></a>
                                        </div>
                                        <div className="item-price">
                                            <span>$65.00</span>
                                        </div>
                                        <div className="quantity-editer">
                                            <div className="quantity">
                                                <button type="button" className="sub minus">-</button>
                                                <input className="count" name="quantity" type="number" value="1" min="1" max="10" />
                                                    <button type="button" className="add plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="item-image">
                                        <a href="shop-detail.html"><img src="src/assets/images/pizza-3.png" alt="Item Image" /></a>
                                    </div>
                                    <div className="item-detl">
                                        <div className="item-name">
                                            <a className="item-title" href="shop-detail.html">Cheese pizza</a>
                                            <a className="item-remove" href="#"><img src="src/assets/images/delete.png" alt="delete" /></a>
                                        </div>
                                        <div className="item-price">
                                            <span>$45.00</span>
                                        </div>
                                        <div className="quantity-editer">
                                            <div className="quantity">
                                                <button type="button" className="sub minus">-</button>
                                                <input className="count" name="quantity" type="number" value="1" min="1" max="10" />
                                                    <button type="button" className="add plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-footer">
                        <div className="sub-total">
                            <strong>Subtotal:</strong> <span className="sprice">$66.70</span>
                        </div>
                        <div className="cart-footer-des">
                            <p>Taxes and shipping calculated at checkout</p>
                        </div>
                        <div className="cart-button">
                            <ul>
                                <li><a href="cart.html" className="btn-ct btn-small">View Cart</a></li>
                                <li><a href="checkout.html" className="btn-ct btn-small subtotal">Checkout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home