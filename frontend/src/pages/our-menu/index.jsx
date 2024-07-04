


const OurMenu = () => {


    return(
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Our Menu</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Our Menu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="black-jamun wow fadeInLeft animation-delay-5">
                    <img src="src/assets/images/black-jamun.png" alt="black-jamun" />
                </div>

                <div className="onion-img wow fadeInUp animation-delay-6">
                    <img src="src/assets/images/onion.png" alt="onion" />
                </div>

                <div className="tamato-img wow fadeInUp animation-delay-7">
                    <img src="src/assets/images/tamato.png" alt="tamato" />
                </div>

                <div className="leaf-img wow fadeInRight animation-delay-8">
                    <img src="src/assets/images/banner-leaf.png" alt="banner-leaf" />
                </div>
            </section>

            <section className="our-menu-part ptb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="menu-tabing wow fadeInUp">
                                <ul className="tab-link">
                                    <li><a href="javascript:void(0)" className="btn-ct btn-small active" data-tab="tab-1">All</a></li>
                                    <li><a href="javascript:void(0)" className="btn-ct btn-small" data-tab="tab-2">Slides</a></li>
                                    <li><a href="javascript:void(0)" className="btn-ct btn-small" data-tab="tab-3">Pizzas</a></li>
                                    <li><a href="javascript:void(0)" className="btn-ct btn-small" data-tab="tab-4">Offers</a></li>
                                    <li><a href="javascript:void(0)" className="btn-ct btn-small" data-tab="tab-5">Pasta</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content wow fadeInUp">
                        <div className="tab-panel active" id="tab-1">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-1.jpg" alt="item-1" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Shrimp foods</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-2.jpg" alt="item-2" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">French mayos</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$65.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" />  Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-3.jpg" alt="item-3" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Cheese pizza</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$45.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-4.jpg" alt="item-4" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Russian rolls</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$25.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-5.jpg" alt="item-5" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Seafood burger</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$75.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-6.jpg" alt="item-6" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Sandwich soup</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$55.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab-2">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-3.jpg" alt="item-3" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Cheese pizza</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$45.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-4.jpg" alt="item-4" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Russian rolls</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$25.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-5.jpg" alt="item-5" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Seafood burger</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$75.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-6.jpg" alt="item-6" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Sandwich soup</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$55.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab-3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-6.jpg" alt="item-6" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Sandwich soup</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$55.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-1.jpg" alt="item-1" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Shrimp foods</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-4.jpg" alt="item-4" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Russian rolls</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$25.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-5.jpg" alt="item-5" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Seafood burger</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$75.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab-4">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-2.jpg" alt="item-2" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">French mayos</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$65.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-6.jpg" alt="item-6" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Sandwich soup</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$55.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-4.jpg" alt="item-4" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Russian rolls</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$25.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-5.jpg" alt="item-5" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Seafood burger</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$75.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-2.jpg" alt="item-2" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">French mayos</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$65.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-3.jpg" alt="item-3" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Cheese pizza</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$45.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-1.jpg" alt="item-1" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Shrimp foods</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-5.jpg" alt="item-5" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Seafood burger</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$75.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="menu-item-box">
                                        <div className="menu-item-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/item-4.jpg" alt="item-4" /></a>
                                        </div>
                                        <div className="menu-item-info">
                                            <div className="menu-item-head">
                                                <div className="menu-item-title">
                                                    <h5><a href="shop-detail.html">Russian rolls</a></h5>
                                                </div>
                                                <div className="menu-item-price">
                                                    <span>$25.00</span>
                                                </div>
                                            </div>
                                            <div className="item-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item-des">
                                                <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                            </div>
                                            <div className="menu-item-order">
                                                <a href="shop-detail.html" className="btn-ct btn-small"><img src="src/assets/images/cart-icon-white.png" alt="Cart Icon" /> Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="our-strength position-r pt-150 pb-120 mb-150 bg-yellow overflow-h">
                <div className="strength-vacter wow fadeInRight animation-delay-5">
                    <img src="src/assets/images/strength-vacter.png" alt="Vacter Image" />
                </div>
                <div className="container">
                    <div className="section-heading wow fadeInUp">
                        <h5 className="sub-title">Our Strength</h5>
                        <h2>Why We Are The Best?</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                            <div className="strength-icon">
                                <img src="src/assets/images/all-kinds-of-foods.png" alt="All kinds of Foods" />
                            </div>
                            <div className="strength-content">
                                <h4 className="strength-title">All kinds of Foods</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                            <div className="strength-icon">
                                <img src="src/assets/images/fresh-foods.png" alt="Fresh Foods" />
                            </div>
                            <div className="strength-content">
                                <h4 className="strength-title">Fresh Foods</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                            <div className="strength-icon">
                                <img src="src/assets/images/best-taste.png" alt="Best Taste" />
                            </div>
                            <div className="strength-content">
                                <h4 className="strength-title">Best Taste</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp">
                            <div className="strength-icon">
                                <img src="src/assets/images/on-time-delivery.png" alt="On Time Delivery" />
                            </div>
                            <div className="strength-content">
                                <h4 className="strength-title">On Time Delivery</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="feeddback-part position-r mb-150 overflow-h">
                <div className="feeddback-vacter wow fadeInLeft animation-delay-5">
                    <img src="src/assets/images/leaf.png" alt="Vacter Image" />
                </div>
                <div className="container">
                    <div className="section-heading wow fadeInUp">
                        <h5 className="sub-title">Customer Feedback</h5>
                        <h2>Client Testimonials</h2>
                    </div>

                    <div className="testimonials-slider owl-carousel wow fadeInUp">
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-1.jpg" alt="Johan Doe" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Johan Doe</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-2.jpg" alt="Alex Saanu" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Alex Saanu</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-3.jpg" alt="Jona Leoner" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Jona Leoner</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-4.jpg" alt="Takar Bowa" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Takar Bowa</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-1.jpg" alt="Johan Doe" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Johan Doe</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-2.jpg" alt="Alex Saanu" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Alex Saanu</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-3.jpg" alt="Jona Leoner" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Jona Leoner</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="client-image">
                                <img src="src/assets/images/client-4.jpg" alt="Takar Bowa" />
                            </div>
                            <div className="client-info">
                                <div className="client-name">Takar Bowa</div>
                                <div className="client-desc">
                                    <p>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”</p>
                                </div>
                                <div className="testimonial-rating">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}


export default OurMenu;