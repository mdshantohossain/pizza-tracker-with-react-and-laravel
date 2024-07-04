


const Blog = () => {


    return(
        <main>

            <section className="sub-banner bg-yellow overflow-h position-r">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="sub-banner-content wow fadeInLeft">
                                <h1 className="sub-banner-title">Blog Left</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="bread-crumb wow fadeInRight">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Blog Left</li>
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


            <section className="blog-list ptb-150 overflow-h">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 order-md_2">
                            <div className="blog-sidebar wow fadeInLeft">
                                <div className="blog-search position-r mb-50">
                                    <input type="text" name="search" className="form-control" placeholder="Search..." />
                                        <button className="blog-search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </div>

                                <div className="blog-cate mb-50">
                                    <h2 className="blog-cat-title">Categories</h2>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span className="cat-name"><img src="src/assets/images/right-arrow-red.png" alt="Right Arrow" />Hamburger</span>
                                                <span className="count">(05)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="cat-name"><img src="src/assets/images/right-arrow-red.png" alt="Right Arrow" />Talian Pizza</span>
                                                <span className="count">(07)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="cat-name"><img src="src/assets/images/right-arrow-red.png" alt="Right Arrow" />Veg Soup</span>
                                                <span className="count">(03)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="cat-name"><img src="src/assets/images/right-arrow-red.png" alt="Right Arrow" />Seafoods</span>
                                                <span className="count">(02)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="recent-news mb-50">
                                    <h2 className="blog-cat-title">Recent News</h2>
                                    <div className="news-box">
                                        <div className="news-img">
                                            <a href="blog-detail.html"><img src="src/assets/images/recent-1.jpg" alt="recent-1" /></a>
                                        </div>
                                        <div className="news-detail">
                                            <span className="date">07 Mar 2022</span>
                                            <a href="blog-detail.html" className="news-title">How to keep fear from your art business</a>
                                        </div>
                                    </div>
                                    <div className="news-box">
                                        <div className="news-img">
                                            <a href="blog-detail.html"><img src="src/assets/images/recent-2.jpg" alt="recent-2" /></a>
                                        </div>
                                        <div className="news-detail">
                                            <span className="date">07 Mar 2022</span>
                                            <a href="blog-detail.html" className="news-title">How to keep fear from your art business</a>
                                        </div>
                                    </div>
                                    <div className="news-box">
                                        <div className="news-img">
                                            <a href="blog-detail.html"><img src="src/assets/images/recent-3.jpg" alt="recent-3" /></a>
                                        </div>
                                        <div className="news-detail">
                                            <span className="date">07 Mar 2022</span>
                                            <a href="blog-detail.html" className="news-title">How to keep fear from your art business</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-tags mb-50">
                                    <h2 className="blog-cat-title">Tags Cloud</h2>
                                    <ul>
                                        <li><a href="javascript:void(0)">Restaurent</a></li>
                                        <li><a href="javascript:void(0)">Seafoods</a></li>
                                        <li><a href="javascript:void(0)">Burger</a></li>
                                        <li><a href="javascript:void(0)">Pizza</a></li>
                                        <li><a href="javascript:void(0)">Bread</a></li>
                                        <li><a href="javascript:void(0)">Drinks & Fruits</a></li>
                                        <li><a href="javascript:void(0)">Masalas</a></li>
                                    </ul>
                                </div>

                                <div className="blog-social">
                                    <h2 className="blog-cat-title">Follow Us</h2>
                                    <ul className="footer-social">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-12 order-md_1">
                            <div className="blog-list-part wow fadeInRight">
                                <div className="blog-singel-list">
                                    <div className="blog-img">
                                        <a href="blog-detail.html"><img src="src/assets/images/blog-list-1.jpg" alt="blog-list-1" /></a>
                                    </div>
                                    <div className="blog-list-content">
                                        <div className="blog-date"><span>07 Mar 2022 </span></div>
                                        <h3 className="blog-title"><a href="blog-detail.html">How to keep fear from ruining your art business with confident</a></h3>
                                        <a href="blog-detail.html" className="read-more">Read More <img src="src/assets/images/right-arrow-red.png" alt="Right Arrow" /></a>
                                    </div>
                                </div>

                                <div className="blog-singel-list">
                                    <div className="blog-img">
                                        <a href="blog-detail.html"><img src="src/assets/images/blog-list-2.jpg" alt="blog-list-2" /></a>
                                    </div>
                                    <div className="blog-list-content">
                                        <div className="blog-date"><span>07 Mar 2022 </span></div>
                                        <h3 className="blog-title"><a href="blog-detail.html">How to keep fear from ruining your art business with confident</a></h3>
                                        <a href="blog-detail.html" className="read-more">Read More <img src="src/assets/images/right-arrow-red.png" alt="Right Arrow" /></a>
                                    </div>
                                </div>

                                <div className="blog-singel-list">
                                    <div className="blog-img">
                                        <a href="blog-detail.html"><img src="src/assets/images/blog-list-3.jpg" alt="blog-list-3" /></a>
                                    </div>
                                    <div className="blog-list-content">
                                        <div className="blog-date"><span>07 Mar 2022 </span></div>
                                        <h3 className="blog-title"><a href="blog-detail.html">How to keep fear from ruining your art business with confident</a></h3>
                                        <a href="blog-detail.html" className="read-more">Read More <img src="src/assets/images/right-arrow-red.png" alt="Right Arrow" /></a>
                                    </div>
                                </div>

                                <div className="custom-pagination text-center">
                                    <ul>
                                        <li><a href="#" className="active">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
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

export default Blog