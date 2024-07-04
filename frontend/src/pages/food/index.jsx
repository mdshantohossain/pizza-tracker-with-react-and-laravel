

const Food = () => {

    return(
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Shop List</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Shop List</li>
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


            <section className="shop-list ptb-150 overflow-h">
                <div className="container">
                    <div className="shop-filter">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="filter-btn wow fadeInLeft">
                                    <a href="javascript:void(0)" className="btn-ct btn-small"><img src="src/assets/images/filter.png" alt="Cart Icon" /> Filter</a>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="sorting wow fadeInRight">
                                    <span className="results">Showing all 9 results</span>
                                    <div className="fillter-dropdown">
                                        <select className="form-control">
                                            <option>Default Sorting</option>
                                            <option>A - Z</option>
                                            <option>Z - A</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-panel active">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="menu-item-box wow fadeInUp">
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
                                <div className="menu-item-box wow fadeInUp">
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
                                <div className="menu-item-box wow fadeInUp">
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
                                <div className="menu-item-box wow fadeInUp">
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
                                <div className="menu-item-box wow fadeInUp">
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
                                <div className="menu-item-box wow fadeInUp">
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
                    <div className="custom-pagination text-center pt-50 wow fadeInUp">
                        <ul>
                            <li><a href="#" className="active">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>


        </main>
    )
}


export default Food;