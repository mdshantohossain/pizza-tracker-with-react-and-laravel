

const FoodDetail = () => {

    return(
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Shop Detail</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Shop Detail</li>
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


            <section className="shop-detail ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 md-mb-40">
                            <div className="glasscase-main">
                                <ul id="glasscase" className="gc-start">
                                    <li><img src="src/assets/images/pizza-img-1.png" alt="pizza-img-1" /></li>
                                    <li><img src="src/assets/images/pizza-img-2.png" alt="pizza-img-2" /></li>
                                    <li><img src="src/assets/images/pizza-img-3.png" alt="pizza-img-3" /></li>
                                    <li><img src="src/assets/images/pizza-img-4.png" alt="pizza-img-4" /></li>
                                    <li><img src="src/assets/images/pizza-img-5.png" alt="pizza-img-5" /></li>
                                    <li><img src="src/assets/images/pizza-img-2.png" alt="pizza-img-6" /></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="product-detail">
                                <h2 className="product-title">Shrimp Pizza</h2>
                                <div className="product-price">
                                    <div className="price">
                                        <span>$35.00</span>
                                    </div>
                                    <div className="rating-summary-block">
                                        <div className="star-rating">
                                            <input id="star-5" type="radio" name="rating" value="star-5" />
                                                <label for="star-5" title="5 stars">
                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                </label>
                                                <input id="star-4" type="radio" name="rating" value="star-4" />
                                                    <label for="star-4" title="4 stars">
                                                        <i className="active fa fa-star" aria-hidden="true"></i>
                                                    </label>
                                                    <input id="star-3" type="radio" name="rating" value="star-3" />
                                                        <label for="star-3" title="3 stars">
                                                            <i className="active fa fa-star" aria-hidden="true"></i>
                                                        </label>
                                                        <input id="star-2" type="radio" name="rating" value="star-2" />
                                                            <label for="star-2" title="2 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-1" type="radio" name="rating" value="star-1" />
                                                                <label for="star-1" title="1 star">
                                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                                </label>
                                        </div>
                                        <a href="#product-review" className="review-link"><span>8 Reviews</span></a>
                                    </div>
                                </div>

                                <div className="product-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat. Viverra facilisi turpis eget tempor. Mattis risus amet euismod eleifend.</p>
                                    <p>Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor incididunt labore et magna aliqua.</p>
                                </div>

                                <div className="product-cat-info">
                                    <ul>
                                        <li>
                                            <span className="product-cat-label">Category :</span>
                                            <span className="product-cat-des">
											<a href="#">Chicken,</a>
											<a href="#">Launch,</a>
											<a href="#">Pizza,</a>
											<a href="#">Burger</a>
										</span>
                                        </li>
                                        <li>
                                            <span className="product-cat-label">Tags :</span>
                                            <span className="product-cat-des">
											<a href="javascript:void(0)">Healthy,</a>
											<a href="javascript:void(0)">Organic,</a>
											<a href="javascript:void(0)">Chicken,</a>
											<a href="javascript:void(0)">Sauce</a>
										</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="add-cart-box">
                                    <div className="number">
                                        <input type="text" value="1" />
                                            <span className="minus"><i className="fa fa-angle-up" aria-hidden="true"></i></span>
                                            <span className="plus"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="cart-button">
                                        <a href="cart.html" className="btn-ct">Add To Cart</a>
                                    </div>
                                    <div className="wish-list">
                                        <a href="#" className="wish-btn"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product-desc-inf ptb-100 bg-yellow" id="product-review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-tabing">
                                <ul className="tab-link">
                                    <li><a href="javascript:void(0)" className="btn-ct active" data-tab="tab-1">Description</a></li>
                                    <li><a href="javascript:void(0)" className="btn-ct" data-tab="tab-2">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content product-tab-content">
                        <div className="tab-panel active" id="tab-1">
                            <div className="product-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab-2">
                            <div className="product-review">
                                <h4 className="mb-15">Review</h4>
                                <p>There are no reviews yet.</p>
                                <strong>Be the first to review “Shrimp Pizza”</strong>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <span>Your Rating *</span>
                                <div className="star-rating">
                                    <input id="star-10" type="radio" name="rating" value="star-10" />
                                        <label for="star-10" title="10 stars">
                                            <i className="active fa fa-star" aria-hidden="true"></i>
                                        </label>
                                        <input id="star-9" type="radio" name="rating" value="star-9" />
                                            <label for="star-9" title="9 stars">
                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                            </label>
                                            <input id="star-8" type="radio" name="rating" value="star-8" />
                                                <label for="star-8" title="8 stars">
                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                </label>
                                                <input id="star-7" type="radio" name="rating" value="star-7" />
                                                    <label for="star-7" title="7 stars">
                                                        <i className="active fa fa-star" aria-hidden="true"></i>
                                                    </label>
                                                    <input id="star-6" type="radio" name="rating" value="star-6" />
                                                        <label for="star-6" title="6 star">
                                                            <i className="active fa fa-star" aria-hidden="true"></i>
                                                        </label>
                                </div>
                                <form method="post">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" className="form-control" placeholder="Your Name*" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" className="form-control" placeholder="Your Email*" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-button">
                                            <button className="btn-ct">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="related-product ptb-100">
                <div className="container">
                    <div className="heading-part">
                        <h2 className="related-pro-title">Related Products</h2>
                    </div>
                    <div className="tab-panel active">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="menu-item-box rotate-img">
                                    <div className="menu-item-img">
                                        <a href="shop-detail.html"><img src="src/assets/images/pizza-1.png" alt="pizza-1" /></a>
                                    </div>
                                    <div className="menu-item-info">
                                        <div className="menu-item-head">
                                            <div className="menu-item-title">
                                                <h5><a href="shop-detail.html">Shrimp pizza</a></h5>
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
                                <div className="menu-item-box rotate-img">
                                    <div className="menu-item-img">
                                        <a href="shop-detail.html"><img src="src/assets/images/pizza-2.png" alt="pizza-2" /></a>
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
                                <div className="menu-item-box rotate-img">
                                    <div className="menu-item-img">
                                        <a href="shop-detail.html"><img src="src/assets/images/pizza-3.png" alt="pizza-3" /></a>
                                    </div>
                                    <div className="menu-item-info">
                                        <div className="menu-item-head">
                                            <div className="menu-item-title">
                                                <h5><a href="shop-detail.html">Seafood pizza</a></h5>
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
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default FoodDetail;