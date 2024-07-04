




const Cart = () => {

    return(
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Cart</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Cart</li>
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


            <section className="cart ptb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12 col-md-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="product-name">Product</th>
                                        <th className="price">Price</th>
                                        <th className="qty">Quantity</th>
                                        <th className="total-price">Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="product-name">
                                            <div className="product-box">
                                                <div className="product-img">
                                                    <a href="shop-detail.html"><img src="src/assets/images/pizza-1.png" alt="Item Image" /></a>
                                                </div>
                                                <div className="product-detail">
                                                    <a href="shop-detail.html" className="pro-title">Shrimp pizza</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="price">$17.00</td>
                                        <td className="qty">
                                            <div className="number">
                                                <span className="minus"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                                                <input type="text" value="1" />
                                                    <span className="plus"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                            </div>
                                        </td>
                                        <td className="price">$17.00</td>
                                        <td className="remove">
                                            <a className="item-remove" href="#"><img src="src/assets/images/delete.png" alt="delete" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-name">
                                            <div className="product-box">
                                                <div className="product-img">
                                                    <a href="shop-detail.html"><img src="src/assets/images/pizza-2.png" alt="Item Image" /></a>
                                                </div>
                                                <div className="product-detail">
                                                    <a href="shop-detail.html" className="pro-title">Seafood pizza</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="price">$20.00</td>
                                        <td className="qty">
                                            <div className="number">
                                                <span className="minus"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                                                <input type="text" value="1" />
                                                    <span className="plus"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                            </div>
                                        </td>
                                        <td className="price">$20.00</td>
                                        <td className="remove">
                                            <a className="item-remove" href="#"><img src="src/assets/images/delete.png" alt="delete" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-name">
                                            <div className="product-box">
                                                <div className="product-img">
                                                    <a href="shop-detail.html"><img src="src/assets/images/pizza-3.png" alt="Item Image" /></a>
                                                </div>
                                                <div className="product-detail">
                                                    <a href="shop-detail.html" className="pro-title">Cheese pizza</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="price">$30.00</td>
                                        <td className="qty">
                                            <div className="number">
                                                <span className="minus"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                                                <input type="text" value="1" />
                                                    <span className="plus"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                            </div>
                                        </td>
                                        <td className="price">$30.00</td>
                                        <td className="remove">
                                            <a className="item-remove" href="#"><img src="src/assets/images/delete.png" alt="delete" /></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-xl-7 col-lg-7 col-md-7">
                                    <div className="apply-coupon">
                                        <form className="position-r">
                                            <input type="text" name="text" className="form-control" placeholder="Coupon code" required="" />
                                                <button className="btn-ct btn-small">Apply Coupon</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5">
                                    <div className="update-cart">
                                        <button className="btn-ct btn-small">Update Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 col-md-12">
                            <div className="cart-totals">
                                <h4 className="cart-title">Cart Total</h4>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>Item(s) Subtotal</td>
                                        <td className="right-price">$160.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Cost</td>
                                        <td className="right-price">$04.00</td>
                                    </tr>
                                    <tr>
                                        <td className="totals">Order Total</td>
                                        <td className="right-price totals">$164.00</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="checkout-btn text-center">
                                    <a href="checkout.html" className="btn-ct btn-small">Proceed To Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cart