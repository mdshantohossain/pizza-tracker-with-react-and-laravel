


const Checkout = () => {


    return(
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Checkout</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Checkout</li>
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


            <section className="checkout ptb-150">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="billing-detail">
                                    <h4 className="mb-20">Billing Details</h4>
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="First Name" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Last Name" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Company Name" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="email" placeholder="Email Address" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" placeholder="Phone No" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" placeholder="Country" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" placeholder="House number and street name" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" placeholder="Apartment, suit, unit, etc." className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" placeholder="Postcode / Zip" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="text" placeholder="Town / City" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="create_account" required="" />
                                                        <label className="form-check-label" for="create_account">Create an Account?</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="add-info md-mb-40">
                                    <h4 className="mb-20">Additional Information</h4>
                                    <div className="form-group p-0">
                                        <textarea className="form-control" placeholder="Order Notes"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <div className="your-order">
                                    <h4 className="mb-20">Your Order</h4>
                                    <div className="product-box">
                                        <div className="product-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/pizza-1.png" alt="Item Image" /></a>
                                        </div>
                                        <div className="product-detail">
                                            <a href="shop-detail.html" className="pro-title">Shrimp pizza</a>
                                            <div className="qty-box">
                                                <span className="price">$35.00</span>
                                                <span className="qty">× 3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-box">
                                        <div className="product-img">
                                            <a href="shop-detail.html"><img src="src/assets/images/pizza-2.png" alt="Item Image" /></a>
                                        </div>
                                        <div className="product-detail">
                                            <a href="shop-detail.html" className="pro-title">Cheese pizza</a>
                                            <div className="qty-box">
                                                <span className="price">$45.00</span>
                                                <span className="qty">× 2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="checkout-total">
                                    <ul>
                                        <li>
                                            <span className="subtotal">Subtotal</span>
                                            <span className="subtotal-amount">$160.00</span>
                                        </li>
                                        <li>
                                            <span className="subtotal">Shipping Cost</span>
                                            <span className="subtotal-amount">$04.00</span>
                                        </li>
                                        <li>
                                            <span className="grand-total">Total</span>
                                            <span className="total-amount">$164.00</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pay-method">
                                    <h4 className="mb-20">Payment Method</h4>
                                    <ul>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="payment" id="bank_transfer" checked="" />
                                                    <label className="form-check-label" for="bank_transfer">Direct bank transfer</label>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="payment" id="check_payments" />
                                                    <label className="form-check-label" for="check_payments">Check payments</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="payment" id="cash_delivery" />
                                                    <label className="form-check-label" for="cash_delivery">Cash on delivery</label>
                                            </div>
                                        </li>

                                        <li>
                                            <button className="btn-ct">
                                                Place Order
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Checkout