



const HomeBannerSection = () => {


    return (
        <section className="home-banner left-padding overflow-h">
            <div className="black-jamun wow fadeInLeft animation-delay-5">
                <img src="src/assets/images/black-jamun.png" alt="Vacter Image"/>
            </div>
            <div className="home-onion wow fadeInUp animation-delay-5">
                <img src="src/assets/images/onion.png" alt="Vacter Image"/>
            </div>
            <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 home-left-content wow fadeInLeft">
                    <div className="home-banner-content">
                        <h1 className="home-banner-title">Handmade, With an Extra Pinch of <span>Love</span></h1>
                        <div className="home-banner-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <a href="shop-list.html" className="btn-ct btn-large"><img
                            src="src/assets/images/cart-icon-white.png" alt="Cart Icon"/> Order Now</a>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 home-right-img">
                    <div className="home-banner-img">
                        <div className="home-img wow fadeInRight animation-delay-5">
                            <div className="home-img-1">
                                <img src="src/assets/images/banner-img.png" alt="banner-img"/>
                            </div>
                            <div className="home-leaf">
                                <img src="src/assets/images/home-leaf.png" alt="home-leaf"/>
                            </div>
                        </div>
                        <div className="home-img-bottom wow fadeInUp animation-delay-5">
                            <img src="src/assets/images/banner-img-bottom.png" alt="banner-img-bottom"/>
                        </div>
                        <div className="slider-round-box wow fadeInRight">
                            <div className="slider-round">
                                <span className="slider-round-line"></span>
                                <div className="buy-one-get">
                                    <img src="src/assets/images/buy-one-get.png" alt="Vacter Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HomeBannerSection