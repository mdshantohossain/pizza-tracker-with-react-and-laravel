


 const Footer = () => {

    return(
        <footer>
            <div className="footer ptb-100 bg-yellow position-r overflow-h">
                <div className="footer-pattern-1 wow fadeInLeft animation-delay-5">
                    <img src="src/assets/images/logo.png" alt="logo" />
                </div>
                <div className="footer-pattern-2 wow fadeInRight animation-delay-5">
                    <img src="src/assets/images/footer-pattern.png" alt="footer-pattern" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 footer-box wow fadeInUp">
                            <h6 className="footer-title text-uppercase">Information</h6>
                            <ul className="footer-menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="blog-left.html">Blog</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="our-menu.html">Menu</a></li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 footer-box wow fadeInUp">
                            <h6 className="footer-title text-uppercase">Top Items</h6>
                            <ul className="footer-menu">
                                <li><a href="#">Pepperoni</a></li>
                                <li><a href="#">Swiss Mushroom</a></li>
                                <li><a href="#">Barbeque Chicken</a></li>
                                <li><a href="#">Vegetarian</a></li>
                                <li><a href="#">Ham & Cheese</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 footer-box wow fadeInUp">
                            <h6 className="footer-title text-uppercase">Others</h6>
                            <ul className="footer-menu">
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Locations</a></li>
                                <li><a href="#">Legal</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 footer-box wow fadeInUp">
                            <h6 className="footer-title text-uppercase">Social Media</h6>
                            <ul className="footer-social">
                                <li><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="footer-offers-text">
                                <p>Signup and get exclusive offers and coupon codes</p>
                            </div>
                            <div className="footer-sign-up">
                                <a href="#" className="btn-ct btn-small">Sign Up</a>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 terms-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-8 col-lg-9 col-md-12 wow fadeInLeft">
                                    <ul className="policy-menu">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li><a href="#">Cookie Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                                <div className="col-xl-4 col-lg-3 col-md-12 wow fadeInRight">
                                    <ul className="app-list">
                                        <li><a href="#"><img src="src/assets/images/google-play.png" alt="Google Play" /></a></li>
                                        <li><a href="#"><img src="src/assets/images/app-stor.png" alt="App Stor" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="text-center">
                        <p>&#169; 2023 Pizzon. All Rights Reserved by <a href="#">Templatescoder</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

 export default Footer